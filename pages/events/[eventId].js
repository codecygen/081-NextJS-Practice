import { getEventById, getAllEvents } from '../../components/helpers/apiUtil';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import ErrorAlert from '../../components/ui/ErrorAlert';

const EventDetailPage = (props) => {

  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
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
  const { params } = context;

  const eventId = params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },

    revalidate: 30
  };
};

export const getStaticPaths = async () => {

  const events = await getAllEvents();

  const ids = events.map(event => event.id);

  const pathsWithParams = ids.map(id => ({ params: { eventId: id }}));

  return {
    paths: pathsWithParams,
    fallback: false
  };
};

export default EventDetailPage;
// console.log(featuredEvents);