import { v2 as cloudinary } from 'cloudinary';
import { env } from '../../config/variables.env.js';


const cloudinaryConnection = () => {
  cloudinary.config({
    cloud_name: env.CLOUD_NAME,
    api_key: env.API_KEY,
    api_secret: env.API_SECRET
  });
  return cloudinary;
}


export default cloudinaryConnection;