import App, { Container } from 'next/app';
import Header from '../components/Header';
import ItemContext from '../components/ItemContext';

/**
 * 모든 애플리케이션의 시작
 * 모든 페이지에서 공통으로 수정하고 싶거나 보여져야하는 것들을 작업
 */
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  state = {
    items: require('../static/items.json').data,
    cartItems: []
  };

  /**
   * 장바구니 리스트 추가하는 함수
   */
  insertItem = data => {
    const { cartItems } = this.state;

    if (this.validation(data, cartItems)) return;

    const updateItems = cartItems.concat(data);
    this.setState({
      cartItems: updateItems
    });
  };

  /**
   * 장바구니 리스트 삭제하는 함수
   */
  deleteItem = data => {
    const { cartItems } = this.state;

    if (!this.validation(data, cartItems)) return;

    cartItems.some((item, index) => {
      if (item.id === data.id) {
        cartItems.splice(index, 1),
          this.setState({
            cartItems
          });
      }
    });
  };

  validation = (selectedItem, items) => {
    return items.some(item => item.id == selectedItem.id);
  };

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    // app 컴포넌트는 최상위 , 모든 페이지가 거쳐감
    const { Component, pageProps } = this.props;
    const { items, cartItems } = this.state;

    return (
      <Container>
        {/* 라우터간 데이터 공유가능 */}
        <ItemContext.Provider
          value={{
            items,
            cartItems,
            insertItem: this.insertItem,
            deleteItem: this.deleteItem
          }}
        >
          <Header />
          <Component {...pageProps} />
        </ItemContext.Provider>
      </Container>
    );
  }
}
