import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const salt = 10;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(cookieParser());

// Créer la connexion
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'inscription'
});

// Route d'inscription
app.post('/inscription', (req, res) => {
    const sql = "INSERT INTO login (cin, nom, prenom, address, email, tel, username, password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Erreur lors du hachage du mot de passe" });
        const values = [
            req.body.cin,
            req.body.nom,
            req.body.prenom,
            req.body.address,
            req.body.email,
            req.body.tel,
            req.body.username,
            hash
        ];
        db.query(sql, [values], (err, result) => {
            if (err) {
                console.error("Erreur de base de données :", err);
                return res.json({ Error: "Erreur lors de l'insertion dans la base de données" });
            }
            return res.json({ Status: "Success" });
        });
    });
});

app.listen(6061, () => {
    console.log("Server started on port 6061");
});