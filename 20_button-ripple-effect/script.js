const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xIside = x - buttonLeft
    const yIside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yIside + 'px'
    circle.style.left = xIside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
