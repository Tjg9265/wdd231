// Fetch JSON and build cards
    fetch('data/discover.json')
      .then(response => response.json())
      .then(items => {
        const grid = document.querySelector('.discover-grid');
        items.forEach((item, index) => {
          const card = document.createElement('section');
          card.className = 'item-card';
          card.id = `item${index+1}`;
          card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
              <img src="${item.image}" alt="${item.name}" loading="lazy">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
          `;
          grid.appendChild(card);
        });
      });

    // LocalStorage visit message
    window.addEventListener('DOMContentLoaded', () => {
      const messageEl = document.getElementById('visit-message');
      const now = Date.now();
      const lastVisit = localStorage.getItem('lastVisit');

      if (!lastVisit) messageEl.textContent = "Welcome! Let us know if you have any questions.";
      else {
        const daysAgo = Math.floor((now - lastVisit) / (1000*60*60*24));
        messageEl.textContent = daysAgo < 1 ? "Back so soon! Awesome!" :
                                `You last visited ${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago.`;
      }

      localStorage.setItem('lastVisit', now);
    });