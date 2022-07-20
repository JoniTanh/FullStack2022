const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.qjn12.mongodb.net/numberApp?retryWrites=true&w=majority`;

mongoose.connect(url);

const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Number = mongoose.model("Number", numberSchema);

const number = new Number({
  name: process.argv[3],
  number: process.argv[4],
});

if (process.argv.length === 5) {
  number.save().then(() => {
    console.log(
      `Added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    );
    mongoose.connection.close();
  });
}

if (process.argv.length === 4 || process.argv.length > 5) {
  console.log("Try again. Use quotes for name if it includes spaces...");
  mongoose.connection.close();
}

if (process.argv.length === 3) {
  Number.find({}).then((result) => {
    console.log("phonebook");
    result.forEach((number) => {
      console.log(`${number.name} ${number.number}`);
    });
    mongoose.connection.close();
  });
}
