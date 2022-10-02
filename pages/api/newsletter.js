// Next-API-Routes
import { connectDatabase, insertDocument, getAllDocuments } from '../../components/helpers/db-util';

const newsletterHandler = async (req, res) => {
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
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address!' });
            return;
        }

        try {
            await insertDocument(client, 'newsletter', { email: userEmail });
            // Return is put here to prevent code to continue if inserting data fails.
            client.close();
        } catch (err) {
            res.status(500).json({ message: 'Inserting data failed!' });
            return;
        }

        client.close();
        res.status(201).json({ message: 'Email is inserted!' });
    }
};

export default newsletterHandler;