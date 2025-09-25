async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json"); // adjust path if needed
    if (!response.ok) throw new Error("Members fetch failed");
    const members = await response.json();

    // Filter Gold & Silver
    const goldSilver = members.filter(m => 
      m.membership.toLowerCase() === "gold" || m.membership.toLowerCase() === "silver"
    );

    // Randomly pick 2–3 members
    const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const shuffled = goldSilver.sort(() => 0.5 - Math.random()).slice(0, count);

    // Display them
    const container = document.querySelector(".spotlight-container");
    container.innerHTML = "";
    shuffled.forEach(m => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${m.name}</h3>
        <p>${m.address}</p>
        <p>${m.phone}</p>
        <a href="${m.website}" target="_blank">Visit Website</a>
        <img src="images/${m.image}" alt="${m.name}">
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Spotlight error:", error);
  }
}

loadSpotlights();
