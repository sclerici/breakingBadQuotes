const fraseEl = document.getElementById('frase')
const autorEl = document.getElementById('autor')
const btn = document.getElementById('btn')
const autorImg = document.getElementById('autor-img')
const contenedorFrase = document.getElementById('quote-container')

const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

// fetch a la api;

async function getQuote(){
   const response = await fetch(url)
   const data = await response.json()

   contenedorFrase.innerHTML = `
   <p class="frase" id="frase">" ${data[0].quote} " </p>
   <p class="autor" id="autor">${data[0].author} </p>
   <img class="autor-img" id="autor-img" src="/img/${data[0].author}.jpg" alt="">
   `

   btn.innerText = 'Siguiente frase'

}





btn.addEventListener('click', getQuote)