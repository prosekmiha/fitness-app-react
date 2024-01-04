import express, { query, response } from 'express';
import dotenv from "dotenv";
import mysql from 'mysql2'
import cors from 'cors';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';


const saltRounds = 10;

dotenv.config();

const app = express();


app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
};
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "nekineki",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expire: 60 * 60 * 3,
    },
}));

const db = mysql.createConnection(process.env.DATABASE_URL)

app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }

        db.query("INSERT INTO Users (`Username`, `Email`, `Password`) VALUES (?,?,?)", 
            [username, email, hash], 
            (err, result) => {
                console.log(err)
            }
        );
    })
});

app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM Users WHERE Username = ?;", 
        username, 
        (err, result) => {
            if (err){
                res.send({err: err})
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].Password, (err, response) => {
                    if(response) {
                        req.session.user = result;
                        console.log(req.session.user);
                        res.send(result);
                    } else {
                        res.send({ message: "Wrong username or password" });

                    }
                });
            } else {
                res.send({message: "User doesn't exist"})
            }

        }
    );
});

app.get("/logout", (req, res) => {
    console.log("logout ok")
    res.clearCookie('userId');
    return res.json({Status: "Success"})
    
});

app.post('/insertfavourites', (req, res) => {
    const favourites = req.body.favourites;
    const username = req.body.username;
    
    db.query("UPDATE Users SET Favourites = (?) WHERE Username = (?)", 
        [JSON.stringify(favourites), username], 
        (err, result) => {
            console.log(err)
        }
    );
});

app.post('/login?', (req, res) => {
    const username = req.body.username;


    db.query("SELECT Favourites FROM Users WHERE Username = ?;", 
        username, 
        (err, result) => {
            console.log(err)
        }
    );
});

app.listen(3001, () => {
    console.log("Running");
})
