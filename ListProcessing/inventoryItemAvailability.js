function transactionsFor(inventoryItem, list) {
  return list.filter(({id}) => id === inventoryItem);
}
function isItemAvailable(inventoryItem, transactions) {
  let items = transactionsFor(inventoryItem, transactions)
  let total = 0;
  items.forEach(item => {
    total = item.movement === 'out' ? -item.quantity : item.quantity;
  });

  return total > 0
}
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true