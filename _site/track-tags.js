




const tagContainer = document.querySelectorAll(".tag-container")
const tag = document.querySelectorAll(".tag")

tagContainer.forEach(tag => {
  const toggler = section.querySelector(".toggler")
  const panel = section.querySelector(".panel")

  toggler.addEventListener("click", function (event) {
    section.classList.toggle("open")
      event.preventDefault()


  })
})



navLinks.forEach(link => link.classList.remove("selected"))

navLinks[index].classList.add("selected")
