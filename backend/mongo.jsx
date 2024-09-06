const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://l215306:6nMZveNaBcu4GXfP@cluster0.la3psuu.mongodb.net/trial")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(error => {
        console.error("MongoDB connection error:", error);
    });

module.exports = { mongoose };
