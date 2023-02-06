import { VercelRequest, VercelResponse } from "@vercel/node"
import axios from 'axios';
import { MongoClient, Db } from "mongodb";

let cachedDB: Db | null = null;

// Create a new MongoClient
async function connectToDatabase() {
    if (cachedDB) {
        return cachedDB;
    }

    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();

    const db = client.db("verbs")
    cachedDB = db;
    
    return db;
}


export default async (request: VercelRequest, response: VercelResponse) => {

    const db = await connectToDatabase();
    const collection = db.collection('verbslist');
    
    const cursor = collection.aggregate([
        { $sample: { size: 1 } }
    ]);

    const verb = await cursor.next();

    return response.json(verb);

}