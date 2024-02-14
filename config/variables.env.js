import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

export const env = {
  PORT: process.env.PORT,

  DB_CONNECTION: process.env.DB_CONNECTION,

  API_SECRET: process.env.API_SECRET,
  API_KEY: process.env.API_KEY,
  CLOUD_NAME: process.env.CLOUD_NAME,
  FOLDER_NAME: process.env.FOLDER_NAME,
}