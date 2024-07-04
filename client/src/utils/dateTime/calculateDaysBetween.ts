export default function calculateDaysBetween(startDate: string, endDate: string): number {

  function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // month is 0-based in JS Date
  }

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  console.log('start:', start);
  console.log('end:', end);

  // Calculate the difference in time
  const timeDifference = end.getTime() - start.getTime();

  // Convert time difference from milliseconds to days
  const dayDifference = timeDifference / (1000 * 3600 * 24);

  console.log('dayDifference:', dayDifference);

  return dayDifference;
}
