import { getFeaturedEvents } from "../components/helpers/apiUtil";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
    return (
        <EventList 
            items={props.events}
        />
    );
};

export const getStaticProps = async () => {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        }
    };
};

export default HomePage;