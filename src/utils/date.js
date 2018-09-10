const formatDate = (input, format) => {
  const object = new Date(input);
  const date = `00${object.getDay().toString()}`.slice(-2);
  const month = `00${object.getMonth().toString()}`.slice(-2);
  const fullYear = object.getFullYear();
  const year = `00${(object.getFullYear() % 100).toString()}`.slice(-2);

  return format
    .replace('dd', date)
    .replace('mm', month)
    .replace('yyyy', fullYear)
    .replace('yy', year);
}

export {
  formatDate
}
