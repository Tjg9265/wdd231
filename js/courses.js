const courses = [
  { code: 'WDD 130', title: 'Web Fundamentals', credits: 2, category: 'WDD', completed: true },
  { code: 'WDD 131', title: 'Dynamic Web Fundamentals current retake', credits: 2, category: 'WDD', completed: true },
  { code: 'CSE 110', title: 'Intro to Programming', credits: 2, category: 'CSE', completed: true },
  { code: 'CSE 111', title: 'programming with classes', credits: 2, category: 'CSE', completed: true },
  { code: 'ITM 111', title: 'Intro to Databases', credits: 3, category: 'ITM', completed: true },
];

const container = document.getElementById('courses-list'); // your container element in HTML
const creditsOut = document.getElementById('credits');
const filterContainer = document.getElementById('filter-buttons');

function render(list) {
  container.innerHTML = '';
  list.forEach(c => {
    const article = document.createElement('article');
    article.className = 'course' + (c.completed ? ' completed' : '');
    article.innerHTML = `<h3 class="code">${c.code} <span class="badge">${c.completed ? 'Completed' : ''}</span></h3>
                         <p class="title">${c.title}</p>
                         <p class="meta">${c.category} • ${c.credits} credits</p>`;
    container.appendChild(article);
  });
}

function updateCredits(list) {
  const total = list.reduce((acc, cur) => acc + cur.credits, 0);
  creditsOut.textContent = `Total credits displayed: ${total}`;
}

render(courses);
updateCredits(courses);

const categories = [...new Set(courses.map(c => c.category))];
const allBtn = document.createElement('button');
allBtn.textContent = 'All';
allBtn.className = 'filter-btn';
allBtn.setAttribute('aria-pressed', 'true'); // default active
allBtn.addEventListener('click', () => {
  render(courses);
  updateCredits(courses);
  setActiveButton(allBtn);
});
filterContainer.appendChild(allBtn);

categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.textContent = cat;
  btn.className = 'filter-btn';
  btn.setAttribute('aria-pressed', 'false');
  
  btn.addEventListener('click', () => {
    const filtered = courses.filter(c => c.category === cat);
    render(filtered);
    updateCredits(filtered);
    setActiveButton(btn);
  });

  filterContainer.appendChild(btn);
});

function setActiveButton(activeBtn) {
  [...filterContainer.children].forEach(btn => btn.setAttribute('aria-pressed', 'false'));
  activeBtn.setAttribute('aria-pressed', 'true');
}
