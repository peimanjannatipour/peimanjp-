import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const root=document.documentElement;
const motionReduced=()=>document.body.classList.contains('reduced-motion')||matchMedia('(prefers-reduced-motion: reduce)').matches;
const cssAccent=()=>getComputedStyle(root).getPropertyValue('--accent').trim()||'#28b7ff';
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const smooth=t=>t*t*(3-2*t);

function glowTexture(){
  const c=document.createElement('canvas');c.width=c.height=128;
  const x=c.getContext('2d'),g=x.createRadialGradient(64,64,1,64,64,62);
  g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.12,'rgba(255,255,255,.92)');
  g.addColorStop(.42,'rgba(255,255,255,.2)');g.addColorStop(1,'rgba(255,255,255,0)');
  x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
}
const GLOW=glowTexture();

class Stage{
  constructor(el,type='hero'){
    this.el=el;this.type=type;this.mode=el.dataset.mode||'home';this.visible=true;
    this.pointer={x:0,y:0};this.target={x:0,y:0};this.progress=0;this.flowDots=[];this.dataPackets=[];this.orbits=[];
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(type==='hero'?36:32,1,.1,80);
    this.camera.position.set(0,type==='hero' ? 0.18 : 0.65,type==='hero' ? 8.6 : 10.2);
    this.renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?1.2:1.65));
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.18;
    this.renderer.setClearColor(0x000000,0);this.renderer.domElement.className='three-canvas';el.appendChild(this.renderer.domElement);
    this.group=new THREE.Group();this.scene.add(this.group);this.accent=new THREE.Color(cssAccent());this.clock=new THREE.Clock();
    this.addLights(); type==='hero'?this.buildHero():this.buildExplode();
    this.resize=this.resize.bind(this);this.frame=this.frame.bind(this);this.onPointer=this.onPointer.bind(this);
    el.addEventListener('pointermove',this.onPointer,{passive:true});el.addEventListener('pointerleave',()=>{this.target.x=0;this.target.y=0});
    this.ro=new ResizeObserver(this.resize);this.ro.observe(el);
    this.io=new IntersectionObserver(es=>es.forEach(e=>this.visible=e.isIntersecting),{rootMargin:'180px 0px 180px 0px',threshold:0});
    this.io.observe(el);this.resize();requestAnimationFrame(this.frame);
  }
  addLights(){
    this.scene.add(new THREE.HemisphereLight(0xb9e7ff,0x03080d,1.3));
    const key=new THREE.DirectionalLight(0xffffff,3.6);key.position.set(4,5,5);this.scene.add(key);
    this.rim=new THREE.PointLight(this.accent,42,18,2);this.rim.position.set(-4,1.2,2.8);this.scene.add(this.rim);
    this.fill=new THREE.PointLight(0x735dff,19,16,2);this.fill.position.set(4,-2,1.5);this.scene.add(this.fill);
  }
  onPointer(e){const r=this.el.getBoundingClientRect();this.target.x=((e.clientX-r.left)/r.width-.5)*2;this.target.y=-((e.clientY-r.top)/r.height-.5)*2}
  resize(){const r=this.el.getBoundingClientRect();if(!r.width||!r.height)return;this.camera.aspect=r.width/r.height;this.camera.updateProjectionMatrix();this.renderer.setSize(r.width,r.height,false)}
  mat(o={}){
    return new THREE.MeshPhysicalMaterial({color:o.color||0x102b3c,metalness:o.metalness??.58,roughness:o.roughness??.16,transparent:true,opacity:o.opacity??.9,transmission:o.transmission??0,clearcoat:.85,clearcoatRoughness:.14,emissive:o.emissive||this.accent,emissiveIntensity:o.emissiveIntensity??.06,side:THREE.DoubleSide});
  }
  sprite(color=this.accent,size=.22,opacity=.8){
    const m=new THREE.SpriteMaterial({map:GLOW,color,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending});
    const s=new THREE.Sprite(m);s.scale.set(size,size,size);return s;
  }
  line(a,b,color=this.accent,opacity=.45){
    const g=new THREE.BufferGeometry().setFromPoints([a,b]);
    const l=new THREE.Line(g,new THREE.LineBasicMaterial({color,transparent:true,opacity,blending:THREE.AdditiveBlending}));
    this.group.add(l);return l;
  }
  particleCloud(count=170,radius=5){
    const p=new Float32Array(count*3);
    for(let i=0;i<count;i++){const rr=radius*(.28+Math.random()*.72),a=Math.random()*Math.PI*2,z=Math.random()*2-1,k=Math.sqrt(Math.max(0,1-z*z));p[i*3]=Math.cos(a)*k*rr;p[i*3+1]=Math.sin(a)*k*rr;p[i*3+2]=z*rr*.55}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3));
    const m=new THREE.PointsMaterial({color:this.accent,size:.028,transparent:true,opacity:.52,depthWrite:false,blending:THREE.AdditiveBlending});
    this.particles=new THREE.Points(g,m);this.group.add(this.particles);
  }
  addFlow(a,b,count,color=this.accent,speed=.15){
    const mid=a.clone().lerp(b,.5);
    const bend=new THREE.Vector3(-(b.y-a.y)*.18,(b.x-a.x)*.08,.38*Math.sign(a.x||1));
    mid.add(bend);
    const curve=new THREE.QuadraticBezierCurve3(a.clone(),mid,b.clone());
    const trace=new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(curve.getPoints(42)),
      new THREE.LineBasicMaterial({color,transparent:true,opacity:.2,blending:THREE.AdditiveBlending})
    );
    this.group.add(trace);
    for(let i=0;i<count;i++){
      const s=this.sprite(color,.16,i%3===0 ? .95 : .65);
      s.userData={a:a.clone(),b:b.clone(),curve,phase:i/count,speed};
      this.group.add(s);this.flowDots.push(s);
    }
  }
  buildHero(){
    this.particleCloud(this.mode==='home'?(innerWidth<760?120:240):(innerWidth<760?84:160),5.2);
    if(this.mode==='home')this.home();
    if(this.mode==='ndms')this.ndms();
    if(this.mode==='neurolab')this.neurolab();
    if(this.mode==='loopproof')this.loopproof();
  }
  home(){
    this.shells=[];
    [1.18,.86,.56].forEach((r,i)=>{
      const m=new THREE.Mesh(new THREE.IcosahedronGeometry(r,4-i),this.mat({color:i===0?0x0a2a3c:i===1?0x13273c:0x1b3147,metalness:.72-i*.12,roughness:.1+i*.05,opacity:.83-i*.08,transmission:i===0?.06:.14,emissiveIntensity:.08+i*.05}));
      this.group.add(m);this.shells.push(m);
    });
    const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.4,2),new THREE.MeshBasicMaterial({color:this.accent,wireframe:true,transparent:true,opacity:.2,blending:THREE.AdditiveBlending}));this.group.add(wire);this.wire=wire;
    [1.72,2.05,2.38].forEach((r,i)=>{const t=new THREE.Mesh(new THREE.TorusGeometry(r,.018,10,180),new THREE.MeshBasicMaterial({color:i===1?0xffffff:this.accent,transparent:true,opacity:.36-i*.055,blending:THREE.AdditiveBlending}));t.rotation.set(.4+i*.55,.55+i*.65,i*.35);this.group.add(t);this.orbits.push(t)});
    for(let i=0;i<18;i++){const s=this.sprite(i%4===0?0xffffff:this.accent,i%4===0?.32:.18,.88);const a=i/18*Math.PI*2;s.position.set(Math.cos(a)*(2.15+.18*Math.sin(i)),Math.sin(a)*(1.72+.16*Math.cos(i)),(i%5-2)*.22);this.group.add(s)}
    this.primary=this.shells[0];
  }
  ndms(){
    const core=new THREE.Mesh(new THREE.SphereGeometry(.92,64,64),this.mat({color:0x0a3046,metalness:.16,roughness:.04,opacity:.7,transmission:.3,emissiveIntensity:.18}));this.group.add(core);this.primary=core;
    [1.35,1.62,1.89].forEach((r,i)=>{const t=new THREE.Mesh(new THREE.TorusGeometry(r,.022,12,170),new THREE.MeshBasicMaterial({color:i===1?0x8d7cff:this.accent,transparent:true,opacity:.42-i*.07,blending:THREE.AdditiveBlending}));t.rotation.set(i*.75,.35+i*.45,Math.PI/2*i);this.group.add(t);this.orbits.push(t)});
    const inputs=[new THREE.Vector3(-3,1.05,0),new THREE.Vector3(-3,-1.05,.2),new THREE.Vector3(3,.72,-.25),new THREE.Vector3(3,-.72,.1)];
    this.ndmsInputs=[];inputs.forEach((p,i)=>{const n=new THREE.Mesh(new THREE.OctahedronGeometry(.31,2),this.mat({color:i<2?0x153d52:0x292d5d,metalness:.25,opacity:.9,emissiveIntensity:.22}));n.position.copy(p);n.userData.base=p.clone();this.group.add(n);this.ndmsInputs.push(n);const col=i<2?this.accent:new THREE.Color(0x8d7cff);this.line(p,new THREE.Vector3(),col,.35);this.addFlow(p,new THREE.Vector3(),5,col,.11+i*.012)});
    const halo=this.sprite(0xffffff,.7,.8);this.group.add(halo);this.halo=halo;
  }
  neurolab(){
    this.layers=[];
    for(let i=0;i<6;i++){
      const slab=new THREE.Mesh(new THREE.BoxGeometry(4.75,.14,2.95),this.mat({color:i%2?0x102738:0x153248,metalness:.24,roughness:.1,opacity:.52,transmission:.16,emissiveIntensity:.07}));
      slab.position.y=(i-2.5)*.5;slab.rotation.y=.11;this.group.add(slab);this.layers.push(slab);
      const edge=new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry),new THREE.LineBasicMaterial({color:i===3?0xffffff:this.accent,transparent:true,opacity:.22}));edge.position.copy(slab.position);edge.rotation.copy(slab.rotation);this.group.add(edge);
      for(let j=0;j<8;j++){const s=this.sprite(j%3===0?0xffffff:this.accent,.1,.76);s.position.set(-1.75+(j%4)*1.15,slab.position.y+.11,-.85+Math.floor(j/4)*1.7);this.group.add(s)}
    }
    for(let i=0;i<8;i++){const s=this.sprite(i%2?this.accent:0xffffff,.13,.8);s.userData={phase:i/8,speed:.11+i*.007};this.group.add(s);this.dataPackets.push(s)}
    this.primary=this.layers[3];
  }
  loopproof(){
    const pipe=this.mat({color:0x163b32,metalness:.72,roughness:.16,opacity:.96,emissive:new THREE.Color(0x44d98e),emissiveIntensity:.08});
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.35,.17,18,190),pipe);ring.rotation.x=Math.PI/2.45;this.group.add(ring);this.primary=ring;
    this.loopAngle=ring.rotation.x;
    this.loopNodes=[];for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const n=new THREE.Mesh(new THREE.CylinderGeometry(.25,.25,.62,24),this.mat({color:i%2?0x1c4740:0x293b40,metalness:.72,roughness:.13,opacity:.95,emissiveIntensity:.08}));n.position.set(Math.cos(a)*2.35,Math.sin(a)*1.96,Math.sin(a*.7)*.38);n.rotation.z=a;n.userData.baseScale=1;this.group.add(n);this.loopNodes.push(n)}
    const tank=new THREE.Mesh(new THREE.CylinderGeometry(.72,.72,1.55,48),this.mat({color:0x35454b,metalness:.84,roughness:.15,opacity:.96,emissiveIntensity:.03}));tank.position.set(0,0,-.45);this.group.add(tank);
    for(let i=0;i<14;i++){const s=this.sprite(i%4===0?0xffffff:new THREE.Color(0x44d98e),.15,.8);s.userData={phase:i/14,speed:.07+(i%4)*.006};this.group.add(s);this.flowDots.push(s)}
  }
  buildExplode(){
    this.explodeObjects=[];this.particleCloud(innerWidth<760?64:110,4.7);
    this.mode==='loopproof'?this.loopExplode():this.layerExplode();
  }
  layerExplode(){
    if(this.mode==='home'){
      const addEdges=(mesh,color=this.accent,opacity=.28)=>{
        const edge=new THREE.LineSegments(
          new THREE.EdgesGeometry(mesh.geometry),
          new THREE.LineBasicMaterial({color,transparent:true,opacity})
        );
        edge.position.copy(mesh.position);edge.rotation.copy(mesh.rotation);return edge;
      };
      const finish=(g,i)=>{
        g.userData.baseY=(i-2)*.12;g.userData.index=i;
        g.position.y=g.userData.baseY;g.rotation.set(-.055,.13,0);
        this.group.add(g);this.explodeObjects.push(g);
      };

      // 01 / SENSE — physical input plane with distinct sensor nodes.
      {
        const g=new THREE.Group();
        const plate=new THREE.Mesh(new THREE.BoxGeometry(5.35,.13,2.9),this.mat({color:0x0d3042,metalness:.55,roughness:.13,opacity:.76,emissiveIntensity:.055}));
        g.add(plate);g.add(addEdges(plate));
        [[-1.85,-.8],[-.62,.82],[.7,-.72],[1.82,.72]].forEach(([x,z],j)=>{
          const stem=new THREE.Mesh(new THREE.CylinderGeometry(.095,.095,.34,18),this.mat({color:0x1b465a,metalness:.56,roughness:.12,opacity:.96,emissiveIntensity:.12}));
          stem.position.set(x,.2,z);g.add(stem);
          const ring=new THREE.Mesh(new THREE.TorusGeometry(.17,.025,10,40),new THREE.MeshBasicMaterial({color:j%2?0xffffff:this.accent,transparent:true,opacity:.55}));
          ring.position.set(x,.39,z);ring.rotation.x=Math.PI/2;g.add(ring);
          const dot=this.sprite(j%2?0xffffff:this.accent,.13,.78);dot.position.set(x,.39,z);g.add(dot);
        });
        finish(g,0);
      }

      // 02 / STRUCTURE — traceable data rails and provenance nodes.
      {
        const g=new THREE.Group();
        const frame=new THREE.Mesh(new THREE.BoxGeometry(5.05,.12,2.72),this.mat({color:0x112b3d,metalness:.42,roughness:.14,opacity:.48,transmission:.12,emissiveIntensity:.045}));
        g.add(frame);g.add(addEdges(frame,0x7bd7ff,.2));
        for(let r=0;r<3;r++){
          const rail=new THREE.Mesh(new THREE.BoxGeometry(4.2,.045,.055),new THREE.MeshBasicMaterial({color:r===1?0xffffff:this.accent,transparent:true,opacity:r===1?.3:.24}));
          rail.position.set(0,.14,-.72+r*.72);g.add(rail);
          for(let j=0;j<5;j++){
            const n=this.sprite(j===2?0xffffff:this.accent,.085,j===2?.86:.56);
            n.position.set(-1.7+j*.85,.17,-.72+r*.72);g.add(n);
          }
        }
        finish(g,1);
      }

      // 03 / MODEL — smaller compute plane with an explicit model core.
      {
        const g=new THREE.Group();
        const base=new THREE.Mesh(new THREE.BoxGeometry(4.35,.16,2.35),this.mat({color:0x172f4c,metalness:.6,roughness:.1,opacity:.7,transmission:.08,emissiveIntensity:.08}));
        g.add(base);g.add(addEdges(base,0xffffff,.24));
        const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.58,2),this.mat({color:0x184b66,metalness:.34,roughness:.06,opacity:.88,transmission:.12,emissiveIntensity:.2}));
        core.position.y=.55;g.add(core);
        const ring=new THREE.Mesh(new THREE.TorusGeometry(.92,.025,12,90),new THREE.MeshBasicMaterial({color:this.accent,transparent:true,opacity:.5,blending:THREE.AdditiveBlending}));
        ring.position.y=.55;ring.rotation.x=Math.PI/2.35;g.add(ring);
        for(let i=0;i<6;i++){
          const a=i/6*Math.PI*2,n=this.sprite(i%3===0?0xffffff:this.accent,.095,.72);
          n.position.set(Math.cos(a)*1.55,.22,Math.sin(a)*.72);g.add(n);
        }
        finish(g,2);
      }

      // 04 / UNDERSTAND — glass evidence plane with visible comparison bars.
      {
        const g=new THREE.Group();
        const glass=new THREE.Mesh(new THREE.BoxGeometry(4.75,.11,2.55),this.mat({color:0x173344,metalness:.18,roughness:.08,opacity:.42,transmission:.25,emissiveIntensity:.04}));
        g.add(glass);g.add(addEdges(glass,0x8ddfff,.28));
        const widths=[2.6,1.95,3.2];
        widths.forEach((w,i)=>{
          const bar=new THREE.Mesh(new THREE.BoxGeometry(w,.055,.14),new THREE.MeshBasicMaterial({color:i===1?0xffffff:this.accent,transparent:true,opacity:.45}));
          bar.position.set(-1.55+w/2,.2,-.62+i*.62);g.add(bar);
          const dot=this.sprite(i===1?0xffffff:this.accent,.1,.75);dot.position.set(-1.68,.22,-.62+i*.62);g.add(dot);
        });
        finish(g,3);
      }

      // 05 / ACT — bounded output ring with directional endpoints.
      {
        const g=new THREE.Group();
        const base=new THREE.Mesh(new THREE.BoxGeometry(4.4,.13,2.3),this.mat({color:0x103a3a,metalness:.58,roughness:.13,opacity:.72,emissiveIntensity:.07}));
        g.add(base);g.add(addEdges(base,0x44d98e,.28));
        const ring=new THREE.Mesh(new THREE.TorusGeometry(.76,.055,14,70),new THREE.MeshBasicMaterial({color:0x44d98e,transparent:true,opacity:.52,blending:THREE.AdditiveBlending}));
        ring.position.y=.28;ring.rotation.x=Math.PI/2;g.add(ring);
        const dirs=[
          [1.5,.2,0,0,0,-Math.PI/2],[-1.5,.2,0,0,0,Math.PI/2],
          [0,.2,.86,Math.PI/2,0,0],[0,.2,-.86,-Math.PI/2,0,0]
        ];
        dirs.forEach((d,i)=>{
          const cone=new THREE.Mesh(new THREE.ConeGeometry(.15,.46,18),this.mat({color:0x245947,metalness:.5,roughness:.12,opacity:.95,emissive:new THREE.Color(0x44d98e),emissiveIntensity:.12}));
          cone.position.set(d[0],d[1],d[2]);cone.rotation.set(d[3],d[4],d[5]);g.add(cone);
          const dot=this.sprite(i%2?0xffffff:new THREE.Color(0x44d98e),.11,.72);dot.position.set(d[0]*1.16,.22,d[2]*1.16);g.add(dot);
        });
        finish(g,4);
      }

      this.group.scale.setScalar(innerWidth<760 ? .96 : 1.12);
      return;
    }

    const pal=this.mode==='ndms'?[0x12384d,0x172d43,0x28305a,0x15384d,0x0d2f43]:this.mode==='neurolab'?[0x10293a,0x123247,0x162d40,0x1b3550,0x10293a]:[0x10293a,0x123247,0x162d40,0x1b3550,0x10293a];
    for(let i=0;i<5;i++){
      const g=new THREE.Group(),slab=new THREE.Mesh(new THREE.BoxGeometry(5.4,.32,3.25),this.mat({color:pal[i],metalness:.44,roughness:.11,opacity:.7,transmission:.12,emissiveIntensity:.06}));
      g.add(slab);g.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry),new THREE.LineBasicMaterial({color:i===2?0xffffff:this.accent,transparent:true,opacity:.32})));
      for(let j=0;j<12;j++){const s=this.sprite(j%4===0?0xffffff:this.accent,.095,.72);s.position.set(-2.05+(j%6)*.82,.22,-1.05+Math.floor(j/6)*2.05);g.add(s)}
      g.userData.baseY=(i-2)*.18;g.userData.index=i;g.position.y=g.userData.baseY;g.rotation.set(-.04,.13,0);this.group.add(g);this.explodeObjects.push(g);
    }
  }
  loopExplode(){
    for(let i=0;i<5;i++){
      const g=new THREE.Group(),r=1.05+i*.34;
      const ring=new THREE.Mesh(new THREE.TorusGeometry(r,.09,14,140),this.mat({color:i===2?0x235b4c:0x173a33,metalness:.7,roughness:.15,opacity:.86,emissive:new THREE.Color(0x44d98e),emissiveIntensity:.09}));
      ring.rotation.x=Math.PI/2;g.add(ring);
      for(let j=0;j<6;j++){const a=j/6*Math.PI*2,n=new THREE.Mesh(new THREE.BoxGeometry(.25,.25,.25),this.mat({color:0x2a4546,metalness:.72,opacity:.96,emissiveIntensity:.04}));n.position.set(Math.cos(a)*r,0,Math.sin(a)*r);g.add(n)}
      g.userData.baseY=(i-2)*.05;g.userData.index=i;g.position.y=g.userData.baseY;g.rotation.z=i*.1;this.group.add(g);this.explodeObjects.push(g);
    }
  }
  progressFromScroll(){
    if(this.type!=='explode')return;
    const host=this.el.closest('.explode')||this.el,r=host.getBoundingClientRect();
    this.progress=clamp((innerHeight*.72-r.top)/Math.max(1,r.height-innerHeight*.32),0,1);
  }
  chapterProgress(){
    const ch=this.el.closest('[data-cinematic]');
    if(!ch)return 0;
    const r=ch.getBoundingClientRect(),total=Math.max(1,r.height-innerHeight);
    return smooth(clamp((-r.top)/total,0,1));
  }
  updateFlow(t,chapterP=0){
    if(this.mode==='ndms'){
      this.flowDots.forEach(s=>{const u=(t*s.userData.speed*(1+chapterP*1.6)+s.userData.phase)%1;const e=smooth(u);s.position.copy(s.userData.curve ? s.userData.curve.getPoint(e) : s.userData.a.clone().lerp(s.userData.b,e));s.material.opacity=.18+(.58+.22*chapterP)*Math.sin(Math.PI*u);const k=.75+.5*Math.sin(Math.PI*u);s.scale.setScalar(.16*k)});
      if(this.halo)this.halo.scale.setScalar(1+.12*Math.sin(t*2.1));
    }else if(this.mode==='loopproof'&&this.type==='hero'){
      this.flowDots.forEach(s=>{const a=((t*s.userData.speed*(1+chapterP*1.8)+s.userData.phase)%1)*Math.PI*2;const y=Math.sin(a)*1.95,z=Math.sin(a*.7)*.38,x=Math.cos(a)*2.35;s.position.set(x,y,z);s.material.opacity=.4+.55*(.5+.5*Math.sin(a*3))});
    }
    if(this.mode==='neurolab'){
      this.dataPackets.forEach(s=>{const u=(t*s.userData.speed*(1+chapterP*1.25)+s.userData.phase)%1;s.position.set(-2.0+4*u,-1.55+3.1*((u*1.8)%1),-.85+1.7*((u*2.3)%1));s.material.opacity=.35+.6*Math.sin(Math.PI*u)});
    }
  }
  frame(){
    requestAnimationFrame(this.frame);if(!this.visible)return;
    const t=this.clock.getElapsedTime();this.progressFromScroll();
    this.pointer.x+=(this.target.x-this.pointer.x)*.055;this.pointer.y+=(this.target.y-this.pointer.y)*.055;
    const reduced=motionReduced(),chapterP=this.chapterProgress(),accentNow=new THREE.Color(cssAccent());this.accent.lerp(accentNow,.07);this.rim.color.copy(this.accent);
    if(this.particles)this.particles.material.color.copy(this.accent);
    this.updateFlow(t,chapterP);

    if(this.type==='hero'){
      const host=this.el.getBoundingClientRect(),scrollP=clamp(-host.top/Math.max(1,host.height),0,1);
      if(!reduced){
        this.group.rotation.y+=.00125;
        this.group.rotation.x+=(this.pointer.y*.11-this.group.rotation.x)*.045;
        this.group.rotation.z+=(-this.pointer.x*.045-this.group.rotation.z)*.04;
        this.camera.position.x+=(this.pointer.x*.5-this.camera.position.x)*.035;
        this.camera.position.y+=((.16+this.pointer.y*.22)-this.camera.position.y)*.035;
        this.camera.position.z+=(8.6-scrollP*.28-chapterP*.38-this.camera.position.z)*.03;
        if(this.primary)this.primary.rotation.y+=.004;
        this.orbits.forEach((o,i)=>{o.rotation.z+=(i%2?-.0014:.0018);o.rotation.y+=.0008*(i+1)});
        if(this.wire){this.wire.rotation.x-=.0015;this.wire.rotation.y+=.002}
        if(this.layers)this.layers.forEach((l,i)=>{
          const mid=(this.layers.length-1)/2;
          const spread=(i-mid)*.42*chapterP;
          l.position.y=(i-2.5)*.5+spread+Math.sin(t*.7+i*.72)*.035;
          l.position.z=Math.abs(i-mid)*.16*chapterP;
          l.rotation.y=.11+(i-mid)*.018*chapterP;
        });
        if(this.ndmsInputs)this.ndmsInputs.forEach((n,i)=>{
          const b=n.userData.base,phase=clamp((chapterP-i*.08)/.68,0,1);
          const pull=.08+.16*phase;
          n.position.set(b.x*(1-pull),b.y*(1-pull),b.z+Math.sin(t*1.2+i)*.05);
          n.scale.setScalar(.9+.16*phase);
        });
        if(this.mode==='ndms'&&this.primary){
          const pulse=1+chapterP*.12+Math.sin(t*2.2)*(.018+.02*chapterP);
          this.primary.scale.setScalar(pulse);
        }
        if(this.loopNodes)this.loopNodes.forEach((n,i)=>{
          const active=Math.floor(chapterP*6);
          const k=i===Math.min(5,active)?1.18:1;
          n.scale.lerp(new THREE.Vector3(k,k,k),.08);
          n.material.emissiveIntensity+=( (i<=active ? .22 : .06)-n.material.emissiveIntensity)*.08;
        });
        if(this.mode==='loopproof'&&this.primary)this.primary.rotation.z+=.0015+.004*chapterP;
        if(this.shells)this.shells.forEach((s,i)=>{const spread=scrollP*.15*i;s.position.set((i-1)*spread,Math.sin(t*.5+i)*.02,spread*.3);s.rotation.x+=.001*(i+1)});
        if(this.particles){this.particles.rotation.y=t*.014+chapterP*.12;this.particles.material.opacity=.38+.18*chapterP;}
      }
    }else{
      const p=reduced?1:this.progress;
      this.explodeObjects.forEach((g,i)=>{
        const mid=(this.explodeObjects.length-1)/2;
        const start=i*.055,end=.62+i*.055,local=smooth(clamp((p-start)/(end-start),0,1));
        const y=g.userData.baseY+(i-mid)*1.48*local,z=Math.abs(i-mid)*.68*local;
        const x=(i-mid)*.17*local;
        g.position.x+=(x-g.position.x)*.09;g.position.y+=(y-g.position.y)*.09;g.position.z+=(z-g.position.z)*.09;
        g.rotation.y+=(this.pointer.x*.09+(i-mid)*.06*local-g.rotation.y)*.055;
        g.rotation.x+=(-.12+this.pointer.y*.06+(i-mid)*.022*local-g.rotation.x)*.055;
        g.scale.setScalar(.96+.04*local);
      });
      const targetZ=this.mode==='home'?(8.9-p*.38):(10.2-p*.72);this.camera.position.z+=(targetZ-this.camera.position.z)*.04;
      this.group.rotation.y+=(this.pointer.x*.12-this.group.rotation.y)*.04;
      if(this.particles){this.particles.rotation.z=t*.01;this.particles.material.opacity=.26+.24*p}
    }
    this.renderer.render(this.scene,this.camera);
  }
}

document.querySelectorAll('[data-three-hero]').forEach(el=>new Stage(el,'hero'));
document.querySelectorAll('[data-three-explode]').forEach(el=>new Stage(el,'explode'));
