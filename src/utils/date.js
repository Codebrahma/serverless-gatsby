const formatDate = (input, format) => {
  const object = new Date(input)
  const date = `00${object.getDate().toString()}`.slice(-2)
  const month = `00${(object.getMonth() + 1).toString()}`.slice(-2)
  const fullYear = object.getFullYear()
  const year = `00${(object.getFullYear() % 100).toString()}`.slice(-2)

  return format
    .replace('dd', date)
    .replace('mm', month)
    .replace('yyyy', fullYear)
    .replace('yy', year)
}

export {
  formatDate
}
