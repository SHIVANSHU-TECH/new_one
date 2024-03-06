const mongoose =require("mongoose");
const DBconnect = async()=>{
    try {
      await mongoose.connect(`${process.env.DB}`);
     console.log(`\n MongoDB connected !!`);
    } catch (error) {
          // Handling errors during the database connection
          console.log("Error while connecting to database : " + error);
          process.exit(1);
    }

}

    




module.exports = DBconnect; 
