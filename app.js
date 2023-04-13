import express from 'express';
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose"; 

const CONNECTION_STRING = 'mongodb+srv://mengruwangcolab:12345abcde@cluster0.wte6vl5.mongodb.net/tuiter?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB database!'))
  .catch(err => console.error('Error connecting to MongoDB database:', err));


const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
