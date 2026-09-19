const root=document.documentElement;
const body=document.body;
const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-btn');
const storedTheme=localStorage.getItem('pjp-theme');
const storedAccent=localStorage.getItem('pjp-accent');
const storedMotion=localStorage.getItem('pjp-motion');
if(storedTheme) root.dataset.theme=storedTheme;
if(storedAccent) root.dataset.accent=storedAccent;
if(storedMotion==='reduced') body.classList.add('reduced-motion');

addEventListener('scroll',()=>header&&header.classList.toggle('scrolled',scrollY>18),{passive:true});
if(menu) menu.addEventListener('click',()=>header.classList.toggle('open'));

document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  const next=root.dataset.theme==='light'?'dark':'light';
  root.dataset.theme=next;localStorage.setItem('pjp-theme',next);
  btn.setAttribute('aria-label','Switch to '+(next==='light'?'dark':'light')+' theme');
}));
document.querySelectorAll('[data-motion-toggle]').forEach(btn=>btn.addEventListener('click',()=>{
  body.classList.toggle('reduced-motion');
  const reduced=body.classList.contains('reduced-motion');
  localStorage.setItem('pjp-motion',reduced?'reduced':'full');
  btn.textContent=reduced?'Motion: reduced':'Motion: full';
}));
document.querySelectorAll('[data-accent]').forEach(btn=>btn.addEventListener('click',()=>{
  root.dataset.accent=btn.dataset.accent;
  localStorage.setItem('pjp-accent',btn.dataset.accent);
}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function clamp(v,a,b){return Math.min(b,Math.max(a,v))}
function updateExplodes(){
  document.querySelectorAll('.explode').forEach(el=>{
    const r=el.getBoundingClientRect();
    const p=clamp((innerHeight*.76-r.top)/Math.max(1,r.height-innerHeight*.32),0,1);
    el.style.setProperty('--explode-progress',p.toFixed(4));
    const layers=[...el.querySelectorAll('.stack-layer')];
    const architectureWrap=el.closest('.architecture-wrap');
    const archSteps=architectureWrap?[...architectureWrap.querySelectorAll('[data-arch-step]')]:[];
    const activeStep=Math.min(archSteps.length-1,Math.max(0,Math.floor(p*Math.max(1,archSteps.length))));
    archSteps.forEach((step,i)=>step.classList.toggle('arch-active',i===activeStep));
    layers.forEach((layer,i)=>{
      const mid=(layers.length-1)/2;
      const start=i*.065,end=.62+i*.055;
      const local=clamp((p-start)/(end-start),0,1);
      const eased=local*local*(3-2*local);
      const offset=(i-mid)*112*eased;
      const depth=Math.abs(i-mid)*30*eased;
      const rotate=(i-mid)*1.35*eased;
      layer.style.transform='translate3d('+(i-mid)*5*eased+'px,'+offset+'px,'+depth+'px) rotateX('+rotate+'deg)';
      layer.style.opacity=String(.42+.58*eased);
      layer.style.setProperty('--layer-energy',eased.toFixed(3));
      layer.classList.toggle('layer-active',p>=start&&p<end);
    });
  });
}
addEventListener('scroll',updateExplodes,{passive:true});addEventListener('resize',updateExplodes);updateExplodes();

class Field{
  constructor(canvas){
    this.c=canvas;this.ctx=canvas.getContext('2d');this.nodes=[];this.pointer={x:-9999,y:-9999};this.hoverCluster=null;
    this.labels=(canvas.dataset.labels||'Multimodal AI|Human Timing|EEG|Scientific Reproducibility|Digital Twins|Evidence Systems|Physical AI|Edge Sensing').split('|');
    this.groups=['human','scientific','physical'];this.resize();this.seed();
    canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();this.pointer.x=(e.clientX-r.left)*this.d;this.pointer.y=(e.clientY-r.top)*this.d},{passive:true});
    canvas.addEventListener('pointerleave',()=>{this.pointer.x=-9999;this.pointer.y=-9999});
    const field=canvas.closest('.research-field');
    field?.querySelectorAll('.field-legend .tag').forEach((tag,i)=>{
      tag.style.cursor='pointer';
      tag.addEventListener('mouseenter',()=>this.hoverCluster=this.groups[i%3]);
      tag.addEventListener('mouseleave',()=>this.hoverCluster=null);
    });
    addEventListener('resize',()=>{this.resize();this.seed()});
    this.frame=this.frame.bind(this);requestAnimationFrame(this.frame);
  }
  resize(){const r=this.c.getBoundingClientRect();this.d=Math.min(devicePixelRatio||1,2);this.c.width=r.width*this.d;this.c.height=r.height*this.d}
  seed(){
    const w=this.c.width,h=this.c.height;this.nodes=[];
    const count=Math.max(24,Math.min(42,Math.round(w/32)));
    const centers={human:[w*.27,h*.58],scientific:[w*.55,h*.36],physical:[w*.78,h*.64]};
    for(let i=0;i<count;i++){
      const group=this.groups[i%3],center=centers[group],label=i<this.labels.length?this.labels[i]:'';
      this.nodes.push({
        x:center[0]+(Math.random()-.5)*w*.22,y:center[1]+(Math.random()-.5)*h*.28,
        tx:center[0],ty:center[1],vx:0,vy:0,r:label?4.4:1.9,label,group,phase:Math.random()*Math.PI*2
      });
    }
  }
  rgba(group,a){
    if(group==='human')return 'rgba(141,124,255,'+a+')';
    if(group==='physical')return 'rgba(68,217,142,'+a+')';
    return 'rgba(40,183,255,'+a+')';
  }
  frame(){
    requestAnimationFrame(this.frame);
    const ctx=this.ctx,w=this.c.width,h=this.c.height,reduced=body.classList.contains('reduced-motion')||matchMedia('(prefers-reduced-motion: reduce)').matches;
    ctx.clearRect(0,0,w,h);
    const now=performance.now()*.001;
    this.nodes.forEach(n=>{
      const focus=this.hoverCluster?this.hoverCluster===n.group:true;
      if(!reduced){
        const spring=.00075,dx=n.tx-n.x,dy=n.ty-n.y;
        n.vx+=dx*spring;n.vy+=dy*spring;
        n.vx+=Math.cos(now*.7+n.phase)*.002;n.vy+=Math.sin(now*.6+n.phase)*.002;
        const px=n.x-this.pointer.x,py=n.y-this.pointer.y,dist=Math.hypot(px,py);
        if(dist<165*this.d){const f=(165*this.d-dist)/(165*this.d);n.vx+=px/(dist||1)*f*.12;n.vy+=py/(dist||1)*f*.12}
        n.vx*=.965;n.vy*=.965;n.x+=n.vx;n.y+=n.vy;
      }
      n.alpha=focus?1:.16;
    });
    for(let i=0;i<this.nodes.length;i++)for(let j=i+1;j<this.nodes.length;j++){
      const a=this.nodes[i],b=this.nodes[j],same=a.group===b.group,dist=Math.hypot(a.x-b.x,a.y-b.y);
      if((same&&dist<210*this.d)||(!same&&dist<120*this.d)){
        const alpha=(1-dist/((same?210:120)*this.d))*(same?.26:.06)*Math.min(a.alpha,b.alpha);
        if(alpha>0){ctx.strokeStyle=this.rgba(same?a.group:'scientific',alpha);ctx.lineWidth=(same?1:.55)*this.d;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
      }
    }
    this.nodes.forEach(n=>{
      const pulse=1+(reduced?0:Math.sin(now*1.4+n.phase)*.08);
      ctx.globalAlpha=n.alpha;
      ctx.shadowBlur=n.label?14*this.d:5*this.d;ctx.shadowColor=this.rgba(n.group,.9);ctx.fillStyle=this.rgba(n.group,n.label?.95:.58);
      ctx.beginPath();ctx.arc(n.x,n.y,n.r*this.d*pulse,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=0;
      if(n.label){
        ctx.font=(10.5*this.d)+'px Inter, system-ui';ctx.fillStyle='rgba(230,243,250,'+(.88*n.alpha)+')';
        ctx.fillText(n.label,n.x+10*this.d,n.y-9*this.d);
      }
    });
    ctx.globalAlpha=1;
  }
}
document.querySelectorAll('[data-field]').forEach(c=>new Field(c));

document.querySelectorAll('[data-scroll-target]').forEach(el=>el.addEventListener('click',e=>{
  const target=document.querySelector(el.dataset.scrollTarget);if(target){e.preventDefault();target.scrollIntoView({behavior:body.classList.contains('reduced-motion')?'auto':'smooth'})}
}));

document.querySelectorAll('[data-demo-state]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-demo-state]').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const panel=document.querySelector('[data-demo-output]');
  if(panel){panel.animate([{opacity:.35,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:280,easing:'ease-out'});panel.dataset.state=btn.dataset.demoState}
}));


// V2 domain + cinematic choreography
document.querySelectorAll('.domain-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
  },{passive:true});
  card.addEventListener('click',()=>{
    const accent=card.dataset.accentJump;
    if(accent){root.dataset.accent=accent;localStorage.setItem('pjp-accent',accent)}
    const map={human:'.chapter-ndms',scientific:'.chapter-neurolab',physical:'.chapter-loopproof'};
    const target=document.querySelector(map[card.dataset.domain]);
    if(target) target.scrollIntoView({behavior:body.classList.contains('reduced-motion')?'auto':'smooth',block:'start'});
  });
});

let ticking=false;
function updateCinematic(){
  ticking=false;
  document.querySelectorAll('[data-cinematic]').forEach(ch=>{
    const r=ch.getBoundingClientRect();
    const total=Math.max(1,r.height-innerHeight);
    const p=clamp((-r.top)/total,0,1);
    ch.style.setProperty('--chapter-progress',p.toFixed(4));
    const media=ch.querySelector('.cinematic-media');
    if(media){
      media.style.setProperty('--chapter-progress',p.toFixed(4));
      media.style.setProperty('--chapter-scale',(1.055+p*.035).toFixed(4));
      media.style.setProperty('--grid-y',(p*72).toFixed(1)+'px');
      media.style.setProperty('--grid-x',(-p*54).toFixed(1)+'px');
    }
    ch.style.setProperty('--chapter-x',(18+p*64).toFixed(1)+'%');
    const rail=[...ch.querySelectorAll('.chapter-rail span')];
    const active=Math.min(rail.length-1,Math.floor(p*rail.length));
    rail.forEach((el,i)=>el.classList.toggle('active',i===active));
    const copy=ch.querySelector('.cinematic-copy');
    if(copy && !body.classList.contains('reduced-motion')){
      copy.style.transform='translate3d(0,'+((.5-p)*18).toFixed(1)+'px,0)';
      copy.style.opacity=String(.78+.22*(1-Math.abs(.5-p)*1.35));
    }
  });
}
function requestCinematic(){
  if(!ticking){ticking=true;requestAnimationFrame(updateCinematic)}
}
addEventListener('scroll',requestCinematic,{passive:true});
addEventListener('resize',requestCinematic);
updateCinematic();

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    if(body.classList.contains('reduced-motion')) return;
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform='perspective(900px) rotateX('+(-y*2.2)+'deg) rotateY('+(x*2.8)+'deg) translateY(-8px)';
  },{passive:true});
  card.addEventListener('pointerleave',()=>card.style.transform='');
});

document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('pointermove',e=>{
    if(body.classList.contains('reduced-motion')) return;
    const r=btn.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    btn.style.transform='translate3d('+(x*.045)+'px,'+(y*.06-2)+'px,0)';
  },{passive:true});
  btn.addEventListener('pointerleave',()=>btn.style.transform='');
});


// Scroll velocity becomes a restrained motion input rather than decorative noise.
const motionProgress=document.createElement('div');
motionProgress.className='motion-progress';
motionProgress.innerHTML='<i></i><span>00</span>';
motionProgress.setAttribute('aria-hidden','true');
document.body.appendChild(motionProgress);

let lastScrollY=scrollY,lastScrollT=performance.now(),scrollVelocity=0,scrollRAF=0;
function motionFrame(now){
  scrollRAF=0;
  const dt=Math.max(16,now-lastScrollT),dy=scrollY-lastScrollY;
  const raw=clamp(dy/dt,-2.2,2.2);
  scrollVelocity+= (raw-scrollVelocity)*.18;
  lastScrollY=scrollY;lastScrollT=now;
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight),gp=clamp(scrollY/max,0,1);
  root.style.setProperty('--scroll-v',scrollVelocity.toFixed(4));
  root.style.setProperty('--page-progress',gp.toFixed(4));
  motionProgress.style.setProperty('--p',gp.toFixed(4));
  const n=motionProgress.querySelector('span');if(n)n.textContent=String(Math.round(gp*100)).padStart(2,'0');
  if(!body.classList.contains('reduced-motion')){
    document.querySelectorAll('.cinematic-media').forEach(media=>{
      const r=media.getBoundingClientRect();
      if(r.bottom>0&&r.top<innerHeight){
        media.style.setProperty('--velocity-y',(scrollVelocity*8).toFixed(2)+'px');
        media.style.setProperty('--velocity-skew',(scrollVelocity*.16).toFixed(3)+'deg');
      }
    });
  }
}
function requestMotionFrame(){if(!scrollRAF)scrollRAF=requestAnimationFrame(motionFrame)}
addEventListener('scroll',requestMotionFrame,{passive:true});requestMotionFrame();
