const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    Product : String,
    Price: String,
    description: String
})

const PaymentModel = mongoose.model("payments", PaymentSchema);

module.exports = PaymentModel

