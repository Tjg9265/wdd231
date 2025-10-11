const container = document.getElementById('trail-list');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');
const modal = document.getElementById('trailModal');

// Modal close functionality (safe)
if (closeBtn && modal) {
  closeBtn.onclick = () => (modal.style.display = 'none');
  window.onclick = e => {
    if (e.target === modal) modal.style.display = 'none';
  };
}

function openModal(trail) {
  modalContent.innerHTML = `
    <h3>${trail.name}</h3>
    <p><strong>Location:</strong> ${trail.location}</p>
    <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
    <p><strong>Distance:</strong> ${trail.distance} miles</p>
    <p>${trail.description}</p>
  `;
  modal.setAttribute('aria-hidden', 'false');
}

closeBtn.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
window.addEventListener('click', e => {
  if(e.target === modal) modal.setAttribute('aria-hidden', 'true');
});

// Only run trail fetching if container exists
if (container) {
  fetch('./data/trails.json')
    .then(response => response.json())
    .then(trailsData => {
      trailsData.forEach(trail => {
        const card = document.createElement('div');
        card.className = 'trail-card';
        card.innerHTML = `
          <h3>${trail.name}</h3>
          <p><strong>Location:</strong> ${trail.location}</p>
          <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
          <p><strong>Distance:</strong> ${trail.distance} miles</p>
          <p>${trail.description}</p>
          <img src="${trail.image}" alt="Photo of ${trail.name}">
          <button class="details-btn">View Details</button>
          <button class="fav-btn">Add to Favorites</button>
        `;
        container.appendChild(card);

        // Modal functionality
        if (modal && modalText) {
          card.querySelector('.details-btn').addEventListener('click', () => {
            modalText.innerHTML = `
              <h3>${trail.name}</h3>
              <p><strong>Location:</strong> ${trail.location}</p>
              <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
              <p><strong>Distance:</strong> ${trail.distance} miles</p>
              <p>${trail.description}</p>
            `;
            modal.style.display = 'block';
          });
        }

        // LocalStorage favorite functionality
        card.querySelector('.fav-btn').addEventListener('click', () => {
          let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          if (!favorites.includes(trail.name)) {
            favorites.push(trail.name);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`${trail.name} added to favorites!`);
          } else {
            alert(`${trail.name} is already in favorites.`);
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching trails JSON:', error);
    });
}
