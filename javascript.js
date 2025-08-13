/* TODO LIST */

// Cargar desde localStorage si existe, sino arreglo vacío
const storetodo = JSON.parse(localStorage.getItem('storetodo')) || [];

renderTodolist();

function renderTodolist(){
    let storeHTML = '';

    for(let i = 0; i < storetodo.length; i++){
        const {name, dueDate} = storetodo[i];
        const html = `
        <div class="todo-item">
            <div><li>${name}</li></div>
            <div>${dueDate}</div>
            <button class="red" onclick="
                storetodo.splice(${i}, 1);
                saveTodos(); // <-- Añade esta línea
                renderTodolist();
            ">Borrar🗑️</button>
        </div>`;
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
    const nametodo = inputElement.value.trim();

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // Validación para no añadir tareas vacías
    if(!nametodo) {
        alert('Por favor ingresa una tarea válida');
        return;
    }

    storetodo.push({
       name: nametodo, 
       dueDate: dueDate
    });

    inputElement.value = '';
    saveTodos();
    renderTodolist();
}

