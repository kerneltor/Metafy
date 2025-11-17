const collapsibles = document.querySelectorAll('.collapsible')
const collapsers = document.querySelectorAll('.collapser')

collapsibles.forEach((item) => {
  addCollapsibleExtended(item)
})

collapsers.forEach((item) => {
  addCollapsibleExtended(item)
})

function addCollapsibleExtended(item) {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded')
  })
}
