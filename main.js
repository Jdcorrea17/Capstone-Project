const random = document.getElementById("random")

const getRandom = () => {
    axios.get("http://localhost:4005/donut/random/")
        .then(res => {
            const data = res.data;
            alert(data);
})
}
const baseURL ="http://localhost:4005/donut/random/"

random.addEventListener('click', getRandom)