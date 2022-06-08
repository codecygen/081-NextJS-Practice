// Next-Adding-Head-Tag-To-Project-For-SEO
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getAllEvents } from '../../components/helpers/apiUtil';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  return (
    <>
      {/* Next-Adding-Head-Tag-To-Project-For-SEO */}
      <Head>
        <title>All Events</title>
        <meta name="description" content="Add a new meetup here!" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList
        items={events}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events
    },

    revalidate: 60
  };
};

export default AllEventsPage;