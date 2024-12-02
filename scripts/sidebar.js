//Mostrar menú en todas las pantallas
function loadSidebar() {
  fetch("sidebar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar la barra lateral");
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(".sidebar-container").innerHTML = html;

      initializeSidebarNavigation();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//Funcion navegación entre paneles
function initializeSidebarNavigation() {
  const currentPath = window.location.pathname.split("/").pop();
  const buttons = document.querySelectorAll(".btns-menu button");

  buttons.forEach((button) => {
    const link = button.getAttribute("data-link");

    if (link === currentPath) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      navigateTo(link);
    });
  });

  //Redirigiar al Dashboard al hacer clic en el logo
  const logo = document.querySelector(".sidebar h1");
  if (logo) {
    const dashboardLink = logo.getAttribute("data-link");
    logo.addEventListener("click", () => {
      navigateTo(dashboardLink);
    });
  }
}

function navigateTo(url) {
  window.location.href = url;
}
const infoUser = JSON.parse(localStorage.getItem("infoUser"));
const API_URL = "http://localhost:3000";

const formMakeTransfer = document.getElementById("formMakeTransfer");
if (formMakeTransfer) {
  formMakeTransfer.addEventListener("submit", async (event) => {
    event.preventDefault();
    const recipientEmail = document.getElementById("recipientEmail").value;
    const amount = document.getElementById("amount").value;
    const message = document.getElementById("message").value;
    const res = await fetch(`${API_URL}/transfers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_id: "1",
        recipient_email: recipientEmail,
        amount,
        message,
      }),
    });
    const data = await res.json();
    if (data.error && data.error.length > 0) {
      alert(`${data.message}: ${data.error}`);
    } else {
      alert(data.message);
    }
  });
}
const formAddCard = document.getElementById("formAddCard");

if (formAddCard) {
  formAddCard.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cardNumber = document.getElementById("cardNumber").value;
    const expirationDate = document.getElementById("expirationDate").value;
    const cvv = document.getElementById("cvv").value;
    const res = await fetch(`${API_URL}/addCards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        card_number: cardNumber,
        card_holder: "Jhon Doe",
        expiration_date: expirationDate,
        card_type: "debit",
      }),
    });
    const data = await res.json();
    if (data.error && data.error.length > 0) {
      alert(`${data.message}: ${data.error}`);
    } else {
      alert(data.message);
    }
  });
}

document.addEventListener("DOMContentLoaded", loadSidebar);
