import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch((err) => res.json({ error: 'Connection Failed!!' }));
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      let user = await User.findOne({ username });
      if (!user) {
        user = new User({
          username,
          password,
          movies: []
        });
        console.log(user);
        await user.save();
        return res
          .status(200)
          .json({ user, msg: 'User Registered Successfully!!' });
      } else {
        return res.status(400).json({
          error: true,
          msg: 'Username already exists',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'An Internal Server Error Occoured' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
