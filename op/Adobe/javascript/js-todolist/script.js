const writeToDoBtn = document.querySelector('.writeToDoBtn');
const writeToDoInput = document.querySelector('.writeToDo');

writeToDoBtn.addEventListener('click', () => {
    writeToDoInput.classList.toggle('active');
    writeToDoBtn.classList.toggle('active');
})