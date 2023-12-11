import './Originalstyle.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { Carousel, initTE } from "tw-elements";

// Import your spotlight CSS styles
import './spotlight.css';

// Initialize tw-elements
initTE({ Carousel });

// Setup counter
setupCounter(document.querySelector('#counter'));

document.addEventListener('DOMContentLoaded', function () {
    const ctaSection = document.querySelector('.cta-section');

    if (ctaSection) {
        const spotlight = document.createElement('div');
        spotlight.className = 'spotlight';
        ctaSection.appendChild(spotlight);

        ctaSection.addEventListener('mousemove', function (e) {
            spotlight.style.left = e.pageX + 'px';
            spotlight.style.top = e.pageY + 'px';
        });
    }
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

