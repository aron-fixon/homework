const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { db_connection } = require("./src/models/db");
const indexRouter = require("./src/routes/index");
require("dotenv").config;

//MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  // Dominio que tengan acceso (ej. 'http://example.com')
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Metodos de solicitud que deseas permitir
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );

  // Encabezados que permites (ej. 'X-Requested-With,content-type')
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

//ROUTES
app.get("/", (req, res) => {
  return res.json({ msg: "Hello, world!" });
});
app.use("/homework", indexRouter);

//SERVER
db_connection();
const port = 3000; /*process.env.PORT*/
app.set(3000);
const server = http.createServer(app);
server.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*
////ERROR HANDLER ----> EVITANDO EL TRY/CATCH
/////EJEMPLO DE UN ERROR
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
//////EJEMPLO DE COMO FUNCIONARIA EL MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: "error.message",
      code: "error.code",
    },
  });
});

const middleware1 = (req, res, next) => {
  //VALIDACION 1
};
const middleware2 = (req, res, next) => {
  //VALIDACION 2
};
*/
