export const CART_UPDATED_EVENT = "cartUpdated";

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
};

export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!Array.isArray(cart)) {
    return [];
  }

  return cart.map((item) => {
    const quantity = Number(item.quantity);
    return {
      ...item,
      quantity: Number.isInteger(quantity) && quantity > 0 ? quantity : 1,
    };
  });
};

export const getCartItemCount = () => {
  return getCart().reduce((count, item) => count + item.quantity, 0);
};
