import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const salt = 10;
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(cookieParser());


app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true}));

app.use(express.json());

// Créer la connexion
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: 'inscription'
});
if(db){
    console.log('cennexion reussie')
}
// Route d'inscription
app.post('/inscription', (req, res) => {
    const sql = "INSERT INTO client (cin, nom, prenom, address, email, tel, login, password) VALUES (?,?,?,?,?,?,?,?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Erreur lors du hachage du mot de passe" });
        const values = [
            req.body.cin,
            req.body.nom,
            req.body.prenom,
            req.body.address,
            req.body.email,
            req.body.tel,
            req.body.login,
            hash
        ];
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error("Erreur de base de données :", err);
                return res.json({ Error: "Erreur lors de l'insertion dans la base de données" });
            }
            return res.json({ Status: "Success" });
        });
    });
});

// Route de login
app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM client WHERE email = ?';
  db.query(sql, [req.body.email], (err, data) => {
      if (err) return res.json({ Error: "Login error in server" });
      if (data.length > 0) {
          bcrypt.compare(req.body.password, data[0].password, (err, response) => {
              if (err) return res.json({ Error: "Password compare error" });
              if (response) {
                  return res.json({ Status: "Success" });
              } else {
                  return res.json({ Error: "Password not matched" });
              }
          });
      } else {
          return res.json({ Error: "No email existed." });
      }
  });
});

//Route d'Ajout
app.post('/addvoiture',(req, res)=>{
    const sql ="INSERT INTO voiture (matr, marque, modele, couleur, nbplaces, transmission,img) VALUES(?,?,?,?,?,?,?)";
    const values =[
        req.body.matr,
        req.body.marque,
        req.body.modele,
        req.body.couleur,
        req.body.nbplaces,
        req.body.transmission,
        req.body.img
    ];
    db.query(sql, values, (err, result)=>{
        if(err) {
            console.error("Erreur lors de l'insertion du voiture dans la base de donnees :",err);
            return res.json({Error:"Erreur lors de l'insertion dans la base de donnees"});
        }
    return res.json({Status:"Voiture ajoutée avec succès"});
  });
});
// affichage
app.get('/voitures', (req, res) => {
    const query = 'SELECT * FROM voiture';
    db.query(query, (err, results) => {
      if (err) return res.json({ Status: 'Error', Error: err });
      return res.json({ Status: 'Success', Data: results });
    });
  });
  

app.listen(6061, () => {
    console.log("Server started on port 6061");
}); 