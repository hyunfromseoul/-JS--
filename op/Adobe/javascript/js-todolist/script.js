const toDoInput = document.getElementById('writeToDo'),
    toDoBtn = document.querySelector('.button'),
    aContainer = document.querySelector('.a-container'),
    bContainer = document.querySelector('.b-container'),
    cContainer = document.querySelector('.c-container'),
    abcContainer = document.querySelectorAll('.abc-container'),
    item = document.querySelectorAll('.item'),
    container = document.querySelector('.container');


container.addEventListener("mousedown", () => {
    // console.log('container가 클릭이 됌')
    // console.log(container)

    let itemContainer = document.querySelectorAll('.item-container');
    
    itemContainer.forEach((item) => {
        item.addEventListener("dragstart", () => {
            item.classList.add('dragging')
        })

        item.addEventListener("dragend", () => {
            item.classList.remove('dragging')
        })
    })

    abcContainer.forEach(con => {
        con.addEventListener('dragover', e => {
            e.preventDefault()
            const draggable = document.querySelector('.dragging')
            con.appendChild(draggable)
        })

        con.addEventListener('drop', e => {
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
        toDoDiv.appendChild(deleteBtn)
        aContainer.appendChild(toDoDiv)
        toDoDiv.setAttribute('draggable', 'true')
        toDoInput.value = ""

    } else {
        alert("입력칸을 채워주세요") 
        // 토스트 알람으로 바꾸기
    }
}
