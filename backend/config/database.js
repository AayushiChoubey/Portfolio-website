import mongoose from "mongoose";
mongoose.set('strictQuery', true);



export const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URI).then((c)=>{
        console.log(`MongoDb connected to: ${c.connection.host}`);

}) 
.catch((e)=>{
    console.log(e);
});
};


