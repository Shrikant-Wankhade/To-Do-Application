
//variables
const form = document.getElementById("addForm");
const todoList = document.getElementById("items");
const delList = document.getElementsByClassName("list-group-item");





//event listeners
form.addEventListener('submit',addTodo);
todoList.addEventListener('click',delToDo);


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





