import { MongoClient } from "mongodb";

const commentHandler = async (req, res) => {
    const eventId = req.query.eventId;
    console.log(`This is ${eventId}`);

    const { email, name, comment } = req.body;

    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;
    const client = await MongoClient.connect(mongoDBLink);
    const db = client.db();

    if (req.method === 'POST') {
        const invalidEmail = !email.includes('@');
        const invalidName = !name || name.trim() === '';
        const invalidComment = !comment || comment.trim() === '';

        if (invalidEmail || invalidName || invalidComment) {
            res.status(422).json({ message: 'Invalid input!' });
            return;
        }

        const newComment = {
            email,
            name,
            comment,
            eventId
        };

        const commentsCollection = db.collection('comments');
        const result = await commentsCollection.insertOne(newComment);
        newComment.id = result.insertedId;
        
        res.status(201).json({ message: 'Comment added!', comment: newComment });
    }
    

    if (req.method === 'GET') {
        console.log(process.env.MONGODB_ATLAS_LINK);

        const dummyList = [
            { id: 'c1', name: 'Aras', comment: 'The first comment.' },
            { id: 'c2', name: 'Nafiz', comment: 'The second comment.' }
        ]

        res.status(200).json({ comments: dummyList });
    }

    client.close();
};

export default commentHandler;