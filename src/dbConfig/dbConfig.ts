import { MongoClient } from "mongodb";

const {
    MongoUri
} = process.env;


if(!MongoUri) {
    console.log('Please Provide MongoUri...');
}

const client  = new MongoClient(MongoUri!);

export const db = client.db('FullStackAuthApp');
