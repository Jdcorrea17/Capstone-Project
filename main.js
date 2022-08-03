const btn = document.getElementById('send')
const random = document.getElementById("random")

const getRandom = () => {
    axios.get("http://localhost:4005/donut/random/")
        .then(res => {
            const data = res.data;
            alert(data);
})
}

btn.addEventListener('click', function(e) {
  e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const body = `${name} + ${email} + ${subject} + ${message}`


    Email.send({
      // SecureToken :'1d857fea-5463-4ab6-9739-8a0c0c2e5212',
      // Host : "smtp.gmail.com",
      // Host : "smtp.yourisp.com",
      // Host : "smtp.mailtrap.io",
      // Username : "fae07fb0f2cb85",
      // Password : "2b528b2daafadf",
      SecureToken: "6062ff76-94b4-4455-a132-408ef0eaf68c ",
      To : 'jdcorrea17@gmail.com',
      From : email,
      Subject : subject,
      Body : body
  }).then(
    message => alert(message)
  )
})
const baseURL ="http://localhost:4005/donut/random/"

random.addEventListener('click', getRandom)