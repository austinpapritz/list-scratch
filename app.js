/* Imports */
import { getFullFellowship } from './fetch-utils.js';
/* Get DOM Elements */
const listDiv = document.querySelector('#card-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const fellowship = await getFullFellowship();
    // for (let fellow of fellowship) {
    // }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
