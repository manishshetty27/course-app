import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 8080
import userRoute from "./routes/userRoute.js"
import adminRoute from "./routes/adminRoute.js"
import { connectDB } from './db/db.js'
// import courseRoute from "./routes/courseRoute.js"

app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute) 
// app.use("/api/course", courseRoute)

connectDB()

app.listen(PORT, () => { 
        console.log("App running on port", PORT);
    }
) 

