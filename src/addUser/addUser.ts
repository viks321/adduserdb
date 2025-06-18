import express from 'express';
import connectDB from '../db/connect';
import { userData } from '../models/user';


const app = express();
app.use(express.json());

connectDB();

app.post('/add-user', async (req, res) => {
  try {
    const { username, age, email } = req.body;

    const newUser = new userData({ username, age, email });
    await newUser.save();
    console.log(newUser)
    const valuesArray = Object.values(newUser);

    res.status(201).json({ message: 'User saved!', user: valuesArray });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get('/users', async (req, res) => {
  const users = await userData.find();
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
