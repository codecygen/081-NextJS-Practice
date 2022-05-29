import EventItem from "./EventItem";

const EventList = (props) => {
    
    const eventList = props.items.map(event => (
        <EventItem
            key={event.key}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />
    ));

    console.log(props.items);

    return (
        <ul>
            {eventList}
        </ul>
    );
};

export default EventList;