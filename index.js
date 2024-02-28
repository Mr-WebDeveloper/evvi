import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import nodemailer from 'nodemailer'
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
        callback(null, './uploads');
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

    try {
        console.log("/...file");

        console.log(req.file);
        const { path } = req.file;

        res.status(300).send("File uploaded successfully.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }


    // if (req.file) {
    //     console.log("File details:", req.file);
    //     // You can access specific details like req.file.filename, req.file.size, req.file.mimetype, etc.
    // } else {
    //     console.log("No file uploaded");
    // }
    
    const { username, email, mobilenumber, qualification, yearofpassing, currentlocation,
        preferedlocation, experience, orgname, designation, cmpexperience, projects, projectskills, projecturl, 
        otherskills, linkedin, personalsite, socialmedia, language, moreinfo } = req.body;
       
        console.log("No file uploaded", req.body);
        // console.log(req);
        
    const mailOptions = {
        from: "mudalamrajarajacholan1@gmail.com",   
        to: "mudalamrajarajacholan1@gmail.com",
        subject: "New User Register in Evvi Elect",
        text: `
            User Name: ${username},
            Email ID: ${email},
            Mobile number: ${mobilenumber},
            Qualification: ${qualification},
            Year Of Passing: ${yearofpassing},
            Current Location: ${currentlocation},
            Preferred Location: ${preferedlocation},
            Experience: ${experience},
            Last Experience In: ${orgname},
            Designation: ${designation},
            Work Experience: ${cmpexperience},
            Completed Projects: ${projects},
            Project Skills: ${projectskills},
            Project URL: ${projecturl},
            Additional Skills: ${otherskills}
            LinkedIn URL: ${linkedin}
            Personal Website: ${personalsite}
            Socialmedia URL: ${socialmedia}
            Communication Language: ${language}
            Additional Information: ${moreinfo}
            `,

        // attachments: [{
        //     filename: fileName,
        //     path: path,
        //     contentType: 'application'
        // }],
    };

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "mudalamrajarajacholan1@gmail.com",
            pass: "zfab jgqk triv yhud",
        },
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
    });

    
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
                    designation,
                    cmpexperience,
                    projects,
                    projectskills,
                    projecturl,
                    otherskills,
                    linkedin,
                    personalsite,
                    socialmedia,
                    language,
                    // document,
                    moreinfo,
                    path
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