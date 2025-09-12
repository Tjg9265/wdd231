// scripts/directory.js
const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const errorEl = document.getElementById('error');

async function fetchMembers() {
  try {
    const res = await fetch('data/members.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const members = await res.json();
    displayMembers(members);
  } catch (err) {
    console.error(err);
    errorEl.hidden = false;
    errorEl.textContent = "Sorry — could not load member data.";
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = '';
  members.forEach(m => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <img class="logo" src="images/${m.image}" alt="${m.name} logo" loading="lazy">
      <div class="content">
        <h3>${m.name}</h3>
        <p>${m.address}</p>
        <p><a href="tel:${m.phone}">${m.phone}</a></p>
        <p><a href="${m.website}" target="_blank" rel="noopener noreferrer">${m.website}</a></p>
        <div class="meta"><span>Membership: ${m.membership}</span></div>
      </div>
    `;

    membersContainer.appendChild(card);
  });
}

/* View toggle handlers */
function setView(view) {
  if (view === 'grid') {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
    gridBtn.setAttribute('aria-pressed','true');
    listBtn.setAttribute('aria-pressed','false');
  } else {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
    gridBtn.setAttribute('aria-pressed','false');
    listBtn.setAttribute('aria-pressed','true');
  }
}

gridBtn.addEventListener('click', () => setView('grid'));
listBtn.addEventListener('click', () => setView('list'));

/* Initialize */
setView('grid');
fetchMembers();
