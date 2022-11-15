export function renderFellowship(fellow) {
    const fellowEl = document.createElement('a');
    fellowEl.href = `./details/?id=${fellow.id}`;
    fellowEl.classList.add('fellow-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = fellow.name;
    nameEl.classList.add('fellow-name');

    const imgEl = document.createElement('img');
    imgEl.src = `./assets/${fellow.id}.jpg`;

    fellowEl.append(nameEl, imgEl);

    return fellowEl;
}

export function renderFellow(fellow) {
    const fellowEl = document.createElement('div');
    fellowEl.classList.add('detail-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = fellow.name;
    nameEl.classList.add('detail-name');

    const imgEl = document.createElement('img');
    imgEl.src = `../assets/${fellow.id}.jpg`;

    const titleEl = document.createElement('p');
    titleEl.textContent = fellow.title;
    titleEl.classList.add('detail-stat', 'detail-title');

    const raceEl = document.createElement('p');
    raceEl.textContent = fellow.race;
    raceEl.classList.add('detail-stat');

    const weaponEl = document.createElement('p');
    weaponEl.textContent = fellow.weapon;
    weaponEl.classList.add('detail-stat', 'detail-weapon');

    fellowEl.append(nameEl, imgEl, titleEl, raceEl, weaponEl);

    return fellowEl;
}
