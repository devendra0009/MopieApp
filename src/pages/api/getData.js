import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch((err) => res.json({ msg: 'Connection Failed!!' }));
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      let user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found!' });
      }
      return res.status(200).json({ user, msg:'Fetched Collection Successfully!' });
    } catch (error) {
      res.status(500).json({ msg: 'An Internal Server Error Occurred!' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
