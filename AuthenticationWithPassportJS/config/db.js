const mongoose = require('mongoose');

async function connectDB(){

    try{
        const conn = await mongoose.connect(process.env.DB_String);
        console.log(conn.connection.host);
        console.log('database connected succesfully');
        mongoose.connection
        .on("open", () => console.log("The goose is open"))
        .on("close", () => console.log("The goose is closed"))
        .on("error", (error) => {
            console.log(error);
            process.exit();
        })
    }catch(err){
        console.error(`err Occured while connecting to the database : ` , err);
        process.exit(1);
    }

}

module.exports = connectDB;