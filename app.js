// SECTION food array
let food = [
  {
    id: '1sdfwe',
    name: 'Two Asada Tacos',
    price: 3.00,
    imgUrl: 'https://www.idahostatesman.com/latest-news/vrq5bk/picture245906310/alternates/FREE_768/california%20.JPG',
    description: 'California Tacos with fries, guac, gastrique onions, cheese, creme fresh, with a crispy shell'
  },
  {
    id: '4wef23',
    name: '8 Layer Mission-Style Burrito',
    price: 9.87,
    imgUrl: 'https://www.seriouseats.com/2020/10/20201002-mission-style-burrito-jillian-atkinson-2.jpg',
    description: 'If you can eat it in three minutes if Free!'
  },
  {
    id: '533rdce',
    name: 'Super Nachos Supreme',
    price: 45.14,
    imgUrl: 'https://www.foodnetwork.com/content/dam/images/food/video/0/01/017/0170/0170453.jpg',
    description: 'A giant pan of nachos, with free pan'
  },
  {
    id: '234w23ev',
    name: 'Shredded Chicken Chimichanga',
    price: 7.50,
    imgUrl: 'https://www.cookingclassy.com/wp-content/uploads/2013/10/chicken-chimichangas-6.jpg',
    description: 'A favorite of our local Merc with a Mouth'
  }
]
// start with empty cart
let cart = []

let counter = 0
let lightBar = document.getElementById('light-bar')
// NOTE Spread Operater, empties all contents of a collection into a higher location
/// here taking elemets from the page into a "node list" and converting to a true array
let lights = [...document.getElementsByClassName('light')]



// Renders the food to the page
function drawFood() {
  // create a template
  let template = ''
  // add items to template  
  food.forEach(foodItem => {
    template += `
    <div class="col-md-6 p-3 " >
      <div class="card action" onclick="addToCart('${foodItem.id}')">
        <img class="card-img-top"
        src="${foodItem.imgUrl}"
        draggable="false"
        alt="">
        <div class="card-body">
        <h4 class="card-title">${foodItem.name} - ($${foodItem.price.toFixed(2)}) </h4>
        <p class="card-text">${foodItem.description}</p>
        </div>
      </div>
    </div>
    `
  })

  // render template to page
  document.getElementById('food').innerHTML = template
}

function addToCart(id) {
  // locate the item they click on from the food array
  // for (let i = 0; i < food.length; i++) {
  //   const f = food[i];
  // }
  let foodItem = food.find(f => f.id === id)
  // saftey check, if no food was found stop running
  if (!foodItem) {
    console.error("invalid id")
    return
  }
  // add to a cart
  cart.push(foodItem)
  drawCart()
}


function drawCart() {
  let template = ''
  let total = 0
  cart.forEach(item => {
    // NOTE toFixed(Decimal Places) number method returns a string with number of provided decimal places
    template += `<li>${item.name} - $${item.price.toFixed(2)}</li>`
    total += item.price
  })
  document.getElementById('cart-items').innerHTML = template
  document.getElementById('total').innerHTML = total.toFixed(2)
}

function checkout() {
  cart = []
  drawCart()
}


function lightInterval() {
  // interval will run infinately a function (first argument) every X number of milliseconds (2nd argument)
  setInterval(() => {


    counter++
    if (counter % 2) {
      lightBar.classList.remove('bg-danger')
      lightBar.classList.add('bg-white')
      lights.forEach(elm => {
        elm.classList.remove('bg-white')
        elm.classList.add('bg-danger')
      });
    } else {
      lightBar.classList.remove('bg-white')
      lightBar.classList.add('bg-danger')
      lights.forEach(elm => {
        elm.classList.remove('bg-danger')
        elm.classList.add('bg-white')
      });
    }
  }, 1000)
}

function fiesta() {
  document.getElementById('music').play()
  let elems = [...document.getElementsByTagName('div')]
  elems.forEach(e => e.classList.add('fa-spin'))
  setTimeout(() => {
    document.getElementById('music').pause()
    elems.forEach(e => e.classList.remove('fa-spin'))
  }, 3000)
}


// do this once all other content has loaded
drawFood()
lightInterval()