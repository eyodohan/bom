import { useState } from 'react';
import Image from 'next/image';
import Parser from 'html-react-parser';
import PostCardFooter from './post-card-footer';

const PostCard = ({ title, excerpt, imgUrl }) => {
  const [show, setShow] = useState(true);

  const showCartLink = () => {
    setShow(!show);
  };
  return (
    <div className='border m-2'>
      <Image
        layout='responsive'
        src={imgUrl}
        alt={title.rendered}
        width={300}
        height={200}
        className='object-cover w-full cursor-pointer hover:scale-105 transition-transform duration-200 ease-out'
      />
      <div className='p-4 h-56'>
        <span className='text-lg font-bold'>{Parser(title.rendered)}</span>
        <div className='py-2 overflow-x-scroll'>
          <span className='text-md text-gray-700 text-justify'>
            {Parser(excerpt.rendered)}
          </span>
        </div>
      </div>
      <div className='border-t flex items-center text-gray-400 h-12 mx-5 border-gray-200'>
        <PostCardFooter show={show} showCartLink={showCartLink} />
      </div>
    </div>
  );
};

export default PostCard;
