require('dotenv').config(); 
const { MongoClient } = require('mongodb');

const state = {
    db: null
};


const url = process.env.MONGODB_URI || "mongodb+srv://irsgmlg:irsmglm8187@cluster0.8fku5.mongodb.net/library?retryWrites=true&w=majority"; 

const dbName = process.env.DB_NAME || 'library';

const client = new MongoClient(url);

const connect = async (cb) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        state.db = db;
        console.log('Connected to MongoDB successfully');
        return cb();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message); 
        return cb(err);
    }
};

const close = async () => {
    try { 
        await client.close();
        console.log('MongoDB connection closed');
    } catch (err) {
        console.error('Error closing MongoDB connection:', err.message);
    }
};


const get = () => state.db;

const isConnected = () => !!state.db;

module.exports = {
    connect,
    get,
    close,
    isConnected
};

