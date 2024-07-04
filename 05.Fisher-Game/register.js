function register(){

    document.querySelector("form").addEventListener("submit", onSubmit)
    const REGISTER_USER_URL = "http://localhost:3030/users/register"

    function onSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get("email")
        const password = formData.get("password")
        const rePass = formData.get("rePass")

        if(email == "" || password == "" || password != rePass){
            return alert("All fields are required!")
        }
        createUser({email, password})

    }

    async function createUser(data){

        const option = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        
        }
        const response = await fetch(REGISTER_USER_URL, option)
        const userData = await response.json()
    

        sessionStorage.setItem("userData", JSON.stringify(userData))

        window.location = "home.html"

    }
}
register()