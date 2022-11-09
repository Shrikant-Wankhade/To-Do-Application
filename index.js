
//variables
const form = document.getElementById("addForm");
const todoList = document.getElementById("items");
const delList = document.getElementsByClassName("list-group-item");
const filter = document.getElementById('filter');





//event listeners
form.addEventListener('submit',addTodo);
todoList.addEventListener('click',delToDo);
filter.addEventListener('keyup',filterToDo);
todoList.addEventListener('click',editToDo);


//functions
function addTodo(e){
    e.preventDefault();

    //get the input value from the user
    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');

    //add all the classes to new todo
    li.className = 'list-group-item';
    //add newItem to li
    li.textContent = newItem;
    //create a new delete button
    let deleteBtn = document.createElement('button');

    //add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    //add the text to delete button
    deleteBtn.textContent = 'Delete';

    //append the button into the list
    li.appendChild(deleteBtn);

    //append that list into the ul
    todoList.append(li);
    
}

function delToDo(e){
    if(e.target.classList.contains("delete")){
         if(confirm('Are you sure?')){
             let li = e.target.parentElement.remove();
             // todoList.removeChild(li);
         }
    }
 }

 function filterToDo(e){
    let input = e.target.value.toLowerCase();
    let todos = todoList.getElementsByTagName('li');
    Array.from(todos).forEach(ele => {
        let text = ele.firstChild.textContent.toLowerCase();
        if(text.includes(input)){
            ele.style.display = 'block';
        }else{
            ele.style.display = 'none';
        }
        
    });
}

function editToDo(e){
    if(e.target.classList.contains("edit")){

        let content =  e.target.parentElement.firstChild.textContent; //storing the to-do item in an variable
        if(confirm('Are you sure?')){
            let li = prompt("Please enter your response", "");
            if(li==""){
                li = prompt("Please enter your response", "");
            }
            e.target.parentElement.firstChild.textContent = li;
             
        }

   }
}





