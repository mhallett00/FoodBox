export function priceSubtotal(items) { 
  const itemPriceArray = [];
  if (items.length === 0) {
    return 0;
  } else {
    items.forEach(ListItem => itemPriceArray.push(ListItem.price * ListItem.order_quantity))
    const reducer = (a, b) => a + b;
    return itemPriceArray.reduce(reducer);
  }
}

export function GST(subtotal) {
  return ((subtotal * 0.05)/100).toFixed(2);
}

export function QST(subtotal) {
  return ((subtotal * 0.0995)/100).toFixed(2);
}

export function deliveryFee() {
  return (2)
}

export function totalPrice(subtotal) {
  let total = (subtotal + (subtotal * 0.1495)).toFixed(2);
  return total;
}