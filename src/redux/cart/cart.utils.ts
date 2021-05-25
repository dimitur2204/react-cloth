import { Item } from '../../pages/shop/shop.component';

export interface CartItem extends Item {
	quantity: number;
}
export const addItemToCart = (
	cartItems: CartItem[],
	cartItemToAdd: CartItem
) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
