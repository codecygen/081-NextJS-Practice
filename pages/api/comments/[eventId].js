const commentHandler = (req, res) => {
    const eventId = req.query.eventId;

    const { email, name, comment } = req.body;

    if (req.method === 'POST') {
        const invalidEmail = !email.includes('@');
        const invalidName = !name || name.trim() === '';
        const invalidComment = !comment || comment.trim() === '';

        if (invalidEmail || invalidName || invalidComment) {
            res.status(422).json({ message: 'Invalid input!' });
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            comment
        };
        
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
};

export default commentHandler;