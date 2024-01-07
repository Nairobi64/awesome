const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/plats', (req, res, next) => {
    const Plats = [
      
        {
            id:1,
            Title :"Petit food",
            Description : "df;sds;rhgwegjvnjvjvugwgfnvsfvv mjbjrewejrn;es;kvskvfkdvdnvsfnjsfnvfsdvngergvnsdvjnjng;jgn;dgnsdfn",
            Image : "https://assets.afcdn.com/recipe/20230517/142899_w1024h1024c1cx2800cy1983cxt0cyt0cxb5616cyb3743.webp",
            Lieu : "Dakar"
    
          },
          {
            id:2,
            Title :"Chez vero",
            Description : "Feuille de manioc",
            Image : "https://assets.afcdn.com/recipe/20230517/142899_w1024h1024c1cx2800cy1983cxt0cyt0cxb5616cyb3743.webp",
            Lieu : "Dakar"
    
          },
          {
            id:3,
            Title :"Salade Bolonaise",
            Description : "Tres bon plat",
            Image : "https://assets.afcdn.com/recipe/20230517/142899_w1024h1024c1cx2800cy1983cxt0cyt0cxb5616cyb3743.webp",
            Lieu : "Dakar"
    
          },
    ];
    res.status(200).json(Plats);
  });


module.exports = app;