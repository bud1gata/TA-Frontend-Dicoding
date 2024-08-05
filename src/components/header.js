class TitleHeader extends HTMLElement {
    constructor() {
        super();

        const titleh1 = document.createElement("h1");
        titleh1.textContent ="Aplikasi Catatan Harian"

        this.appendChild(titleh1);
    }
}

customElements.define('title-header', TitleHeader);
