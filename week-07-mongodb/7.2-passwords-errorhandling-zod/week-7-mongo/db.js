const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

// module.exports = {
//   UserModel : UserModel,
//   TodoModel : TodoModel
// }

// If the property name and the variable name are the same, you can write just the name once.

module.exports = {
    UserModel,
    TodoModel
}