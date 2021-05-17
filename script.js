const toDoInput = document.getElementById('writeToDo'),
    toDoBtn = document.querySelector('.button'),
    aContainer = document.querySelector('.a-container'),
    bContainer = document.querySelector('.b-container'),
    cContainer = document.querySelector('.c-container'),
    abcContainer = document.querySelectorAll('.abc-container'),
    item = document.querySelectorAll('.item'),
    container = document.querySelector('.container');


container.addEventListener("mousedown", () => {
    const itemContainer = document.querySelectorAll('.item-container')
    
    itemContainer.forEach((item) => {
        // 지우기 기능
        const delBtn = document.querySelector('.delete-btn')
        delBtn.addEventListener('click', (e) => {
            delBtn.parentNode.remove()
        })

        // 드래그 기능
        item.addEventListener("dragstart", () => {
            item.classList.add('dragging')
        })
        item.addEventListener("dragend", () => {
            item.classList.remove('dragging')
        })

        item.addEventListener('dragenter', () => {
            item.classList.add('drag-over')
        })
        item.addEventListener('dragleave', () => {
            item.classList.remove('drag-over')
        })
        item.addEventListener('drop', () => {
            item.classList.remove('drag-over')
        })
    })

    abcContainer.forEach(con => {
        con.addEventListener('dragover', e => {
            e.preventDefault()
            const draggable = document.querySelector('.dragging')
            con.appendChild(draggable)
        })
    })
})



// 이벤트리스너
toDoBtn.addEventListener('click', writeItem)



// 인풋값에서 submit된 값을 투두에 옮기기
function writeItem(event) {
    // form 에서 submit되어서 자동새로고침되는거 없애기
    event.preventDefault()

    // div 만들기
    if (toDoInput.value !== "") {
        const toDoDiv = document.createElement("div")
        toDoDiv.classList.add("item-container")
        // li만들기
        // const toDoSpan = document.createElement("span")
        // toDoSpan.innerText = toDoInput.value
        // toDoSpan.classList.add('item')
        // toDoDiv.appendChild(toDoSpan)
        toDoDiv.innerText = toDoInput.value
        // 지우기버튼
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerText = '❌'
        toDoDiv.appendChild(deleteBtn)
        aContainer.appendChild(toDoDiv)
        toDoDiv.setAttribute('draggable', 'true')
        toDoInput.value = ""

    } else {
        alert("입력칸을 채워주세요") 
        // 토스트 알람으로 바꾸기
    }
}
