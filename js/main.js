
// continue button declaration
document.querySelector('#continue').addEventListener('click', contKey)
// document.querySelector('.overlay').addEventListener('click', overlay)

// targetting input elements from the dom
const email = document.forms['checkOutForm']['email']
const phone = document.forms['checkOutForm']['phone']
const fullName = document.forms['checkOutForm']['fullName']
const address = document.forms['checkOutForm']['address']
const city = document.forms['checkOutForm']['city']
const country = document.forms['checkOutForm']['country']
const postal = document.forms['checkOutForm']['postal']

// Error message declaration 
const msg = document.querySelector('P')

// FORM VALIDATION: ALL INPUTS MUST BE ENTERED
function contKey(e){
    e.preventDefault()

    if(email.value == '' || phone.value == ''|| fullName.value == ''|| address.value == ''|| city.value == ''||country.value == '' || postal.value == ''){
        msg.innerText  = 'enter required field *'
    } else{
        alert('successful')
        // document.querySelector('.popup').classList.toggle('active')
        msg.remove()
    }

    if(email.value == ''){
        email.focus()
    }

    if(phone.value == ''){
        phone.focus()
    }
    
    if(fullName.value == ''){
        fullName.focus()
    }

    if(address.value == ''){
        address.focus()
    }

    if(city.value == ''){
        city.focus()
    }

    if(country.value == ''){
        country.focus()
    }

}

// function overlay(){
//     document.querySelector('.popup').remove()
// }

// PICKING THE NUMBER OF PRODUCTS AND THE SHOWING THE CORRESPONDING PRICE

document.querySelector('#minus').addEventListener('click', minus1key)
document.querySelector('#plus').addEventListener('click', plus1Key)
document.querySelector('#minus-2').addEventListener('click', minus2Key)
document.querySelector('#plus-2').addEventListener('click', plus2Key)

const orderNumber = document.querySelector('#order-no-1')
const orderNumber2 = document.querySelector('#order-no-2')
const totalValue = document.querySelector('#total')

// initial vlues of the order
let order = 0
let order2 = 0
const shippingFee = 19

// container for products 1 and product 2 price
let arr = [0, 0]

// price declaration
let productOnePrice = 54.99
let productTwoPrice = 74.99

// the first product plus function
function plus1Key(){
    order += 1
    let totalPrice = order * productOnePrice
    arr[0] = totalPrice
    let finalAnswer = arr[0] + arr[1] +shippingFee
    orderNumber.innerText = order
    totalValue.innerText = finalAnswer.toFixed(2)
}

// the first product minus function
function minus1key(){
    // this is to ensure the least order to make is 1
    if(order !== 0){
        order -= 1
        console.log(order)
        let totalPrice = order * productOnePrice
        orderNumber.innerText = order
        arr[0] = totalPrice
        let finalAnswer = arr[0] + arr[1] +shippingFee
        totalValue.innerText = finalAnswer.toFixed(2)

    } else{
        orderNumber.innerText = 0
    }
   
}

// the second product plus function
function plus2Key(){
    order2 += 1
    let totalPrice = order2 * productTwoPrice
    arr[1] = totalPrice
    let finalAnswer = arr[0] + arr[1] +shippingFee
    orderNumber2.innerText = order2
    totalValue.innerText = finalAnswer.toFixed(2)
}

// the second product minus function
function minus2Key(){
    if(order2 !== 0){
        order2 -= 1
        console.log(order2)
        let totalPrice = order2 * productTwoPrice
        arr[1] = totalPrice
        let finalAnswer = arr[0] + arr[1] + shippingFee
        totalValue.innerText = finalAnswer.toFixed(2)
        orderNumber2.innerText = order2
    } else{
        orderNumber2.innerText = 0
    }
    
}