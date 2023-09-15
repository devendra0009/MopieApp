import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch(() => res.json({ error: 'Connection Failed!!' }));
  if (req.method === 'POST') {
    const { username, movies } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { movies: movies } }, // Use $push and $each to add multiple items to an array
        { new: true }
      );

      if (!user) {
        return res.status(400).json({ msg: 'User not found' });
      }

      return res.status(200).json({ msg: 'Tasks added successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
