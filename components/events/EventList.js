import EventItem from "./EventItem";

import classes from './EventList.module.css';

const EventList = (props) => {
    
    const eventList = props.items.map(event => (
        <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />
    ));

    return (
        <ul className={classes.list}>
            {eventList}
        </ul>
    );
};

export default EventList;