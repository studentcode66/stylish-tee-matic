
import { Product } from "@/types/product";

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existingItem = cart.find(
    (i) => 
      i.id === item.id && 
      i.selectedSize === item.selectedSize && 
      i.selectedColor === item.selectedColor
  );

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function updateCartItem(itemId: number, updates: Partial<CartItem>) {
  const cart = getCart();
  const itemIndex = cart.findIndex((i) => i.id === itemId);
  if (itemIndex > -1) {
    cart[itemIndex] = { ...cart[itemIndex], ...updates };
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

export function removeFromCart(itemId: number) {
  const cart = getCart();
  const updatedCart = cart.filter((i) => i.id === itemId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

export function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
