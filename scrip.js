const form = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;

  const ticket = document.createElement("div");
  ticket.classList.add("ticket");

  ticket.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <strong>${priority}</strong>
  `;

  ticketList.appendChild(ticket);

  form.reset();
});