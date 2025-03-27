  function hello(){
    console.log('Hello!')
  } 


let element = document.createElement('div')
element.innerHTML = '<h1>This is a heading</h1>'
document.body.appendChild(element)

let subheading = document.createElement('h2')
subheading.textContent = 'This is a subheading'
document.body.appendChild(subheading)

let listItem = document.createElement('li')
listItem.textContent = 'item 1'

let list = document.querySelector('ul')
list.appendChild(listItem)

let fragment = new DocumentFragment()

let heading = document.createElement('h1')
heading.textContent = 'Main heading'

let subheading = document.createElement('h2')
subheading.textContent = 'Sub heading'


fragment.appendChild(heading)
fragment. appendChild(subheading)

document.body.appendChild(fragment)

let parent = document.querySelector('ul')

//parentnode , insertBefore(NewNode, existingNode)

let existingNode = document.querySelector('li')

let newNode = document.createElement('li')
newNode.textContent ='softDrink'

let oldNode = document.querySelector('li')

let node = document.querySelector('ul')
let clonedNode = node.CloneNode(true)

document.body.appendChild(clonedNode)

parent.insertBefore(newNode, existingNode.nextSibling)
parent.replaceChild(newNode, oldNode)
parent.removeChild(oldNode)