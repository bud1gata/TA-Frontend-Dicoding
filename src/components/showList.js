//penempatan note-list
export class ShowList extends HTMLElement {
    constructor() {
        super();

        const daftarcat = document.createElement("aside");
        daftarcat.id ="note-list"

        this.appendChild(daftarcat);
    }
}
customElements.define("show-list", ShowList)
