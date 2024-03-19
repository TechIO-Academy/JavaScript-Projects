document.getElementById('add-note-btn').addEventListener('click', addNote);

function addNote() {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    if (noteInput.value.trim() === '') {
        alert('Please write something in the note.');
        return;
    }

    // Create the note element container
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    // Note text content (editable span)
    const noteText = document.createElement('span');
    noteText.textContent = noteInput.value;
    noteText.contentEditable = false; // Initially not editable
    noteElement.appendChild(noteText);

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-note-btn');
    editBtn.onclick = function() {
        if (editBtn.textContent === 'Edit') {
            noteText.contentEditable = true;
            noteText.focus();
            editBtn.textContent = 'Save';
        } else {
            noteText.contentEditable = false;
            editBtn.textContent = 'Edit';
        }
    };
    noteElement.appendChild(editBtn);

    // Create Delete Button with confirmation
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-note-btn');
    deleteBtn.onclick = function() {
        if (confirm('Are you sure you want to delete this note?')) {
            notesContainer.removeChild(noteElement);
        }
    };
    noteElement.appendChild(deleteBtn);

    notesContainer.appendChild(noteElement);

    noteInput.value = ''; // Clear input field after adding the note
}
