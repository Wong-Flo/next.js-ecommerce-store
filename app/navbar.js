// import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function NavBar() {
  // const totalItemsInCart = (await cookies()).get('cookieAmount');
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/category">Category</Link>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </div>
  );
}
/*  change and connect cookie name to singleProduct.id

search for cookieAmount to change name more than 1 place uses this
*/
