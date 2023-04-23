const filter = document.getElementById('filter')
const cards = document.querySelectorAll('.cards li')

filter.addEventListener('input', filterCards)

function filterCards() {
    if(filter.value !== '' ) {
        for (let card of cards) {
          let title =  card.querySelector('h2') 
          title = title.textContent.toLocaleLowerCase()
          let filterText = filter.value.toLocaleLowerCase()

          if(!title.includes(filterText)){
            card.style.display = "none"
            } else {
            card.style.display = "block"
          }
        }
    } else {
        for (let card of cards){
            card.style.display = "block"
        }
    }
}