class SpecialHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="flex justify-between items-center p-4 shadow-2xl">
          <div>
            <a href="./index.html"><img class="shadow-custom" src="./images/Logo.png" alt="Cruzeiros Reveillon" /></a>
          </div>
          <div class="flex gap-16">
            <a href="#" class="no-underline">INÍCIO</a>
            <a href="#" class="no-underline">DESTINOS</a>
            <a href="#" class="no-underline">COMPANHIAS</a>
            <a href="#" class="no-underline">NAVIOS</a>
            <a href="#" class="no-underline">BLOG</a>
            <a href="#"><img src="./images/whatsapp_logo.png" alt="Whatsapp" width="24px" /></a>
          </div>
        </header>
      `;
    }
  }
  
  customElements.define('special-header', SpecialHeader);
  