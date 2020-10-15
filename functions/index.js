const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HbXlPBSkxooKlJBJJnLnFDFvOPmLj6cjEIyN2QpnsfHJMjy5q1Uwy8lIBwF6zaHpiDv4Yn66DJXwFayCjivcKnD00K9pKOVeM"
);

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // receive and send data in json format

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const currency = req.query.currency;

  console.log(
    `Payment request is received with amount of ====> ${parseInt(total).toFixed(
      0
    )}`
  );

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: currency,
    });
    // CREATED SUCCESSFULLY
    if (paymentIntent) {
      res.status(201).send({ clientSecret: paymentIntent.client_secret });
    }
  } catch (err) {
    return console.log(err.message);
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);
