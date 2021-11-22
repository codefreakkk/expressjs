const mongoose = require("mongoose");

// connect to mongodb using async await

// async function connecToDB() {
//     const connection = await mongoose.connect(
//         "mongodb://localhost:27017/employee", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//     );

//     return connection;
// }

// connecToDB()
//     .then(() => console.log("Connection Successfull"))
//     .catch((err) => console.log(err));

// connect to mongodb using mongoose

mongoose
    .connect("mongodb://localhost:27017/employee", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connection successfull"))
    .catch((err) => console.log(err));

// creating schema

const empSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    empName: String,
    empAge: Number,
    empAddress: String,
    regDate: {
        type: Date,
        default: Date,
    },
});

// creating collections / table using models

const EmpDetails = mongoose.model("EmpDetails", empSchema);

// create or insert a document

const createDocument = async() => {
    const data1 = new EmpDetails({
        id: 3,
        empName: "Prachi Sachin Said",
        empAge: 18,
        empAddress: "Solapur",
        regDate: new Date(),
    });

    const data2 = new EmpDetails({
        id: 4,
        empName: "Prachi Sachin Said",
        empAge: 18,
        empAddress: "Solapur",
        regDate: new Date(),
    });

    // save method return promise
    // const result = await data.save();
    // console.log(result);

    // insert many method
    const result = await EmpDetails.insertMany([data1, data2]);
    console.log(result);
};

// createDocument();

// read document

const getDataFromDB = async() => {
    const result = await EmpDetails.find({ id: 1 }, { _id: 0, empName: 1 });
    console.log(result);
};

// getDataFromDB();