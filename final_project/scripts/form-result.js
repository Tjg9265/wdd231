// Display current year
document.getElementById('year').textContent = new Date().getFullYear();

// Grab all query parameters from URL
const params = new URLSearchParams(window.location.search);
const dataDiv = document.getElementById('submitted-data');

if (params.toString() === "") {
  dataDiv.innerHTML = "<p>No data submitted.</p>";
} else {
  const ul = document.createElement('ul');
  ul.className = "submitted-list";

  params.forEach((value, key) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${key.replace(/-/g, ' ')}:</strong> ${value}`;
    ul.appendChild(li);
  });

  dataDiv.appendChild(ul);

  // Optional: personalized thank you if 'name' field exists
  if (params.has('name')) {
    const name = params.get('name');
    const thankYou = document.createElement('p');
    thankYou.textContent = `Hi ${name}, we’ve received your message!`;
    dataDiv.prepend(thankYou);
  }
}
