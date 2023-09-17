import connectDB from '../../../lib/db';
import User from '../../../models/User';
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  await connectDB().catch((err) => res.json({ msg: 'Connection Failed!!' }));

  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ msg: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ msg: 'Invalid Credentials' });
      }
      const userWithoutPassword = {
        _id: user._id,
        username: user.username,
      };

      return res.status(200).json({ msg: 'Login successful', userWithoutPassword });
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
