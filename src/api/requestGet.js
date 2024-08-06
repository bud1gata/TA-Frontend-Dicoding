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
                <style>
                .note-item {
                    background: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 15px;
                    margin: 10px;
                    display: grid;
                    gap: 10px;
                }
                .id {
                    font-size: 0.5em;
                    color: #333;
                }                
                .title {
                    font-size: 1.2em;
                    font-weight: bold;
                }
                .body {
                    font-size: 1em;
                    color: #333;
                }
                .createdAt {
                    font-size: 0.75em;
                    color: #666;
                }
            </style>
            <div class="note-item">
                <div class="id">${note.id}</div>
                <div class="title">${note.title}</div>
                <div class="body">${note.body}</div>
                <div class="createdAt">${note.formattedDate}</div>
                <button
                type="button"
                class="btn-hapus"
                data-id="${note.id}"
              >
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
