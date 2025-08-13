/* TODO LIST */

// Cargar desde localStorage si existe, sino arreglo vacío
const storetodo = JSON.parse(localStorage.getItem('storetodo')) || [];


renderTodolist();

function renderTodolist(){
    let storeHTML = '';

    for(let i = 0; i < storetodo.length; i++ ){
        const todoObject = storetodo[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
        
        <div><li>${name}</li></div>
        <div>${dueDate} </div>
        <button class="red" onclick="
        storetodo.splice(${i}, 1);
        renderTodolist();" >Delete</button>`;
        storeHTML += html;
    }
    
    document.querySelector('.js-todo').innerHTML = storeHTML;
}

// Guardar en localStorage
function saveTodos() {
    localStorage.setItem('storetodo', JSON.stringify(storetodo));
}

function addTodo(){

    const inputElement = document.querySelector('.enter-todo');

    const nametodo = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    storetodo.push({
       name: nametodo, 
       dueDate: dueDate
    });
   

    inputElement.value = '';

     saveTodos();
    renderTodolist();

}

