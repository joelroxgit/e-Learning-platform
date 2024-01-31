import express from 'express'
import { config } from 'dotenv'

export const app = express()
config()
const port = process.env.PORT

app.listen(port, () => {
  console.log("server started at ", port)
})