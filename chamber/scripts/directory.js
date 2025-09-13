async function loadMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();

  const container = document.querySelector('#members-container'); // make sure you have this in HTML

  data.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

loadMembers();
