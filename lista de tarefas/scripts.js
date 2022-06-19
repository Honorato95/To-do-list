const inputField = document.getElementById('addTask');
const list = document.getElementById('list')
const buttonadd = document.getElementById('buttonAdd');

let tag = '';
let value = '';
let checkbox = '';
let label = '';

function AddTask() {
    value = inputField.value;
    if(!value) alert('Adicione uma tarefa!');
    if(value) {
        tag = document.createElement("li");
        
        checkbox = document.createElement("input");
        checkbox.type = 'checkbox'
        checkbox.className = 'check';
        
        label = document.createElement("label");
        label.setAttribute('for', checkbox.className);
        label.innerHTML = value[0].toUpperCase() + value.substring(1);
        
        tag.appendChild(checkbox);
        tag.appendChild(label);
        
        list.appendChild(tag);
        const delTaskFromList = document.getElementsByClassName('remove')[0];
        console.log(delTaskFromList)
    }

}
buttonadd.addEventListener('click', AddTask);



