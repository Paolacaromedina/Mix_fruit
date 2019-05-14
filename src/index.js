const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Buenas tardes compañeros, los invitamos a programar");
});

app.get("/personas", (req, res) => {
  let personas = [
    {id_persona: 1064978065,  nombre_1_persona: "Juana",  nombre_2_persona: "De Dios",  Apellido_1_persona: "López", Apellido_2_persona:"mena", telefono: "3245678765", sexo: "f", id_paises:40, id_usuario: 980606 },
     {id_persona: 1064960405,  nombre_1_persona: "María",  nombre_2_persona: "Paola",  Apellido_1_persona: "Zabaleta", Apellido_2_persona:"Medina", telefono: "3054004352", sexo: "f", id_paises:50, id_usuario: 980607 }

  ];
  res.send(personas);
  });

app.get("/recetas", (req, res) => {
  let recetas = [
    { idrecetas: 0510, nombres_multiples: "Limonada cerezada", imagen: "<>" , id_usuario: 980606, id_frutas: 34545  },
    { idrecetas: 0511, nombres_multiples: " la pasión con mango", imagen: "<o>" , id_usuario: 980607, id_frutas: 34546  }

  ];


  res.send(recetas);
});


app.get("/comentarios", (req, res) => {
  let comentarios = [
    { id_comentario: 109,  posición_comentario: 1,   fecha: "11-05-2019",  id_recetas: 0510 , id_usuario:52,},
    { id_comentario: 1010,  posición_comentario: 1,   fecha: "11-05-2019",  id_recetas: 0510 , id_usuario:53,}

  ];
  res.send(comentarios);
  });





app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id_usuario: 52, apodo: "", id_recetas: 0510,  },
    { id_usuario: 53, apodo: "Limonada cerezada", id_recetas:0511 , }

  ];


  res.send(usuarios);
});

app.get("/frutas", (req, res) => {
  let frutas = [
    { id_frutas: 34,  nombre_frutas: "naranja",   imagen_frutas: "0I0",  id_recetas: 0510 , },
    { id_frutas: 33,  nombre_frutas: "pera",   imagen_frutas: "0III0",  id_recetas: 0511 , }

  ];
  res.send(frutas);
  });

app.get("/paises", (req, res) => {
  let paises = [
    { id_paises: 40,  nombre_pais: "chile",  ubicacion: "sur",  continente: "americano" , },
    { id_paises: 50,  nombre_pais: "colombiano",  ubicacion: "suramerica",  continente: "americano ", }
  ];
  res.send(paises);
  });

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
