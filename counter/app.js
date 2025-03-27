let incrementButton = document.querySelector('.button1')
let decrementButton = document.querySelector('.button2')

incrementButton.innerText = "+"
decrementButton.innerText = "-"

decrementButton.style.backgroundColor = "grey"

let countHolder=document.createElement('h1')
document.body.appendChild(countHolder)

let count = 0
countHolder.innerText = count

incrementButton.addEventListener('click',()=>{
  count+=1 
  countHolder.innerText = count


})

decrementButton.addEventListener('click',()=>{
    count-=1 
    countHolder.innerText = count
})
