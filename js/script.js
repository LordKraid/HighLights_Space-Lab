window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
    else {document.querySelector('header').classList.remove('scrolled')}
  });


let imgBlock = document.querySelector('.projects-lorem__img-block')

for(let i = 1; i < 10; i++){
  imgBlock.children[i].style.marginTop = i * -15 + 'px'
}

procent = document.querySelector('.preloader__procent')

let preloader = setInterval(function() {
  procent.innerHTML = ++procent.innerHTML

  if (procent.innerHTML == 100) clearInterval(preloader)
}, 10)

setTimeout(function() {
  document.querySelector('.preloader__load').classList.add('hiden')
  document.querySelector('.preloader__downloaded').classList.add('visible')
}, 3000)

setTimeout(function() {
  document.querySelector('.preloder').style.transform = "translate(0, -100vh)"

  document.body.style.overflowY = 'visible'
}, 4000)