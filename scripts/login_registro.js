const API_URL = "http://localhost:3000";
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Evento para abrir form de registro
signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

// Evento para regresar al form de iniciar sesión
signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

const formSignIn = document.getElementById("formSignIn");

formSignIn.addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log();
  const email = document.getElementById("emailUser").value;
  const password = document.getElementById("passwordUser").value;

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.error && data.error.length > 0) {
    alert(data.message);
  } else {
    localStorage.setItem(
      "infoUser",
      JSON.stringify({
        email,
        password,
      })
    );
    window.location.href = `./dashboard.html`;
  }
});

const formSignUp = document.getElementById("formSignUp");

formSignUp.addEventListener("submit", async function (event) {
  event.preventDefault();
  const name = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: name,
      last_name: apellido,
      email,
      password,
    }),
  });
  const data = await res.json();
  if (data.error && data.error.length > 0) {
    alert(`${data.message}: ${data.error}`);
  } else {
    alert("Usuario registrado correctamente!");
    window.location.href = `./login_registro.html`;
  }
});
