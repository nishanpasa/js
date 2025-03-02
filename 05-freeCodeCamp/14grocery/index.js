let form = document.querySelector('form');
let notesContainer = document.querySelector('#notesContainer');
let input = document.querySelector('input');
let notesArray = JSON.parse(localStorage.getItem('storedNotes')) || [];
let modal = document.getElementById('modal');

let editingNote = null

// to show notes when loads first 
window.onload = function () {
    createNote();
    noteExists()
}


let noteID;
// if noteID exist noteID : ''
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (input.value == '') {
        console.log('null');
        return;
    }

    let note = input.value.trim();


    if (editingNote === null) {

        let noteID = new Date().getTime().toString();
        // noteID =  noteID.toString();

        // setting the notes in the local Storage 
        notesArray.push([note, noteID]);
        showModal('create');
        console.log("New Note Created!");


    } else {
        console.log("Editing note id: ", editingNote);
        let noteIndex = notesArray.findIndex(item => item[1] === editingNote);
        if (noteIndex !== -1) {
            notesArray[noteIndex][0] = note; // Update note text
            console.log('Note updated');
        }
        editingNote = null;

        showModal('edit');

    }

    localStorage.setItem('storedNotes', JSON.stringify(notesArray));

    // notesArray = JSON.parse(localStorage.getItem('storedNotes'));
    // console.log('null running');

    createNote();

    //last step clearing the input field after adding
    input.value = '';
});

function showModal(modalType) {

    if (modalType === 'create') {
        modal.querySelector('h2').innerText = 'Note Added';
    }else if(modalType === 'edit'){
        modal.querySelector('h2').innerText = 'Note Edited';        
    }

    modal.classList.toggle('hidden');
    setTimeout(() => {
        modal.classList.toggle('hidden');
    }, 1500);
}

// creating notes in notesContainer
function createNote() {
    let notes = notesArray.map(note => {
        return `
        <div id="${note[1]}" class="note flex justify-between">
            <p>${note[0]}</p>
            <div>
            <i onclick="editNote('${note[1]}')" class="fa-solid fa-edit"></i>
            <i onclick="deleteNote('${note[1]}')" class="fa-solid fa-trash"></i>
            </div>
        </div>`;
    });
    notesContainer.innerHTML = notes.join(' ');
console.log('check notesExist');

    noteExists();
}

//delete note
function deleteNote(noteID) {
    const deletingElement = document.getElementById(`${noteID}`);
    deletingElement.remove();

    let noteIndex = notesArray.findIndex(note => noteID === note[1]);
    console.log(noteIndex);

    notesArray.splice(noteIndex, 1);

    localStorage.setItem('storedNotes', JSON.stringify(notesArray));
}


// editing note 
function editNote(noteID) {
    console.log(`${noteID}`);

    let editingIndex = notesArray.findIndex(note => noteID === note[1]);

    if (editingIndex !== -1) {
        input.value = notesArray[editingIndex][0]
        editingNote = noteID;
    }
}

// clear all notes
function clearNotes(){
    localStorage.clear();
    window.location.reload();
}

//show newNote button if no notes available
function newNote() {
    input.focus();
} 

//don't show clear all buttons if no notes
function noteExists() {
    if (notesContainer.innerHTML === '') {
        document.querySelector('#clearNotes').classList.add('hidden');
        document.querySelector('#newNote').classList.remove('hidden');

        console.log('no notes');
    }
    else{
        document.querySelector('#clearNotes').classList.remove('hidden');
        document.querySelector('#newNote').classList.add('hidden');
    }
}





