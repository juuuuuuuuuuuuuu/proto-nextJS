import { useContext } from 'react';
import ItemsContext from '../components/ItemContext';
import ItemDetail from '../components/ItemDetail';

/**
 * 메인 페이지
 */
const Index = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div>
      {items.length > 0 && items.map((item, index) => <ItemDetail key={index} item={item} />)}
    </div>
  );
};

export default Index;

Index.getInitialProps = ({ req }) => {
  return {
    req: req ? { from: 'server' } : { from: 'client' },
  };
};
