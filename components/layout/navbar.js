import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='hidden md:contents'>
      <div className='flex items-center justify-between p-5 max-w-2xl mx-auto text-sm'>
        <Link href='/'>
          <a>Anasayfa</a>
        </Link>
        <Link href='#'>
          <a>Web Tasarım</a>
        </Link>
        <Link href='#'>
          <a>E Ticaret</a>
        </Link>
        <Link href='#'>
          <a>Wordpress</a>
        </Link>
        <Link href='#'>
          <a>Php</a>
        </Link>
        <Link href='#'>
          <a>Codeigniter</a>
        </Link>
        <Link href='#'>
          <a>Seo</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
