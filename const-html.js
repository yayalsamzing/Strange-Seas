class mainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <div class = 'title'>
     <h1> STRANGE SEAS </h1>
     </div>
    <nav class='nav'>
            <a href="index.html"   style="--navColor: #A66FB5;"> Home </a>
       	    <a href="guide.html"   style="--navColor: #E0CD67;"> Guide </a>
           <!-- <a href="biomes.html" style="--navColor: #E89EB8;"> Biomes </a> -->
       	    <a href="game.html" style="--navColor: #6FC276;"> Play </a>
    </nav>
    `;
  }
}
class footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <a href="contact.html">
                <button class="contact">
                    Contact
                </button>
            </a>

        </footer>
    `;
  }
}

customElements.define('main-footer', footer);
customElements.define('main-header', mainHeader);