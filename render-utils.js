export function renderFellowship(fellow) {
    const fellowEl = document.createElement('a');
    fellowEl.href = `./details/?id=${fellow.id}`;
    fellowEl.classList.add('fellow-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = fellow.name;
    nameEl.classList.add('fellow-name');

    const titleEl = document.createElement('p');
    titleEl.textContent = fellow.title;
    titleEl.classList.add('fellow-stat');

    const weaponEl = document.createElement('p');
    weaponEl.textContent = fellow.weapon;
    weaponEl.classList.add('fellow-stat');

    const imgEl = document.createElement('img');
    imgEl.src = fellow.img;

    fellowEl.append(nameEl, titleEl, weaponEl, imgEl);

    return fellowEl;
}
