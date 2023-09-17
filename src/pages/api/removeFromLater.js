import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch(() => res.json({ msg: 'Connection Failed!!' }));
  if (req.method === 'POST') {
    const { username, movieId } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { movies: { _id: movieId } } }, 
        { new: true }
      );

      if (!user) {
        return res.status(400).json({ msg: 'User not found!' });
      }

      return res.status(200).json({ msg: 'Movie removed from Collections!' });
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occurred!' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
