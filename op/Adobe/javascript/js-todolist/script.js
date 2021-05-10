const toDoInput = document.getElementById('writeToDo'),
    toDoBtn = document.querySelector('.button'),
    aList = document.querySelector('.a-list'),
    bList = document.querySelector('.b-list'),
    cList = document.querySelector('.c-list'),
    abcList = document.querySelector('.list')


toDoBtn.addEventListener('click', writeList)

function writeList(event) {
    // form 에서 submit되어서 자동새로고침되는거 없애기
    event.preventDefault()
    // div 만들기
    if (toDoInput.value !== "") {
        const toDoDiv = document.createElement("div")
        toDoDiv.classList.add("item-container")
        // li만들기
        const toDoLi = document.createElement("li")
        toDoLi.innerText = toDoInput.value
        toDoLi.classList.add('item')
        toDoDiv.appendChild(toDoLi)
        // 지우기버튼
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = '✖️'
        deleteBtn.classList.add('delete-btn')
        toDoDiv.appendChild(deleteBtn)
    
        aList.appendChild(toDoDiv)
        toDoInput.value = ""
    } else {
        alert("입력칸을 채워주세요") 
        // change toast notification to this line 
    }
}