
// const revealBtn =  document.querySelector('.reveal-btn')

// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent() {
//     if( hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     }
//     else{
//        hiddenContent.classList.add('reveal-btn')
//     }
// }


// revealBtn.addEventListener('click', revealContent)


 console.log("sec")
const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

addTask.addEventListener('click',function(){
    let task =document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deletebutton = document.createElement("button")
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deletebutton.classList.add('deleteTask')
    task.appendChild(deletebutton)

    if(inputTask.value === ""){
        alert("Please Enter a Task")

    }else{
        taskContainer.appendChild(task)
    }
    inputTask.value = ""

    checkButton.addEventListener("click", function(){
        checkButton.parentElement.style.textDecoration ="line-through"
    })
    deletebutton.addEventListener("click", function(e){
        let target = e.target
        target.parentElement.remove()
    })
})
