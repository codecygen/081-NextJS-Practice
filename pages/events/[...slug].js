import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const isInvalidFilter = isNaN(numYear) || isNaN(numMonth) || numYear > 2022
    || numYear < 2021 || numMonth < 1 || numMonth > 12
  ;

  if (isInvalidFilter) {
    return <p className='center'>Invalid filter. Please adjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='center'>No events found for the chosen filter!</p>
  }

  return (
    <div>FilteredEventsPage</div>
  )
}

export default FilteredEventsPage;