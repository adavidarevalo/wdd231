// Discover page functionality
document.addEventListener("DOMContentLoaded", () => {
  // Visit counter functionality
  const visitCountElement = document.getElementById("visit-count");
  const lastVisitElement = document.getElementById("last-visit");

  // Get current visit count from localStorage
  let visitCount = localStorage.getItem("discoverVisitCount") || 0;
  let lastVisit = localStorage.getItem("discoverLastVisit") || "Never";

  // Increment visit count
  visitCount = parseInt(visitCount) + 1;

  // Update localStorage
  localStorage.setItem("discoverVisitCount", visitCount);
  localStorage.setItem("discoverLastVisit", new Date().toLocaleDateString());

  // Update display
  visitCountElement.textContent = visitCount;
  lastVisitElement.textContent = lastVisit;

  // Add some interactive animations
  const cards = document.querySelectorAll(
    ".demo-card, .attraction-card, .business-card"
  );

  // Add staggered animation on page load
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });

  // Add click effects to cards
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);
    });
  });
});
