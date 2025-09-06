const courses = [
  { code: 'WDD 130', title: 'Web Fundamentals', credits: 2, category: 'WDD', completed: true },
  // add other courses...
];

const container = document.getElementById('courses-list'); // your container element in HTML
const creditsOut = document.getElementById('credits');

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

// add filter buttons and initial render...
