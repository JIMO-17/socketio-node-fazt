import { saveNote, deleteNote, getNoteById, updateNote } from './socket.js';

const notesList = document.querySelector("#notes");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const btnSU = document.querySelector("#btnSU");

let savedId = "";

const noteUI = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
            <h1>${note.title}</h1>
            <div>
                <button class="delete" data-id="${note._id}">Delete</button>
                <button class="update" data-id="${note._id}">Update</button>
            </div>
            <p>${note.description}</p>
        </div>
    `

    const btnDelete = div.querySelector(".delete")
    const btnUpdate = div.querySelector(".update")

    btnDelete.addEventListener("click", e => deleteNote(btnDelete.dataset.id))
    btnUpdate.addEventListener("click", e => getNoteById(btnUpdate.dataset.id))

    return div;
}

export const renderNotes = (notes) => {
    notesList.innerHTML = "";
    notes.forEach(note => notesList.append(noteUI(note)))
}

export const fillForm = (note) => {

    btnSU.innerText = "Update";

    title.value = note.title;
    description.value = note.description;
    savedId = note._id;
}

export const onHandleSubmit = (e) => {
    e.preventDefault();
    
    if(savedId) {
        updateNote(savedId, title.value, description.value);
    }else{
        saveNote( title.value, description.value );
    }

    savedId = "";
    title.value = "";
    description.value = "";
    btnSU.innerText = "Send";
}

export const appendNote = (note) => {
    notesList.append(noteUI(note));
}