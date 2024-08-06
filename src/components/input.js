import { showResponseMessage } from "../api/notesApi";
import { insertNote } from "../api/requestAdd";
import { LoadingIndicator } from "./loadingIndicator";

export class InputForm extends HTMLElement {
    constructor() {
        super();
        
        this.innerHTML = `
            <form id="note-form">
                <label for="title">Judul:</label>
                <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Contoh: Makan siang dengan klien"
                required/>

                <label for="body">Isi:</label>

                <textarea 
                id="body" 
                name="body"                
                placeholder="Contoh: Lokasi di Rumah Makan Siap Mundur" 
                required></textarea>
                <button type="submit" id="btn-add">Tambah Catatan</button>
                <p id="error-message" style="color: red; display: none;">Please fill out both fields.</p>
                <loading-indicator></loading-indicator> <!-- Include the loading indicator -->
            </form>
        `;

        this.querySelector('#note-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();

        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;
        const errorMessage = this.querySelector('#error-message');
        const loadingIndicator = this.querySelector('loading-indicator');

        if (!title || !body) {
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';
        loadingIndicator.show();

        const note = {
            title,
            body,
        };

        try {
            await insertNote(note);
            this.querySelector('#note-form').reset();
        } catch (error) {
            showResponseMessage(error.message || error);
        } finally {
            loadingIndicator.hide();
        }
    }
}

customElements.define('input-form', InputForm);
