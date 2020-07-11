const toggleBackground = function () {
  const pixels = window.pageYOffset

  if (pixels > 80) {
    document.querySelector(".background-frame").classList.add("scrolled")
    document.querySelector(".side-nav").classList.add("scrolled")
  }
}

toggleBackground()

document.addEventListener("scroll", function () {
  toggleBackground()
})
