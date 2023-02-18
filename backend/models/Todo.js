const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
  title: {
    type: String
  },
  status: {
    type: String,
    default: "uncompleted",
    enum: ["completed", "uncompleted"]
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
});

mongoose.model('todos', TodoSchema);