import connecttomongo from './db.js';
import express from 'express';
import auth from './routes/auth.js'
import cors from "cors";
import guide from './routes/guide.js';


connecttomongo();

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/auth', auth);
app.use('/api/auth', guide);

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`myinfo successfully running on port 3000`);
});
