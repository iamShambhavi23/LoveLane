const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main().then(()=>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/GastronomeHub');
  
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner : "6691894591b9d3030918fb57"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized.");
};

initDB();