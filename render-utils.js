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

    const raceEl = document.createElement('p');
    raceEl.textContent = fellow.race;
    raceEl.classList.add('fellow-stat');

    const weaponEl = document.createElement('p');
    weaponEl.textContent = fellow.weapon;
    weaponEl.classList.add('fellow-stat');

    const imgEl = document.createElement('img');
    imgEl.src = `./assets/${fellow.id}.jpg`;

    fellowEl.append(nameEl, titleEl, raceEl, weaponEl, imgEl);

    return fellowEl;
}
