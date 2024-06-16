const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser');




app.use(cors({
    origin: 'http://localhost:3001', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 'Authorization', 'X-Requested-With', 'Device-Remember-Token', 
        'Access-Control-Allow-Origin', 'Origin', 'Accept', 'userid' 
    ],
    exposedHeaders: ['X-Photo-Title', 'X-Photo-Description']
}));

app.use(express.json());
app.use(bodyParser.json()); 



const uri = "mongodb://localhost:27017/m%40ngo";

mongoose.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.error('Échec de la connexion à MongoDB', err));


const langStatSchema = new mongoose.Schema({
    langue : String,
});

const Lang = mongoose.model('Lang', langStatSchema);


app.post('/api/postLang', async (req, res) => {
    const { lang } = req.body;
    console.log(lang);

    if (!lang) {
        return res.status(400).send({ error: "La réception du choix de la langue a échoué" });
    }

    try {
        const newLang = new Lang({
            ChoixLang: lang,
        });

        await newLang.save();
        res.status(200).send({ lang }); // Envoyer seulement lang ici
    } catch (error) {
        res.status(400).send({ error: "Impossible d'introduire le choix de la langue dans la base de données" });
    }
});





  const port = 3000;
  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });