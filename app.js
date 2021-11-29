const teal = '#007c89'
const gray = 'rgba(36,28,21,0.3)'
function activateButton(sumVar) {
 if (sumVar >= 4){
  document.querySelector('button').style.border = `1px solid ${teal}`
  document.querySelector('button').style.backgroundColor = `${teal}`
  document.querySelector('button').style.color = `white`
 } else {
  document.querySelector('button').style.border = `1px solid ${gray}`
  document.querySelector('button').style.backgroundColor = 'transparent'
  document.querySelector('button').style.color = `${gray}`
 }
}

function numAvailable(){
 let chars = document.querySelector('#pass').value.split("")
 let numInc = false
 for (i of chars){
  if (!isNaN(i)){
   numInc = true
   return true
  }
 }
}

function isCapital(){
 let chars = document.querySelector('#pass').value.split("")
 // let upperCase = false
 for (i of chars){
  // console.log(chars)
  if (i !== i.toLowerCase()){
   return true
  }
 }
}

function isSmall(){
 let chars = document.querySelector('#pass').value.split("")
 // let upperCase = false
 for (i of chars){
  // console.log(chars)
  if (i !== i.toUpperCase()){
   return true
  }
 }
}

function isSpecial(){
 let chars = document.querySelector('#pass').value.split("")
 // let upperCase = false
 for (i of chars){
  // console.log(chars)
  if (i !== i.toUpperCase()){
   return true
  }
 }
}

document.addEventListener('DOMContentLoaded', () => {
 let sum = 0
 const ul = document.createElement('ul')
 const li = document.createElement('li')

 document.querySelector('#pass').onclick = () => {
  document.querySelector('#rules').style.display = 'grid'
 }

 document.querySelector('#user').onclick = () => {
  document.querySelector('#user-modal').style.display = 'block'
 }

 document.addEventListener('focusout', () => {
  if (!!document.activeElement == true){
   document.querySelector('#rules').style.display = 'none'
   document.querySelector('#user-modal').style.display = 'none'
  }
 })

 document.addEventListener('keyup', () => {
  
  

  if (document.querySelector('#pass').value.length >= 8){
   document.querySelector('.four').style.color = gray
   sum++
  } else {
   document.querySelector('.four').style.color = '#241c15'
   sum--
  }


  if (numAvailable() == true){
   document.querySelector('.five').style.color = gray
   sum++
  } else {
   document.querySelector('.five').style.color = '#241c15'
   sum--
  }
  
  if (isCapital() == true){
   document.querySelector('.three').style.color = gray
   sum++
  } else {
   document.querySelector('.three').style.color = '#241c15'
   sum--
  }

  if (isSmall() == true){
   document.querySelector('.one').style.color = gray
   sum++
  } else {
   document.querySelector('.one').style.color = '#241c15'
   sum--
  }

  // if (sum >= 5){
   // activateButton(sum)
  // }

 })

})