import { MongoClient } from "mongodb";

const commentHandler = async (req, res) => {
    const eventId = req.query.eventId;
    console.log(`This is ${eventId}`);

    const { email, name, comment } = req.body;

    const mongoDBLink = process.env.MONGODB_ATLAS_LINK;
    const client = await MongoClient.connect(mongoDBLink);
    const db = client.db();
    const commentsCollection = db.collection('comments');

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

        const result = await commentsCollection.insertOne(newComment);
        newComment.id = result.insertedId;
        
        res.status(201).json({ message: 'Comment added!', comment: newComment });
    }
    

    if (req.method === 'GET') {
        // sort _id: -1 will sort the id's in decending order
        const documents = await commentsCollection
            .find()
            .sort({ _id: -1 })
            .toArray()
        ;

        res.status(200).json({ comments: documents });
    }

    client.close();
};

export default commentHandler;