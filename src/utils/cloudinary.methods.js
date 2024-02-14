import { env } from "../../config/variables.env.js";
import cloudinaryConnection from "./cloudinary.js"

/************* upload *************/
export const uploadFile = async (path, folder) => {
  try {
    const { secure_url, public_id } = await cloudinaryConnection().uploader.upload(path, { folder })
    return { secure_url, public_id }

  } catch (error) {
    console.log('Error by cloudinary : ' + error);
  }
}

/************* uploadMany *************/
export const uploadManyFiles = async (files) => { // files = [path,path2]
  try {
    let filesIds = []
    let image = {};
    const folder = env.FOLDER_NAME + '/users'

    for (const path of files) {
      image = await uploadFile(path, folder)
      filesIds.push(image)
    }
    return filesIds

  } catch (error) {
    console.log('Error by cloudinary : ' + error);
  }

}
/************* delete *************/
export const deleteFile = async (public_id) => {
  try {
    await cloudinaryConnection().uploader.destroy(public_id)

  } catch (error) {
    console.log('Error by cloudinary : ' + error);
  }

}

/************* update *************/
export const updateFile = async (path, public_id) => {
  try {
    const { secure_url } = await cloudinaryConnection().uploader.upload(path, { public_id })
    return { secure_url };

  } catch (error) {
    console.log('Error by cloudinary : ' + error);
  }
}
