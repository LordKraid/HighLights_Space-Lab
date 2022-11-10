window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {document.querySelector('header').classList.add('scrolled')}
    else {document.querySelector('header').classList.remove('scrolled')}
  });


let imgBlock = document.querySelector('.projects-lorem__img-block')

for(let i = 1; i < 10; i++){
  imgBlock.children[i].style.marginTop = i * -15 + 'px'
}