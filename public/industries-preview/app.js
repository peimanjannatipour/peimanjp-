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
    const p=clamp((innerHeight-r.top)/(innerHeight+r.height*.45),0,1);
    const layers=[...el.querySelectorAll('.stack-layer')];
    layers.forEach((layer,i)=>{
      const mid=(layers.length-1)/2;
      const offset=(i-mid)*82*p;
      const rotate=(i-mid)*.7*p;
      layer.style.transform='translate3d(0,'+offset+'px,'+(Math.abs(i-mid)*18*p)+'px) rotateX('+rotate+'deg)';
      layer.style.opacity=String(.72+.28*p);
    });
  });
}
addEventListener('scroll',updateExplodes,{passive:true});addEventListener('resize',updateExplodes);updateExplodes();

class Field{
  constructor(canvas){
    this.c=canvas;this.ctx=canvas.getContext('2d');this.nodes=[];this.pointer={x:-9999,y:-9999};this.labels=(canvas.dataset.labels||'Multimodal AI|Human Timing|EEG|Scientific Reproducibility|Digital Twins|Evidence Systems|Physical AI|Edge Sensing').split('|');
    this.resize();this.seed();
    canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();this.pointer.x=(e.clientX-r.left)*devicePixelRatio;this.pointer.y=(e.clientY-r.top)*devicePixelRatio});
    canvas.addEventListener('pointerleave',()=>{this.pointer.x=-9999;this.pointer.y=-9999});
    addEventListener('resize',()=>{this.resize();this.seed()});
    this.frame=this.frame.bind(this);requestAnimationFrame(this.frame);
  }
  resize(){const r=this.c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);this.d=d;this.c.width=r.width*d;this.c.height=r.height*d}
  seed(){const w=this.c.width,h=this.c.height;this.nodes=[];const count=Math.max(18,Math.min(34,Math.round(w/38)));for(let i=0;i<count;i++){this.nodes.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:i<8?4.2:2.1,label:i<8?this.labels[i%this.labels.length]:''})}}
  frame(){
    const ctx=this.ctx,w=this.c.width,h=this.c.height;
    ctx.clearRect(0,0,w,h);
    const reduced=body.classList.contains('reduced-motion')||matchMedia('(prefers-reduced-motion: reduce)').matches;
    const accent=getComputedStyle(root).getPropertyValue('--accent').trim()||'#28b7ff';
    this.nodes.forEach(n=>{
      if(!reduced){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;const dx=n.x-this.pointer.x,dy=n.y-this.pointer.y,dist=Math.hypot(dx,dy);if(dist<150*this.d){const f=(150*this.d-dist)/(150*this.d);n.x+=dx/(dist||1)*f*2.2;n.y+=dy/(dist||1)*f*2.2}}
    });
    for(let i=0;i<this.nodes.length;i++)for(let j=i+1;j<this.nodes.length;j++){const a=this.nodes[i],b=this.nodes[j],dist=Math.hypot(a.x-b.x,a.y-b.y);if(dist<145*this.d){ctx.globalAlpha=(1-dist/(145*this.d))*.33;ctx.strokeStyle=accent;ctx.lineWidth=.7*this.d;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
    ctx.globalAlpha=1;
    this.nodes.forEach(n=>{ctx.fillStyle=n.label?accent:'rgba(190,225,244,.7)';ctx.beginPath();ctx.arc(n.x,n.y,n.r*this.d,0,Math.PI*2);ctx.fill();if(n.label){ctx.font=(11*this.d)+'px Inter, system-ui';ctx.fillStyle='rgba(231,244,250,.9)';ctx.fillText(n.label,n.x+10*this.d,n.y-8*this.d)}});
    requestAnimationFrame(this.frame);
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
