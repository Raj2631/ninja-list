import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a className="logo">
          <Image src="/ninjalist.png" width={128} height={77} />
        </a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninjas Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
