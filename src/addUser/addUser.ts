import express from 'express';
import connectDB from '../db/connect';
import { userData } from '../models/user';


const app = express();
app.use(express.json());

connectDB();

app.post('/add-user', async (req, res) => {
  try {
    const { username, age, email } = req.body;

    const userEmail = await userData.find
    if(userEmail.arguments.email ==="vikas@gmail.com"){
    const newUser = new userData({ username, age, email });
    await newUser.save();
    res.status(201).json({ message: 'User saved!', user: newUser });
    }
    else{
      res.status(400).json({ message: 'User already saved!'});
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get('/users', async (req, res) => {
  const users = await userData.find();
  const valuesArray = Object.values(users);
  res.json({allusers: valuesArray});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
