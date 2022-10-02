// Next-API-Routes
import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;
    const client = await MongoClient.connect(mongoDBLink);
    return client;
};

export const insertDocument = async (client, collection, document) => {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);

    return result;
};

export const getAllDocuments = async (client, collection, sort) => {
    const db = client.db();

    // sorting, if (sort({_id: -1})), it will sort the id's in decending order
    const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray()
    ;

    return documents;
};