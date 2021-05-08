// writeToDo 인풋
const writeToDo = document.getElementById('writeToDo'),
    toDoForm = document.querySelector('.toDoForm'),
// task 리스트
    aList = document.querySelector('.a-list'),
    bList = document.querySelector('.b-list'),
    cList = document.querySelector('.c-list'),
    list = document.querySelector('.list'),
    aColumn = document.querySelector('.a-column'),
    bColumn = document.querySelector('.b-column'),
    cColumn = document.querySelector('.c-column'),
    column = document.querySelector('.column')

// hello

function handleSubmit(e){
    e.preventDefault()
    const currentValue = writeToDo.value
    paintToDo(currentValue)
}

function paintToDo(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    delBtn.innerText = "X"
    const span = document.createElement("span")
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBtn)
    aList.appendChild(li)
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit)
}

init()