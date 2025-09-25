// timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// modal logic
const modals = {
  np: "Benefits: Non-Profit members receive community recognition and discounted event fees.",
  bronze: "Benefits: Bronze members get directory listing and networking access.",
  silver: "Benefits: Silver members get directory highlights and social media promotion.",
  gold: "Benefits: Gold members get premium exposure and event sponsorships."
};

document.querySelectorAll(".modal-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(modals[btn.dataset.modal]); // simple modal for now
  });
});
