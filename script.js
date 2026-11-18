'use strict';
const header = document.getElementById('header');
const progress = document.getElementById('progress');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const glow = document.getElementById('cursorGlow');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateScroll(){
  header.classList.toggle('scrolled', window.scrollY > 35);
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (available > 0 ? Math.min(100, window.scrollY / available * 100) : 0) + '%';
}
window.addEventListener('scroll', updateScroll, {passive:true});
updateScroll();
menuToggle.addEventListener('click', () => {
  const open = !siteNav.classList.contains('open');
  siteNav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
});
if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  }), {threshold:0.1, rootMargin:'0px 0px -35px 0px'});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));}
if(!reduceMotion && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('pointermove', e => {glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}, {passive:true});
} else {glow.style.display='none';}
const waveform = document.querySelector('.waveform');
if(waveform){
  for(let i=0;i<49;i++){
    const bar=document.createElement('span');
    const envelope=Math.pow(Math.sin(Math.PI*(i+1)/50),0.7);
    const modulation=0.28+0.72*Math.abs(Math.sin(i*1.73)*Math.cos(i*.47));
    bar.style.height=(9+envelope*76*modulation)+'px';
    waveform.appendChild(bar);
  }
}
document.getElementById('year').textContent=String(new Date().getFullYear());
