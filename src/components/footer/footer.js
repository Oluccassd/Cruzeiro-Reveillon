class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div>
          <div class="bg-fuchsia-700 W-40 flex flex-col items-center justify-center">
            <img src="./images/Logo.png" alt="Cruzeiros de reveillon logo" width="300px">
            <p class="text-white">2024 - Cruzeiros de reveillon - Sua viagem começa aqui</p>
          </div>
        </div>
      </footer>
      `;
  }
}

customElements.define("special-footer", SpecialFooter);
