import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const root = document.documentElement;
const motionReduced = () => document.body.classList.contains('reduced-motion') || matchMedia('(prefers-reduced-motion: reduce)').matches;
const cssAccent = () => getComputedStyle(root).getPropertyValue('--accent').trim() || '#28b7ff';

function clamp(v,a,b){ return Math.min(b,Math.max(a,v)); }

function makeGlowTexture(){
  const c=document.createElement('canvas'); c.width=c.height=128;
  const x=c.getContext('2d'), g=x.createRadialGradient(64,64,2,64,64,62);
  g.addColorStop(0,'rgba(255,255,255,1)');
  g.addColorStop(.15,'rgba(255,255,255,.85)');
  g.addColorStop(.45,'rgba(255,255,255,.18)');
  g.addColorStop(1,'rgba(255,255,255,0)');
  x.fillStyle=g; x.fillRect(0,0,128,128);
  return new THREE.CanvasTexture(c);
}
const glowTexture=makeGlowTexture();

class ThreeStage {
  constructor(el,type='hero'){
    this.el=el; this.type=type; this.mode=el.dataset.mode||'home';
    this.pointer={x:0,y:0}; this.targetPointer={x:0,y:0}; this.progress=0;
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(type==='hero'?38:34,1,.1,100);
    this.camera.position.set(0, type==='hero'?.2:1.0, type==='hero'?8.4:9.7);
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
    this.renderer.setClearColor(0x000000,0);
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.12;
    this.renderer.domElement.className='three-canvas';
    el.appendChild(this.renderer.domElement);

    this.rootGroup=new THREE.Group(); this.scene.add(this.rootGroup);
    this.accent=new THREE.Color(cssAccent());
    this.clock=new THREE.Clock();

    this.addLights();
    if(type==='hero') this.buildHero(); else this.buildExplode();

    this.onPointer=this.onPointer.bind(this);
    this.resize=this.resize.bind(this);
    this.frame=this.frame.bind(this);
    el.addEventListener('pointermove',this.onPointer,{passive:true});
    el.addEventListener('pointerleave',()=>{this.targetPointer.x=0;this.targetPointer.y=0});
    this.ro=new ResizeObserver(this.resize); this.ro.observe(el);
    this.resize();
    requestAnimationFrame(this.frame);
  }
  addLights(){
    this.scene.add(new THREE.HemisphereLight(0x9edcff,0x061018,1.6));
    const key=new THREE.DirectionalLight(0xffffff,3.0); key.position.set(4,5,5); this.scene.add(key);
    const rim=new THREE.PointLight(this.accent,35,16,2); rim.position.set(-4,1,2); this.scene.add(rim); this.rim=rim;
    const fill=new THREE.PointLight(0x6a7cff,18,14,2); fill.position.set(4,-2,1); this.scene.add(fill);
  }
  onPointer(e){
    const r=this.el.getBoundingClientRect();
    this.targetPointer.x=((e.clientX-r.left)/r.width-.5)*2;
    this.targetPointer.y=-((e.clientY-r.top)/r.height-.5)*2;
  }
  resize(){
    const r=this.el.getBoundingClientRect(); if(!r.width||!r.height) return;
    this.camera.aspect=r.width/r.height; this.camera.updateProjectionMatrix();
    this.renderer.setSize(r.width,r.height,false);
  }
  sprite(color=this.accent,size=.24,opacity=.75){
    const mat=new THREE.SpriteMaterial({map:glowTexture,color,transparent:true,opacity,depthWrite:false,blending:THREE.AdditiveBlending});
    const s=new THREE.Sprite(mat); s.scale.set(size,size,size); return s;
  }
  addParticleCloud(count=150,radius=4.8){
    const pos=new Float32Array(count*3);
    for(let i=0;i<count;i++){
      const r=radius*(.35+Math.random()*.65), a=Math.random()*Math.PI*2, z=(Math.random()-.5)*2;
      const k=Math.sqrt(Math.max(0,1-z*z));
      pos[i*3]=Math.cos(a)*k*r; pos[i*3+1]=Math.sin(a)*k*r; pos[i*3+2]=z*r*.55;
    }
    const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const m=new THREE.PointsMaterial({color:this.accent,size:.032,transparent:true,opacity:.62,depthWrite:false,blending:THREE.AdditiveBlending});
    this.particles=new THREE.Points(g,m); this.rootGroup.add(this.particles);
  }
  material(opts={}){
    return new THREE.MeshPhysicalMaterial({
      color:opts.color||0x102b3c,metalness:opts.metalness??.55,roughness:opts.roughness??.18,
      transparent:true,opacity:opts.opacity??.9,transmission:opts.transmission??0,
      clearcoat:.8,clearcoatRoughness:.16,emissive:opts.emissive||this.accent,
      emissiveIntensity:opts.emissiveIntensity??.06,side:THREE.DoubleSide
    });
  }
  line(points,color=this.accent,opacity=.55){
    const g=new THREE.BufferGeometry().setFromPoints(points);
    const m=new THREE.LineBasicMaterial({color,transparent:true,opacity,blending:THREE.AdditiveBlending});
    const l=new THREE.Line(g,m); this.rootGroup.add(l); return l;
  }
  buildHero(){
    this.addParticleCloud(this.mode==='home'?210:150,5.2);
    if(this.mode==='home') this.buildCore();
    if(this.mode==='ndms') this.buildNDMS();
    if(this.mode==='neurolab') this.buildNeuroLab();
    if(this.mode==='loopproof') this.buildLoopProof();
  }
  buildCore(){
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.18,4),this.material({color:0x0a273a,metalness:.68,roughness:.13,opacity:.88,transmission:.06,emissiveIntensity:.12}));
    this.rootGroup.add(core); this.primary=core;
    const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.36,2),new THREE.MeshBasicMaterial({color:this.accent,wireframe:true,transparent:true,opacity:.22,blending:THREE.AdditiveBlending}));
    this.rootGroup.add(wire); this.wire=wire;
    [1.75,2.12,2.5].forEach((r,i)=>{const t=new THREE.Mesh(new THREE.TorusGeometry(r,.018,12,180),new THREE.MeshBasicMaterial({color:i===1?0xffffff:this.accent,transparent:true,opacity:i===1?.22:.42,blending:THREE.AdditiveBlending}));t.rotation.set(i*.55,i*.82,i*.22);this.rootGroup.add(t)});
    for(let i=0;i<16;i++){const s=this.sprite(i%4===0?0xffffff:this.accent,i%4===0?.34:.22,.85);const a=i/16*Math.PI*2,b=(i%5-2)*.27;s.position.set(Math.cos(a)*(2.15+Math.sin(i)*.25),Math.sin(a)*(1.7+Math.cos(i)*.25),b);this.rootGroup.add(s)}
  }
  buildNDMS(){
    const core=new THREE.Mesh(new THREE.SphereGeometry(.92,64,64),this.material({color:0x0b3045,metalness:.2,roughness:.05,opacity:.72,transmission:.28,emissiveIntensity:.18}));
    this.rootGroup.add(core); this.primary=core;
    [0,1,2].forEach(i=>{const t=new THREE.Mesh(new THREE.TorusGeometry(1.5+i*.28,.024,12,160),new THREE.MeshBasicMaterial({color:i===1?0x8d7cff:this.accent,transparent:true,opacity:.48-i*.08,blending:THREE.AdditiveBlending}));t.rotation.set(i*.75,i*.38,Math.PI/2*i);this.rootGroup.add(t)});
    const inputs=[[-3.0,1.0,0],[-3.0,-1.0,.2],[3.0,.65,-.2],[3.0,-.65,.1]];
    inputs.forEach((p,i)=>{const n=new THREE.Mesh(new THREE.OctahedronGeometry(.34,2),this.material({color:i<2?0x153c50:0x272a55,metalness:.3,opacity:.86,emissiveIntensity:.25}));n.position.set(...p);this.rootGroup.add(n);this.line([new THREE.Vector3(...p),new THREE.Vector3(0,0,0)],i<2?this.accent:new THREE.Color(0x8d7cff),.5)});
    const s=this.sprite(0xffffff,.62,.85); this.rootGroup.add(s);
  }
  buildNeuroLab(){
    this.layers=[];
    for(let i=0;i<6;i++){
      const m=new THREE.Mesh(new THREE.BoxGeometry(4.6,.16,2.8),this.material({color:i%2?0x102738:0x142d43,metalness:.25,roughness:.12,opacity:.55,transmission:.12,emissiveIntensity:.08}));
      m.position.y=(i-2.5)*.48; m.rotation.y=.12; this.rootGroup.add(m); this.layers.push(m);
      for(let j=0;j<10;j++){const s=this.sprite(j%3===0?0xffffff:this.accent,.11,.75);s.position.set(-1.8+(j%5)*.9,m.position.y+.12,-.8+Math.floor(j/5)*1.55);this.rootGroup.add(s)}
    }
    const rail=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,3.5,18),new THREE.MeshBasicMaterial({color:this.accent,transparent:true,opacity:.7,blending:THREE.AdditiveBlending}));rail.rotation.z=Math.PI/2;this.rootGroup.add(rail);this.primary=rail;
  }
  buildLoopProof(){
    const pipeMat=this.material({color:0x153c32,metalness:.72,roughness:.18,opacity:.96,emissive:new THREE.Color(0x44d98e),emissiveIntensity:.08});
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.35,.18,18,180),pipeMat);ring.rotation.x=Math.PI/2.4;this.rootGroup.add(ring);this.primary=ring;
    for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const v=new THREE.Mesh(new THREE.CylinderGeometry(.27,.27,.65,24),this.material({color:i%2?0x1c4740:0x25353a,metalness:.7,roughness:.14,opacity:.95,emissiveIntensity:.1}));v.position.set(Math.cos(a)*2.35,Math.sin(a)*1.95,Math.sin(a*.7)*.4);v.rotation.z=a;this.rootGroup.add(v);const s=this.sprite(i%2?0xffffff:this.accent,.25,.85);s.position.copy(v.position).multiplyScalar(1.08);this.rootGroup.add(s)}
    const tank=new THREE.Mesh(new THREE.CylinderGeometry(.75,.75,1.6,48),this.material({color:0x314149,metalness:.86,roughness:.16,opacity:.94,emissiveIntensity:.03}));tank.position.set(0,0,-.45);this.rootGroup.add(tank);
  }
  buildExplode(){
    this.explodeObjects=[];
    this.addParticleCloud(90,4.5);
    if(this.mode==='loopproof') this.buildLoopExplode(); else this.buildLayerExplode();
  }
  buildLayerExplode(){
    const palette=this.mode==='ndms'?[0x12384d,0x172d43,0x233259,0x15384d,0x0d2f43]:
                  this.mode==='neurolab'?[0x10293a,0x123247,0x162d40,0x1b3550,0x10293a]:
                  [0x10293a,0x123247,0x162d40,0x1b3550,0x10293a];
    for(let i=0;i<5;i++){
      const g=new THREE.Group();
      const slab=new THREE.Mesh(new THREE.BoxGeometry(5.3,.32,3.2),this.material({color:palette[i],metalness:.42,roughness:.13,opacity:.7,transmission:.12,emissiveIntensity:.06}));
      g.add(slab);
      const edge=new THREE.LineSegments(new THREE.EdgesGeometry(slab.geometry),new THREE.LineBasicMaterial({color:i===2?0xffffff:this.accent,transparent:true,opacity:.38}));
      g.add(edge);
      for(let j=0;j<10;j++){const s=this.sprite(j%4===0?0xffffff:this.accent,.1,.7);s.position.set(-2+(j%5),.23,-1+Math.floor(j/5)*1.9);g.add(s)}
      g.userData.baseY=(i-2)*.28;g.position.y=g.userData.baseY;
      g.rotation.y=.16;g.rotation.x=-.06;
      this.rootGroup.add(g);this.explodeObjects.push(g);
    }
  }
  buildLoopExplode(){
    for(let i=0;i<5;i++){
      const g=new THREE.Group();
      const ring=new THREE.Mesh(new THREE.TorusGeometry(1.15+i*.32,.095,14,120),this.material({color:i===2?0x235b4c:0x173a33,metalness:.68,roughness:.16,opacity:.84,emissive:new THREE.Color(0x44d98e),emissiveIntensity:.09}));
      ring.rotation.x=Math.PI/2;g.add(ring);
      for(let j=0;j<5;j++){const a=j/5*Math.PI*2;const n=new THREE.Mesh(new THREE.BoxGeometry(.28,.28,.28),this.material({color:0x2a4546,metalness:.72,opacity:.95,emissiveIntensity:.04}));n.position.set(Math.cos(a)*(1.15+i*.32),0,Math.sin(a)*(1.15+i*.32));g.add(n)}
      g.userData.baseY=(i-2)*.08;g.position.y=g.userData.baseY;g.rotation.z=i*.12;
      this.rootGroup.add(g);this.explodeObjects.push(g);
    }
  }
  updateProgress(){
    if(this.type!=='explode') return;
    const host=this.el.closest('.explode')||this.el;
    const r=host.getBoundingClientRect();
    this.progress=clamp((innerHeight*.82-r.top)/(Math.max(1,r.height-innerHeight*.25)),0,1);
  }
  frame(){
    const t=this.clock.getElapsedTime();
    this.updateProgress();
    this.pointer.x+=(this.targetPointer.x-this.pointer.x)*.055;
    this.pointer.y+=(this.targetPointer.y-this.pointer.y)*.055;
    const reduced=motionReduced();
    const accentNow=new THREE.Color(cssAccent()); this.accent.lerp(accentNow,.08); this.rim.color.copy(this.accent);

    if(this.type==='hero'){
      if(!reduced){
        this.rootGroup.rotation.y += .0017;
        this.rootGroup.rotation.x += (this.pointer.y*.14-this.rootGroup.rotation.x)*.045;
        this.rootGroup.rotation.z += (-this.pointer.x*.06-this.rootGroup.rotation.z)*.035;
        this.camera.position.x += (this.pointer.x*.45-this.camera.position.x)*.04;
        this.camera.position.y += ((this.mode==='home'?.2:.15)+this.pointer.y*.22-this.camera.position.y)*.04;
        if(this.primary) this.primary.rotation.y+=.004;
        if(this.wire) this.wire.rotation.x-=.002;
      }
      if(this.particles&&!reduced) this.particles.rotation.y=t*.018;
    }else{
      const p=reduced?1:this.progress;
      this.explodeObjects.forEach((g,i)=>{
        const mid=(this.explodeObjects.length-1)/2;
        const y=g.userData.baseY+(i-mid)*1.22*p;
        const z=Math.abs(i-mid)*.5*p;
        g.position.y+=(y-g.position.y)*.1;
        g.position.z+=(z-g.position.z)*.1;
        g.rotation.y+=(this.pointer.x*.08+(i-mid)*.025*p-g.rotation.y)*.06;
        g.rotation.x+=(-.08+this.pointer.y*.05-g.rotation.x)*.06;
      });
      this.rootGroup.rotation.y+=(this.pointer.x*.13-this.rootGroup.rotation.y)*.04;
      if(this.particles&&!reduced) this.particles.rotation.z=t*.012;
    }

    this.renderer.render(this.scene,this.camera);
    requestAnimationFrame(this.frame);
  }
}

document.querySelectorAll('[data-three-hero]').forEach(el=>new ThreeStage(el,'hero'));
document.querySelectorAll('[data-three-explode]').forEach(el=>new ThreeStage(el,'explode'));
