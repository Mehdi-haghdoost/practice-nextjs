const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log(mongoose.connections[0].readyState);
            return false;
        }
        await mongoose.connect('mongodb://127.0.0.1:27017/next-db');
        console.log('connected to db successfully :))');
    } catch (err) {
        console.log(err);
    }
}

export default connectToDB ;
