const DateFormat: (date: string | Date) => string = (date: string | Date) => {

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

  return formattedDate;
};

export default DateFormat;