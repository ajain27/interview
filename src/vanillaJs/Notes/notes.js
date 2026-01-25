let notes = [];
let editingNoteId = null;

const loadNotes = () => {
  const savedNotes = localStorage.getItem("quickNotes");
  return savedNotes ? JSON.parse(savedNotes) : [];
};

const saveNote = (e) => {
  e.preventDefault();
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();

  if (editingNoteId) {
    const noteIndex = notes.findIndex((note) => note.id === editingNoteId);
    notes[noteIndex] = {
      ...notes[noteIndex],
      title: title,
      content: content,
    };
  } else {
    notes.unshift({
      id: Date.now().toString(),
      title: title,
      content: content,
    });
  }

  closeNoteDialog();
  saveNotes();
  renderNotes();
};

// eslint-disable-next-line no-unused-vars
const deleteNote = (id) => {
  console.log("delete");
  notes = notes.filter((note) => note.id !== id);
  saveNotes();
  renderNotes();
};

const saveNotes = () => {
  localStorage.setItem("quickNotes", JSON.stringify(notes));
};

const renderNotes = () => {
  const notesContainer = document.getElementById("notesContainer");
  if (notes.length === 0) {
    notesContainer.innerHTML = `
        <div class="empty-state">
          <h2>No Notes</h2>
          <p>Create something</p>
          <button class="add-note-btn" onClick="openNoteDialog()">+ Add</button>
        </div>
    `;
    return;
  }
  notesContainer.innerHTML = notes
    .map(
      (note) => `
    <div class="note-card">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-content">${note.content}</p>
      <div class="note-actions">
        <button class="edit-btn" onClick="openNoteDialog('${note.id}')" title="Edit Note">✏️</button>
        <button class="delete-btn" onClick="deleteNote('${note.id}')">✘</button>
      </div>
    </div>
  `,
    )
    .join("");
};

const openNoteDialog = (noteId = null) => {
  const dialog = document.getElementById("noteDialog");
  const titleInput = document.getElementById("noteTitle");
  const contentInput = document.getElementById("noteContent");

  if (noteId) {
    const noteToEdit = notes.find((note) => note.id === noteId);
    editingNoteId = noteId;
    document.getElementById("dialogTitle").textContent = "Edit note";
    titleInput.value = noteToEdit.title;
    contentInput.value = noteToEdit.content;
  } else {
    editingNoteId = null;
    document.getElementById("dialogTitle").textContent = "Add note";
    titleInput.value = "";
    contentInput.value = "";
  }

  dialog.showModal();
  titleInput.focus();
};

const closeNoteDialog = () => {
  document.getElementById("noteDialog").close();
};

document.addEventListener("DOMContentLoaded", function () {
  notes = loadNotes();
  renderNotes();

  document.getElementById("noteForm").addEventListener("submit", saveNote);

  document
    .getElementById("noteDialog")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        closeNoteDialog();
      }
    });
});
