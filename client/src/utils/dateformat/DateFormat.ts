const DateFormat: (date: Date) => string = (date: Date) => {

  // Format options
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date
  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

  return formattedDate;
};

export default DateFormat;