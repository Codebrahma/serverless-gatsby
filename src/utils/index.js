const formatDate = (input, format) => {
  const object = new Date(input);
  const date = object.getDay().toString().padStart(2, '0');
  const month = object.getMonth().toString().padStart(2, '0');
  const fullYear = object.getFullYear();
  const year = (object.getFullYear() % 100).toString().padStart(2, '0');

  return format
    .replace('dd', date)
    .replace('mm', month)
    .replace('yyyy', fullYear)
    .replace('yy', year);
}

export {
  formatDate
}
