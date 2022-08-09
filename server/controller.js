require('dotenv').config()
const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
  seed: (req, res) => {
    sequelize.query(`
    CREATE TABLE reviews (
      reviews_id SERIAL PRIMARY KEY,
      rating INTEGER,
      name VARCHAR(30),
      review VARCHAR(100)
    )
    `).then(() => {
      console.log('Seeded')
      res.sendStatus(200)
    }).catch(err => console.log('error seeding', err))
  },  
  //removed reviews_id
  createReview:(req, res) => {
    const {rating, name, review} = req.body
    sequelize.query(`INSERT INTO reviews(rating, name, review)
    VALUES (${rating}, '${name}', '${review}');`).then(dbRes => res.status(200).send(dbRes[0]))
  },
  getReview: (req, res) => {
    sequelize.query(`SELECT * FROM reviews;`).then(dbRes => res.status(200).send(dbRes[0]) 
    ).catch(err => console.log(err))
  },
  deleteReview: (req, res) => {
    const {id} = req.params
    sequelize.query(`DELETE FROM review WHERE reviews_id = ${id}`).then(dbRes => res.status(200).send(dbRes[0])).catch('error deleting review', err)
  },
    getRandom: (req, res) => {
        const donuts = ["Glazed Donut", "Sugar Donut", "Chocolate Ring", "Chocolate Ring with sprikles", "Maple Donut", "Old Fashion", "Home Cut", "Chocolate Cake", "Red Velvet", "White Cake", "Birthday Cake", "Apple Fritter", "Strawberry Turn-over", "Cherry Turn-over", "Apple Turn-over", "Cinnamon Rolls", "Pecan Rolls", "Bagel", "Glazed Old Fashion", "Bowtie", "Long John", "Bear Claws", "Cinnamon Twist", "Tarts"]
      
        let random = Math.floor(Math.random() * donuts.length);
        let randomDonut = donuts[random];
      console.log(randomDonut)
        res.status(200).send(randomDonut);
    }
}

