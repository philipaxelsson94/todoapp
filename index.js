class toDoObject {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

let toDoList = [];

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    let titleForm = document.getElementById('toDoTitle').value;
    document.getElementById('toDoListTitle').innerHTML = titleForm;

    let descriptionForm = document.getElementById('toDoDescription').value;
    document.getElementById('toDoListDescription').innerHTML = descriptionForm;
    let newToDo = new toDoObject(titleForm, descriptionForm);
    toDoList.push(newToDo);
    toDoList.forEach(function (item) {
        var z = document.createElement('p'); // is a node
        z.innerHTML = item.title;
        document.getElementById("toDoContainer").appendChild(z);
    });
})
