import { useContext } from 'react';
import ItemContext from '../components/ItemContext';
import ItemDetail from '../components/ItemDetail';

/**
 * 장바구니 page
 */
const Cart = () => {
  const { cartItems } = useContext(ItemContext);
  return (
    <div>
      {cartItems.length > 0
        ? cartItems.map((item, index) => <ItemDetail key={index} item={item} />)
        : '장바구니가 비었습니다.'}
    </div>
  );
};
export default Cart;
