const groupBy = (items, key) =>  items.reduce((acc, item) => ({
  ...acc,
  [item[key]]: [
    ...(acc[item[key]] || []),
    item
  ]
}), []);

export default groupBy;