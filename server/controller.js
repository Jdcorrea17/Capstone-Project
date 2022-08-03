module.exports = {
    getRandom: (req, res) => {
        const donuts = ["Glazed Donut", "Sugar Donut", "Chocolate Ring", "Chocolate Ring with sprikles", "Maple Donut", "Old Fashion", "Home Cut", "Chocolate Cake", "Red Velvet", "White Cake", "Birthday Cake", "Apple Fritter", "Strawberry Turn-over", "Cherry Turn-over", "Apple Turn-over", "Cinnamon Rolls", "Pecan Rolls", "Bagel", "Glazed Old Fashion", "Bowtie", "Long John", "Bear Claws", "Cinnamon Twist", "Tarts"]
      
        let random = Math.floor(Math.random() * donuts.length);
        let randomDonut = donuts[random];
      console.log(randomDonut)
        res.status(200).send(randomDonut);
    },
}

