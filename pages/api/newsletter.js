import { MongoClient } from 'mongodb';

const newsletterHandler = async (req, res) => {
    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;

    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address!' });
            return;
        }

        const client = await MongoClient.connect(mongoDBLink);

        const db = client.db();
        await db.collection('newsletter').insertOne({ email: userEmail });
        client.close();
        res.status(201).json({ message: 'Email is inserted!' });
    }
};

export default newsletterHandler;