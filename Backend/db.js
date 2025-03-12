import mongoose from 'mongoose'


const connecttomongo = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/kavy')
    .then(() => console.log('Connected!'));
}

export default connecttomongo