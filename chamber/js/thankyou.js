// Parse URL parameters and display submitted info
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const infoDiv = document.getElementById("submitted-info");
  if (!infoDiv) return;

  const fields = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Mobile Phone", key: "phone" },
    { label: "Business/Organization Name", key: "organization" },
    { label: "Timestamp", key: "timestamp" },
  ];

  let html = '<ul class="submitted-list">';
  fields.forEach((field) => {
    const value = params.get(field.key) || "";
    html += `<li><strong>${field.label}:</strong> ${value}</li>`;
  });
  html += "</ul>";
  infoDiv.innerHTML = html;
});
