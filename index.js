import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const client = new MongoClient('mongodb://localhost:27017');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

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

app.post("/register", uploads.single('document'), async (req, res) => {
    console.log("/Register");


    const { username, email, mobilenumber, qualification, yearofpassing, currentlocation,
         preferedlocation, experience, orgname, projects, projectskills, projecturl, 
         otherskills, linkedin, personalsite, socialmedia, language, moreinfo } = req.body;
    
    // const { path } = req.file;
    console.log(req.file);
    // console.log(path);
    
    // console.log(req.body);
    try {
        console.log("register2");
        const result = await collection.updateOne(
            { email },
            {
                $set: {
                    username,
                    email,
                    mobilenumber,
                    currentlocation,
                    preferedlocation,
                    qualification,
                    yearofpassing,
                    experience,
                    orgname,
                    projects,
                    projectskills,
                    projecturl,
                    otherskills,
                    linkedin,
                    personalsite,
                    socialmedia,
                    language,
                    // document,
                    moreinfo
                    // path,
                }
            });

        if (result !== null) {
            console.log("email found");

            console.log("Data...Store");
            return res.status(201).send({ message: "User Found" });
            // res.redirect(`http://localhost:3000/welcome`);
            // console.log("Finally....");
        }
        else {
            console.log("email not foud");
            return res.status(404).send({ message: "User not Found" });
            // res.redirect("http://localhost:3000/");
        }
        
    } catch (err) {
        console.log("register3");
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/signup", async (req, res) => {

    console.log("signup");

    const { email, password, mobilenumber } = req.body;

    console.log(req.body);

        try {

            const result = await collection.insertOne({
                email,
                password,
                mobilenumber
            });

            const { acknowledged } = result;

            if(acknowledged)
            {
                res.status(201).send(email);
            }
            else{
                res.status(250).send({message:"Error Occured...Data Not Store"});
            }

        } 
        catch (error) {
            console.log("Error In : ",error);
        }
    
   
});

app.post("/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    console.log(email, password);

    try {
        const result = await collection.findOne({ email, password });
        console.log(result);
        
        if (result !== null) {
            
            console.log("email found");
            res.status(201).send({ userEmail: email });
            // res.redirect(`http://localhost:3000/welcome?email=${email}`);
        }
        else {
            console.log("email not foud");
            res.status(250).send({ userEmail: email });
            // res.redirect("http://localhost:3000/");
        }
        // res.redirect("http://localhost:3000/");
    } catch (error) {
        console.log(error);
    }
});

app.post('/welcome', async (req, res) => {
     
    // let {email, password} = req.body;
    console.log("Welcome");
    console.log(req.body);
    let { email } = req.body;

    try {
        const result = await collection.findOne({ email });
        // const {username, mobilenumber} = result;

        console.log(result); 
        res.json(result);
    } catch (error) {
        console.log(error)
    }

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`);
});