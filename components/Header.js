import Link from 'next/link';

export default () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
        <li>
          <Link href="/component">
          <a>class component vs function component</a>
          </Link>
        </li>
        <li>
          <Link href="/hooks">
            <a>hooks</a>
          </Link>
        </li>
        <li>
          <Link href="/customHooks">
            <a>customHooks</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
