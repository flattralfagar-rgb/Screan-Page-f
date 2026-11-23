(function(){
  var header=document.querySelector('header'),nav=document.getElementById('nav'),b=document.getElementById('burger');
  function onScroll(){header.classList.toggle('scrolled',window.scrollY>20)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function toggle(open){nav.classList.toggle('open',open);b.classList.toggle('open',open);header.classList.toggle('menu',open);b.setAttribute('aria-expanded',open)}
  b.addEventListener('click',function(){toggle(!nav.classList.contains('open'))});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A')toggle(false)});
  // cards
  var cards=document.querySelectorAll('.card');
  cards.forEach(function(c){c.addEventListener('click',function(){cards.forEach(function(x){x.classList.remove('active')});c.classList.add('active')})});
  // reveal
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();