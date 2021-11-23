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
        unique: true,
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
        id: 3,
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

createDocument();

// read document

const getDataFromDB = async() => {
    const result = await EmpDetails.find({ id: 1 }, { _id: 0, empName: 1 });
    console.log(result);
};

// in operator
const getDataFromDbIN = async() => {
    const result = await EmpDetails.find({
        empAddress: { $in: ["Mumbai", "Solapur"] },
    });
    console.log(result);
};

// not in
const getDataFromDbNotIN = async() => {
    const result = await EmpDetails.find({
        empAddress: { $nin: ["Mumbai", "Solapur"] },
    });
    console.log(result);
};

const getDataFromDbOR = async() => {
    const result = await EmpDetails.find({
        $or: [{ empAddress: "Solapur" }, { empAddress: "Pune" }],
    });
    console.log(result);
};

const getDataFromDbAND = async() => {
    const result = await EmpDetails.find({
        $and: [{ empAddress: "Solapur" }, { empAge: 19 }],
    });
    console.log(result);
};

const getDataFromDbNOR = async() => {
    const result = await EmpDetails.find({
        $nor: [{ empAddress: "Pune" }, { empAge: 19 }],
    });
    console.log(result);
};

const getDataFromDbNOT = async() => {
    const result = await EmpDetails.find({ id: { $not: { $lte: 2 } } });
    console.log(result);
};

const getDataFromDbSORT = async() => {
    const result = await EmpDetails.find().sort({ id: -1 });
    console.log(result);
};

// getDataFromDbSORT();

// Update document

const updateData = async(id) => {
    try {
        const result = await EmpDetails.updateOne({ id }, {
            $set: {
                empAge: 20,
            },
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

// updateData(3);

// delete documents

const deleteDocument = async(id) => {
    try {
        const result = await EmpDetails.deleteOne({ id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

// deleteDocument(4);