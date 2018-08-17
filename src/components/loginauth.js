class Login extends React C

handleLogin = async (formData) => {
  let response = await fetch(`http://localhost:3000/login`, {
    method: "POST".
    body: JSON.stringify(this.state)
  })
}
