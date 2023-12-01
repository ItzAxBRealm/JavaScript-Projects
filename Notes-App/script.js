const notesContainer = document.getElementById('notes-container');
const createNotesBtn = document.getElementById('create-note-btn');
const allnotes = document.querySelectorAll('.input-box');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createNotesBtn.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let deleteBtn = document.createElement('i');

    paragraph.classList.add('input-box');
    
    deleteBtn.setAttribute('id','delete-btn');
    paragraph.setAttribute('contenteditable', 'true');
    deleteBtn.setAttribute('class', 'fa-solid fa-trash');
    deleteBtn.setAttribute('contenteditable', 'false');

    notesContainer.appendChild(paragraph).appendChild(deleteBtn);
});

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
})

document.addEventListener('keydown', event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})