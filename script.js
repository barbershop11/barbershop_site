const container = document.querySelector('.container')

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY

  // Розрахунок, коли зображення має зникнути
  if (scrollY > 200) {
    container.style.opacity = '0'
  } else {
    container.style.opacity = '1'
  }
})
