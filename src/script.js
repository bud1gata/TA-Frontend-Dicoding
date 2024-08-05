//stream array dan simpan
document.addEventListener('DOMContentLoaded', () => {
    const noteList = document.getElementById('note-list');

    fetch('https://raw.githubusercontent.com/dicodingacademy/a163-bfwd-labs/099-shared-files/notes.js')
        .then(response => response.text())
        .then(data => {
            const matches = data.match(/\[.*?\]/s);
            if (matches && matches[0]) {
                const notesString = matches[0];
                const notes = new Function('return ' + notesString)();

                if (Array.isArray(notes)) {
                    notes.forEach(note => {
                        const noteItem = document.createElement('note-item');
                        noteItem.setAttribute('id', note.id);
                        noteItem.setAttribute('title', note.title);
                        noteItem.setAttribute('body', note.body);
                        noteItem.setAttribute('createdAt', note.createdAt);
                        noteItem.setAttribute('archived', note.archived);
                        noteList.appendChild(noteItem);
                    });
                } else {
                    console.error('error array');
                }
            } else {
                console.error('gagal menarik array');
            }
        })
        .catch(error => console.error('Error info:', error));
});



//penempatan note-list
class ShowList extends HTMLElement {
    constructor() {
        super();

        const daftarcat = document.createElement("aside");
        daftarcat.id ="note-list"

        this.appendChild(daftarcat);
    }
}
customElements.define("show-list", ShowList)
