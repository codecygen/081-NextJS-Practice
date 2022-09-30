// Next-Adding-Head-Tag-To-Project-For-SEO
import Head from 'next/head';
import NewsletterRegistration from '../components/input/newsletter-registration';

import { getFeaturedEvents } from "../components/helpers/apiUtil";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
    return (
        <>
            {/* Next-Adding-Head-Tag-To-Project-For-SEO */}
            <Head>
                <title>Featured Events</title>
                <meta name="description" content="Add a new meetup here!" />
            </Head>
            <NewsletterRegistration />
            <EventList
                items={props.events}
            />
        </>
    );
};

export const getStaticProps = async () => {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        },

        revalidate: 1800
    };
};

export default HomePage;