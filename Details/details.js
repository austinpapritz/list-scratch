import { getFellow, getFellowship } from '../fetch-utils.js';
import { renderFellow } from '../render-utils.js';

const detailsEl = document.querySelector('.details-card-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const fellow = await getFellow(id);
    const fellowDetailsEl = renderFellow(fellow);
    detailsEl.append(fellowDetailsEl);
});
