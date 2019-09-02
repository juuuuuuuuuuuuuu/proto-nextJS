import { useContext, useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router';
import ItemsContext from '../components/ItemContext';
import ItemDetail from '../components/ItemDetail';

/**
 * 상품상세 page
 */
const Product = () => {
  const router = useRouter();

  const { items, insertItem, deleteItem } = useContext(ItemsContext);

  const item = items.filter(item => item.id == router.query.id);

  return (
    <div>
      <ItemDetail item={item[0]} />
      <button onClick={() => {insertItem(item[0])}}>insert cart</button>
      <button onClick={() => {deleteItem(item[0])}}>delete cart</button>
    </div>
  );
};

export default withRouter(Product);