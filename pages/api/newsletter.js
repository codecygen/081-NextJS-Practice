import { MongoClient } from 'mongodb';

const connectDatabase = async () => {
    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;
    const client = await MongoClient.connect(mongoDBLink);

    return client;
};

const inserDocument = async (client, document) => {
    const db = client.db();
    await db.collection('newsletter').insertOne({ email: userEmail })
};

const newsletterHandler = async (req, res) => {
    let client;

    try {
        client = await connectDatabase();
    } catch (err) {
        res.status(500).json({  });
    }

    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address!' });
            return;
        }

        try {
            await inserDocument(client, { email: userEmail });
            client.close();
        } catch (err) {
            console.error(err);
        }

        client.close();
        res.status(201).json({ message: 'Email is inserted!' });
    }
};

export default newsletterHandler;