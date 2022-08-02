const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


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