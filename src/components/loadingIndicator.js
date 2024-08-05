export class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
          }
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
        <div class="loading">
          <div class="spinner"></div>
        </div>
      `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);

export function hideLoadingIndicator() {
  const indicator = document.querySelector('loading-indicator');
  if (indicator) {
    indicator.remove();
  }
}
