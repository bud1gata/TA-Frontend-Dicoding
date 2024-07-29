import { fetchNotes, addNote, deleteNote } from './api/notesApi';
import './components/loadingIndicator';
import './styles/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  fetchNotes().then(renderNotes);

  // Add event listeners for add and delete actions
  document.getElementById('add-note-button').addEventListener('click', () => {
    const title = document.getElementById('note-title').value;
    const body = document.getElementById('note-body').value;
    addNote(title, body).then(fetchNotes).then(renderNotes);
  });

  // Assume renderNotes and other utility functions are defined in index.js or imported from another file
});

function renderNotes(notes) {
  const notesContainer = document.getElementById('notes-container');
  notesContainer.innerHTML = notes.map(note => `
    <div>
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <button onclick="deleteNote(${note.id}).then(fetchNotes).then(renderNotes)">Delete</button>
    </div>
  `).join('');
}
