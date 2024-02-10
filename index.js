import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');


client.connect()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

const database = client.db('Intern');
const collection = database.collection('registerform');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});  

var uploads = multer({ storage: storage });  

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {

    console.log("Backend Reached.. ");
    try {
        const data = await collection.find().toArray();
        res.json(data);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

// app.post("/register", uploads.single('document'), async (req, res) => {
//     console.log("/Register");
//     // console.log(req.file);
//     const { path } = req.file;
//     console.log(path);
//     // res.send(req.document);
//     // res.redirect(`http://localhost:3000/welcome?email=${email}`);
// });

app.post("/register", uploads.single('document'), async (req, res) => {
    console.log("/Register");


    const { username, qualification, email, location, moreinfo, experience, phonenumber } = req.body;
    
    const { path } = req.file;
    console.log(req.file);
    console.log(path);
    
    // console.log(req.body);
    try {
        console.log("register2");
        const result = await collection.updateOne(
            { email },
            {
                $set: {
                    username,
                    qualification,
                    email,
                    experience,
                    location,
                    moreinfo,
                    path,
                    phonenumber
                }
            });

        if (result !== null) {

            console.log("email found");
            

            console.log("Data...Store");
            res.redirect(`http://localhost:3000/welcome?${email}`);
            // console.log("Finally....");
        }
        else {
            console.log("email not foud");
            res.status(404).send({ message: "User not Found" });
            res.redirect("http://localhost:3000/");
        }
        
    } catch (err) {
        console.log("register3");
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, confirmpassword, mobilenumber } = req.body;

    if (password === confirmpassword) {
        try {

            const result = await collection.insertOne({
                email,
                password,
                mobilenumber
            });

            const { acknowledged } = result;

            if(acknowledged)
            {
                res.redirect("http://localhost:3000/login");
            }
            else{
                res.redirect("http://localhost:3000/");
            }

        } catch (error) {
            console.log("Error In : ",error);
        }
    }
    else {
        res.redirect("http://localhost:3000/");
        res.status(404).send({ message: "password and confirm password should be same" });
    }
});

app.get("/login", async (req, res) => {
    console.log(req.query);

    const { email, password } = req.query;

    console.log(email, password);

    try {
        const result = await collection.findOne({ email, password });
        console.log(result);
        
        if (result !== null) {
            
            console.log("email found");
            res.redirect(`http://localhost:3000/welcome?email=${email}`);
            // res.status(201).send({ userEmail: email });
        }
        else {
            console.log("email not foud");
            res.redirect("http://localhost:3000/");
        }
        res.redirect("http://localhost:3000/");
    } catch (error) {

    }
});

// app.get('/welcome/', async (req, res) => {
     
//     let email = req.params.email;

//     console.log(email);

// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`);
});