const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById('lastModified');
if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;

const lastVisit = localStorage.getItem('lastVisit');
if(lastVisit) {
  console.log(`Welcome back! Your last visit was ${lastVisit}`);
}
localStorage.setItem('lastVisit', new Date().toLocaleDateString());
