// thankyou.js
const params = new URLSearchParams(window.location.search);
document.getElementById("output").innerHTML = `
  <strong>${params.get("first")} ${params.get("last")}</strong><br>
  Email: ${params.get("email")}<br>
  Phone: ${params.get("phone")}<br>
  Organization: ${params.get("organization")}<br>
  Date: ${params.get("timestamp")}
`;
