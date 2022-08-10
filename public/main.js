
const btn = document.getElementById('send')
const random = document.getElementById("random")
const form = document.querySelector('#ratings')
const add = document.querySelector('add')
const nameinput = document.querySelector('#name-input')
const reviewInput = document.querySelector('#review-input')
const reviewsList = document.querySelector('#review-list')


let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');
for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;

		showValue.innerHTML = i + " out of 5";
	});
}

function handleSubmit(e) {
  e.preventDefault()

  if (nameinput.value < 1) {
      alert ('You must enter a your name')
      return
  }

  let userRating = document.querySelector('input:checked')
  let body = {
      name: nameinput.value, 
      rating: +userRating.value, 
      review: reviewInput.value
  }
  axios.post('http://localhost:4005/review', body)
      .then(
        //   nameinput.value = ''  
        getReview()       
      )
    }

function deleteCard(id) {
  axios.delete(`http://localhost:4005/review/${id}`)
      .then(() => getReview())
}

function getReview() {
    // reviewContainer = document.createElement("div");
    // reviewContainer.classList.add("container-review")
  reviewsList.innerHTML = ''

  axios.get('http://localhost:4005/review')
      .then(res => {
        console.log(res.data)
          res.data.forEach(elem => {
              let reviewCard = `<div class="review-card">
                  <h3>Rating: ${elem.rating}/5</h3>
                  <h3>${elem.name}</h3>
                  <h3>${elem.review}</h3>
                  <button class="delete-btn" onclick="deleteCard(${elem['reviews_id']})">Delete</button>
                  </div>`

              reviewsList.innerHTML += reviewCard 
          })
      })
    //   reviewContainer.innerHTML(reviewsList)
}


const getRandom = () => {
  console.log('hit')
    axios.get("http://localhost:4005/donut/random")
        .then(res => {
            const data = res.data;
            alert(data);
}).catch(error => {console.log(error)})
}

const baseURL ="http://localhost:4005/donut/"

random?.addEventListener('click', getRandom)
form.addEventListener('submit', handleSubmit)
