let notesList = JSON.parse(localStorage.getItem("notesList")) || [];

window.onload = function () {
    if (notesList.length > 0) {
        createNotesElement();
}};

function addNote() {
    // Get the input fields
    let inputNoteElement = document.querySelector('#inputNote');
    let inputDateElement = document.querySelector('#inputDate');

    // Get the values of the input fields
    let inputNote = inputNoteElement.value.trim(); // Using trim() to remove any leading/trailing spaces
    let inputDate = inputDateElement.value;

    // Check if the input note is empty
    if (inputNote === '') {
        console.log('Please enter a note');
        return; // Stop the function from running further if the note is empty
    }

    let noteID = `note-${notesList.length}`;
    // Push the new note to the notes list
    notesList.push({noteID: noteID, note: inputNote, noteDate: inputDate });

    // Save the notes list to localStorage
    localStorage.setItem("notesList", JSON.stringify(notesList));

    // Re-render the notes on the page
    createNotesElement();

    // Clear the input fields
    inputNoteElement.value = '';
    inputDateElement.value = '';
}

function createNotesElement() {
    let containerElement = document.querySelector('#notesContainer');
    containerElement.innerHTML = ''; // Clear existing notes

    // Loop through the notes list and create HTML elements for each note
    notesList.forEach((notes) => {
        let noteID = notes.noteID;
        let inputNote = notes.note;
        let inputDate = notes.noteDate;

        // let noteID = note-${index}-${Date.now()};
        let containerHtmlElement = `
            <div id="${noteID}" class="row align-items-center mb-2">
                <div class="col-6 col-md-8">
                    <p class=" mb-0" id="notesPara-${noteID}">${inputNote}</p>
                </div>
                <div class="col-4 col-md-2">
                    <p class=" mb-0" id="notesDate-${noteID}">${inputDate}</p>
                </div>
                <div class="col-2 ">
                    <button id="button-${noteID}" onclick="deleteNote('${noteID}')" class="btn btn-sm btn-danger">Delete</button>
                </div>
            </div>`
        ;
        containerElement.innerHTML += containerHtmlElement;
    });
}

function deleteNote(noteID) {
    let noteElement = document.getElementById(noteID);
    noteElement.remove(); // Remove the note from the UI

    // Find the note in the notesList by matching its ID
    /**/let noteIndex = notesList.findIndex(note=> note.noteID === noteID);
    console.log(noteIndex);
    
    if (noteIndex !== -1) {
        notesList.splice(noteIndex, 1); // Remove the note from the notes list
    }

    // Update the notesList in localStorage
    localStorage.setItem("notesList", JSON.stringify(notesList));

    // Re-render the notes
    createNotesElement();
}


