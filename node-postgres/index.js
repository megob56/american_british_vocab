const express = require("express");
const { Client } = require("pg");
const app = express();
const port = 3001;
const dotenv = require('dotenv');
dotenv.config();


app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});

// create client
const client = new Client({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});

client.connect();

// created tables, and inserted initial data
const createUSATable = `
  CREATE TABLE usa (
    usa_id serial PRIMARY KEY,
    usa_word varchar ( 50 )
  )
`;

const createUKTable = `
  CREATE TABLE uk (
    uk_id serial PRIMARY KEY,
    usa_id INT NOT NULL,
    uk_word varchar ( 50 ),
    FOREIGN KEY (usa_id)
      REFERENCES usa (usa_id)
  )
`;

const insertDiaperIntoUSAWords = `
  INSERT INTO usa (usa_word)
  VALUES ('diaper')
`
const insertUSAWordsInitial = `
    INSERT INTO usa (usa_word)
    VALUES 
      ('Binky'),
      ('Stroller'),
      ('Wash cloth'),
      ('Crib'),
      ('Onsie');
`
const insertUKWordsInitial = `
    INSERT INTO uk (usa_id, uk_word)
    VALUES 
      (1, 'Nappy'),
      (2, 'NuNu'),
      (3, 'Pram'),
      (4, 'Flannel'),
      (5, 'Cot'),
      (6, 'Bodysuit');
`
const deleteWashCloth = `
    DELETE FROM usa
    WHERE usa_word = 'Wash cloth'
`
const deleteFlannel = `
    DELETE FROM uk
    WHERE uk_word = 'Flannel'
`
// client.query(deleteWashCloth, (err, res) => {
//   if (err) {
//       console.error(err);
//       return;
//   }
//   console.log('delete wash cloth was successful');
//   client.end();
// });

// client
// 	.query(createUSATable)
// 	.then((res) => {
// 		console.log("USA table is successfully created");
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	})
// 	.finally(() => {
// 		client.end();
// 	});

  // client
	// .query(createUKTable)
	// .then((res) => {
	// 	console.log("UK table is successfully created");
	// })
	// .catch((err) => {
	// 	console.error(err);
	// })
	// .finally(() => {
	// 	client.end();
	// });


// fetch data from db
const getWords = () => {
  return new Promise(function(resolve, reject) {
    client.query('SELECT usa.usa_id, usa.usa_word, uk.uk_word FROM usa JOIN uk ON usa.usa_id = uk.usa_id ORDER BY usa_id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows)
    })
  }) 
}

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  getWords()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})