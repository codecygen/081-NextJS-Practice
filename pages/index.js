// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../components/helpers/apiUtil";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
    // const featuredEvents = getFeaturedEvents();

    return (
        <EventList 
            items={props.events}
        />
    );
};

export const getStaticProps = async () => {
    const featuredEvents = await getFeaturedEvents();
    console.log(featuredEvents);

    return {
        props: {
            events: featuredEvents
        }
    };
};

export default HomePage;