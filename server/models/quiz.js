const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
 
  title: {
    type: String,
   
    required : true,
  },
  
  
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
