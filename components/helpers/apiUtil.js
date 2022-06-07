export const getAllEvents = async () => {
    const fetchLink = 'https://food-order-app-database-fa642-default-rtdb.firebaseio.com/events.json';
    
    try {

        const res = await fetch(fetchLink);
        if (!res.ok) {
            throw new Error(`Something went wrong. HTTP status: ${response.status}`);
        }

        const data = await res.json();

        const events = [];
        for (const key in data) {
            events.push({
                id: key,
                ...data[key]
            });
        }

        return events;
    } catch (err) {
        console.log(err.message);
    }
};

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
};