import mongoose from 'mongoose'
export const connectDB = ()=> { 
     mongoose.connect(process.env.MONGO_URL, {dbName:"MyCourseApp"}) 
    .then(
        () => console.log("DB connected succesfully"),
    )
    .catch((err) => {
        console.log("Something went wrong", err)
    })

}