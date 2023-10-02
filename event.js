const box=document.querySelector('.box')

box.addEventListener('mousemove', e => 
                      console.log(e.offsetX, e.offsetY);
                      box.textContent = `x pos - ${e.offsetX}
                                          y pos - ${e.offsetY}`);
box.addEventListener('click', e => {
  console.log('mouse click')
  box.classList.remove('box')
  box.classList.add('boxclick')
})

box.addEventListener('click', e => {
  box.classList.remove('boxclick')
  box.classList.add('box')
})