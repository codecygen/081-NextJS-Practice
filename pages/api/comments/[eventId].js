// Next-API-Routes
import { connectDatabase, getAllDocuments, insertDocument } from "../../../components/helpers/db-util";

const commentHandler = async (req, res) => {
    const eventId = req.query.eventId;

    const { email, name, comment } = req.body;

    let client;

    try {
        client = await connectDatabase();
    } catch (err) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        // Return is put here to prevent code to continue on trying to insert document
        // if this try catch section fails.
        return;
    }

    if (req.method === 'POST') {
        const invalidEmail = !email.includes('@');
        const invalidName = !name || name.trim() === '';
        const invalidComment = !comment || comment.trim() === '';

        if (invalidEmail || invalidName || invalidComment) {
            res.status(422).json({ message: 'Invalid input!' });
            client.close();
            return;
        }

        const newComment = {
            email,
            name,
            comment,
            eventId
        };

        let result;

        try {
            result = await insertDocument(client, 'comments', newComment);
            newComment._id = result.insertedId;
            res.status(201).json({ message: 'Comment added!', comment: newComment });
        } catch (err) {
            res.status(500).json({ message: 'Inserting comment failed!' });
        }
    }


    if (req.method === 'GET') {
        try {
            const documents = await getAllDocuments(client, 'comments', { _id: -1 })
            res.status(200).json({ comments: documents });
        } catch (err) {
            res.status(500).json({ message: 'Getting comments failed!' });
        }
    }

    client.close();
};

export default commentHandler;