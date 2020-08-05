
const trackSection = document.querySelectorAll(".track-section")

trackSection.forEach(trackSection => {
  const shareButton = trackSection.querySelector(".post-share")
  const linkbox = trackSection.querySelector("input")

  shareButton.addEventListener("click", function (event) {
    linkbox.classList.toggle("clicked")
      event.preventDefault()
  })
})
