import Link from 'next/link';

/**
 * 상품 컴포넌트
 * @param {Object} item item
 */
const ItemDetail = ({ item }) => (
  <div>
    <Link href={`/product?id=${item.id}`} as={`/product/${item.id}`}>
      <a>
        <img src={item.imgUrl} />
        <h2>{item.title}</h2>
      </a>
    </Link>
  </div>
);

export default ItemDetail;
