const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HbXlPBSkxooKlJBJJnLnFDFvOPmLj6cjEIyN2QpnsfHJMjy5q1Uwy8lIBwF6zaHpiDv4Yn66DJXwFayCjivcKnD00K9pKOVeM"
);

// - App Config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json()); // receive and send data in json format

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD");
});

app.post("/payments/create", async (req, res) => {
  const total = req.params.total;
  const currency = req.params.currency;
  console.log(total);
  console.log(currency);
  console.log(
    `Payment request is received with amount of ====> ${currency & "" & total}`
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: currency,
  });
  // CREATED SUCCESSFULLY
  res.status(201).send({ clientSecret: paymentIntent.clientSecret });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example end point
// http://localhost:5001/clone-bc95a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
