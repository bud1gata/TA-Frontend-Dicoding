class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['id', 'title', 'body', 'createdAt', 'archived'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const id = this.getAttribute('id') || '';
        const title = this.getAttribute('title') || '';
        const body = this.getAttribute('body') || '';
        const createdAt = this.getAttribute('createdAt') || '';
        const archived = this.getAttribute('archived') || '';

        let formattedDate = 'Unknown Date';
        try {
            const date = new Date(createdAt);
            if (!isNaN(date.getTime())) {
                formattedDate = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(date);
            }
        } catch (error) {
            console.error('Date formatting error:', error);
        }

        this.shadowRoot.innerHTML = `
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
                .archived {
                    font-size: 0.5em;
                    color: #333;
                }
            </style>
            <div class="note-item">
                <div class="id">${id}</div>
                <div class="title">${title}</div>
                <div class="body">${body}</div>
                <div class="createdAt">${formattedDate}</div>
                <div class="archived">${archived}</div>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);
