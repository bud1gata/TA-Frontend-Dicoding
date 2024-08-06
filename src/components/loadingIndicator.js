export class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="loading-indicator" style="display: none;">Loading...</div>
      <div id="spinner-overlay">
        <div class="spinner"></div>
      </div>
    `;
  }

  show() {
    const loadingIndicator = this.querySelector('#loading-indicator');
    const spinnerOverlay = this.querySelector('#spinner-overlay');
    if (loadingIndicator) loadingIndicator.style.display = 'block';
    if (spinnerOverlay) spinnerOverlay.style.display = 'flex';
  }

  hide() {
    const loadingIndicator = this.querySelector('#loading-indicator');
    const spinnerOverlay = this.querySelector('#spinner-overlay');
    if (loadingIndicator) loadingIndicator.style.display = 'none';
    if (spinnerOverlay) spinnerOverlay.style.display = 'none';
  }
}

customElements.define('loading-indicator', LoadingIndicator);
