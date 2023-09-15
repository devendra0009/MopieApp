import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB().catch((err) => res.json({ error: 'Connection Failed!!' }));
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
    //   console.log(id);
      let user = await User.findById(id);
        // console.log(user);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      return res.status(200).json({ user });
    } catch (error) {
    //   console.error(error);
      res.status(500).json({ msg: 'An Internal Server Error Occurred' });
    }
  } else {
    res.status(405).json({ msg: 'Method Not Allowed' });
  }
}
