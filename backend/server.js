const express = require('express')
require("dotenv").config()
const cors = require("cors")
const app = express()
const { connectDB } = require("./data/db")
const PORT = process.env.PORT || 3000
const userRoutes = require("./routes/user.routes")

app.use(cors())

// Middleware de Express
app.use(express.json());

// Ruta de info
app.get("/", (req, res) => {
  res.send("API Users funcionando.");
});

//Rutas a los enpoints de User
app.use("/api/users",userRoutes)

//Conexión a MongoDB
connectDB()
  .then(() => {
    console.log('✅ Base de Datos conectada')
    // Inicio del servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a la base de datos:', error.message)
    process.exit(1)
  });
