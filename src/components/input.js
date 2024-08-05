class InputForm extends HTMLElement {
    constructor() {
        super();
        
        // Define the HTML template
        this.innerHTML = `
            <form id="note-form">
                <label for="title">Judul:</label>
                <input type="text" id="title" name="title" required>
                <label for="body">Isi:</label>
                <textarea id="body" name="body" required></textarea>
                <button type="submit">Tambah Catatan</button>
                <p id="error-message"></p>
            </form>
        `;

        // Bind events
        this.querySelector('#note-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        // Retrieve form values
        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;
        const errorMessage = this.querySelector('#error-message');

        // Basic validation
        if (!title || !body) {
            errorMessage.textContent = 'Both fields are required!';
            errorMessage.style.display = 'block';
            return;
        }

        // Clear the error message
        errorMessage.style.display = 'none';

        // Create a new note-item element
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('id', new Date().toISOString());
        noteItem.setAttribute('title', title);
        noteItem.setAttribute('body', body);
        noteItem.setAttribute('createdat', new Date().toLocaleDateString());
        noteItem.setAttribute('archived', 'No');

        // Append the new note-item to the notes container
        document.getElementById('note-list').appendChild(noteItem);

        // Clear the form
        this.querySelector('#note-form').reset();
    }
}

// Define the new element
customElements.define('input-form', InputForm);