function login() {
    const LOGIN_URL = "http://localhost:3030/users/login";
  document.querySelector("form").addEventListener("submit", onSubmit);

  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (email == "" || password == "") {
      return alert("All fields are required!");
    }
    onLogin({ email, password });
  }
  async function onLogin(data) {

    const option = {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

    }
    const response = await fetch(LOGIN_URL, option);
    const userData = await response.json();
    
    sessionStorage.setItem("userData", JSON.stringify(userData));
    window.location = "home.html";


  }
}
login();
