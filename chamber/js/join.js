// Set timestamp on form load
window.addEventListener("DOMContentLoaded", () => {
  const timestampInput = document.getElementById("timestamp");
  if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toISOString();
  }

  // Modal logic
  const modalLinks = document.querySelectorAll(".modal-link");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  modalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modalId = this.getAttribute("data-close");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close modal when clicking outside modal content
  modals.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
