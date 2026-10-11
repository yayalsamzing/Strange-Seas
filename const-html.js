class mainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <h1 class = 'title'> STRANGE SEAS </h1>
    <nav class='nav'>
            <a href="index.html"   style="--navColor: #A66FB5;"> Home </a>
            <a href="biomes.html" style="--navColor: #E89EB8;"> Biomes </a>
       	    <a href="game.html" style="--navColor: #6FC276;"> Play </a>
    </nav>
    `;
  }
}
class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <footer class ='mainFooter'>
            <a href="index.html" class="footer-link">Home</a>
            <a href="game.html" class="footer-link">Play</a>
            <a href="contact.html" class="footer-link">Contact</a>
        </footer>
    `;
  }
}

customElements.define('main-footer', footer);
customElements.define('main-header', mainHeader);