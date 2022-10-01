import { MongoClient } from 'mongodb';

const newsletterHandler = (req, res) => {
    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;

    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address!' });
            return;
        }

        MongoClient.connect(mongoDBLink).then(client => {
            const db = client.db();
            db.collection('newsletter');
        });
        res.status(201).json({ message: 'Signed up!' })
    }
};

export default newsletterHandler;