import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../components/helpers/apiUtil';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import ErrorAlert from '../../components/ui/ErrorAlert';
import Button from '../../components/ui/Button';

const FilteredEventsPage = (props) => {
  const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className='center'>Loading...</p>
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // const isInvalidFilter = isNaN(numYear) || isNaN(numMonth) || numYear > 2022
  //   || numYear < 2021 || numMonth < 1 || numMonth > 12
  // ;

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <p className='center'>
          <Button link='/events'>Show All Events</Button>
        </p>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <p className='center'>
          <Button link='/events'>Show All Events</Button>
        </p>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const filterData = context.params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const isInvalidFilter = isNaN(numYear) || isNaN(numMonth) || numYear > 2022
    || numYear < 2021 || numMonth < 1 || numMonth > 12
  ;

  if (isInvalidFilter) {
    return {
      props: { hasError: true }
      // notFound: true,
      // redirect: {
      //   destination: '/no-data',
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  };
};

export default FilteredEventsPage;