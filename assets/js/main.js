// Auto-hide the floating call button on scroll down, show on scroll up
(function(){
  var btn = document.querySelector('.call-now');
  if(!btn) return;
  var prev = window.scrollY;
  window.addEventListener('scroll', function(){
    var cur = window.scrollY;
    if(cur > prev + 10) btn.classList.add('hide-call');
    else if(cur < prev - 10) btn.classList.remove('hide-call');
    prev = cur;
  }, {passive:true});
})();
