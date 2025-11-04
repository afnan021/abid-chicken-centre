// Mobile nav toggle and small UI behaviors
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const yearEl = document.getElementById('year');
  const floating = document.getElementById('floatingWA');

  yearEl.textContent = new Date().getFullYear();

  navToggle.addEventListener('click', function(){
    siteNav.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>siteNav.classList.remove('open')));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        const dest = document.querySelector(href);
        if(dest){
          e.preventDefault();
          dest.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });

  // Floating WhatsApp simple pulse animation (no external libs)
  if(floating){
    setInterval(()=>{
      floating.animate([
        {transform:'translateY(0) scale(1)'},
        {transform:'translateY(-4px) scale(1.02)'},
        {transform:'transform: translateY(0) scale(1)'}
      ],{duration:1500,iterations:1});
    },3500);
  }

});
