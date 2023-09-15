import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required:true,
  },
  movies:[
    {
      img:String,
      title:String
    }
  ]
});

const User = mongoose.models?.Guest || mongoose.model('Guest', userSchema);

export default User;
