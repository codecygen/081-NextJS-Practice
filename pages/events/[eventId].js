import { getEventById, getFeaturedEvents } from '../../components/helpers/apiUtil';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = (props) => {

  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },

    revalidate: 30
  };
};

export const getStaticPaths = async () => {

  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { eventId: event.id }}));

  return {
    paths: paths,
    fallback: 'blocking'
  };
};

export default EventDetailPage;