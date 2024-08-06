import { baseUrl, showResponseMessage } from "./notesApi.js";
import { removeNote } from "./requestDelete.js";


export const getNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      showResponseMessage(responseJson.message); //failed handle
    } else if (Array.isArray(responseJson.data)) {
      console.log('Index data Array :', responseJson.data); // cek Array
      renderAllNotes(responseJson.data);
    } else {
      showResponseMessage("Tidak ada Data yang tersedia");
    }
  } catch (error) {
    console.error('Fetch error:', error); // Catat Error
    showResponseMessage(error.message || error);
  }
};

getNotes();

const renderAllNotes = (notes) => {
  const listBookElement = document.querySelector('#note-list');
  listBookElement.innerHTML = '';

  notes.forEach((note) => {
    listBookElement.innerHTML += `
        <div id="notes-container">
            <div class="note-item">
                <div class="id">${note.id}</div>
                <div class="title">${note.title}</div>
                <div class="body">${note.body}</div>
                <button type="button" class="btn-hapus" data-id="${note.id}">Hapus Catatan</button>
            </div>
            <!-- Repeat note-item for each note -->
        </div>

    `;
  });

  const deleteButtonElements = document.querySelectorAll('.btn-hapus');
  deleteButtonElements.forEach((button) => {
    button.addEventListener('click', (event) => {
      const noteId = event.target.dataset.id;

      removeNote(noteId);
    });
  });
};
