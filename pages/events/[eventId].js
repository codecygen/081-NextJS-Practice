import { getEventById, getFeaturedEvents } from '../../components/helpers/apiUtil';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import ErrorAlert from '../../components/ui/ErrorAlert';

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

  const featuredEvents = await getFeaturedEvents();

  const pathsWithParams = featuredEvents.map(featuredEvent => ({ params: { eventId: featuredEvent.id }}));

  return {
    paths: pathsWithParams,
    fallback: "blocking"
  };
};

export default EventDetailPage;