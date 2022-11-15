/* Imports */
import { getFellowship } from './fetch-utils.js';
import { renderFellowship } from './render-utils.js';
/* Get DOM Elements */
const listDiv = document.querySelector('#card-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const fellowship = await getFellowship();
    for (let fellow of fellowship) {
        const fellowEl = renderFellowship(fellow);
        listDiv.append(fellowEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
