import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//https://www.mongodb.com/cloud/atlas
 
//const CONNECTION_URL = 'mongodb+srv://vidhigupta:mongodb@cluster0.jcuofxx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL) .then(() => app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`)) ).catch((error) => console.log(`${error} did not connect`));

mongoose.Promise = global.Promise;
/*mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
   .catch((error)=> console.log(error.message));
*/
//mongoose.set('useFindAndModify',false);

//you are a good girl
