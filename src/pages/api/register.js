import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch((err) => res.json({ msg: 'Connection Failed!!' }));
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
        await user.save();
        return res
          .status(200)
          .json({ user, msg: 'User Registered Successfully!!' });
      } else {
        return res.status(400).json({
          msg: 'Username already exists',
        });
      }
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occoured' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
