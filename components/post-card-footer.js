import {
  ShareIcon,
  DotsHorizontalIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import {
  GrFacebookOption,
  GrTwitter,
  GrLinkedin,
  GrPinterest,
} from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const PostCardFooter = ({ show, showCartLink }) => {
  return (
    <>
      {show ? (
        <div className='flex items-center justify-between w-full'>
          <ShareIcon className='h-5 cursor-pointer' onClick={showCartLink} />
          <DotsHorizontalIcon className='h-5 cursor-pointer hover:text-orange-500' />
        </div>
      ) : (
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center '>
            <XCircleIcon
              className='h-5 cursor-pointer'
              onClick={showCartLink}
            />
            <div className='border w-9 ml-4'></div>
            <GrFacebookOption className='icon' />
            <GrTwitter className='icon' />
            <GrLinkedin className='icon' />
            <GrPinterest className='icon' />
            <FaTelegramPlane className='icon' />
            <AiOutlineMail className='icon' />
          </div>
          <div>
            <DotsHorizontalIcon className='h-5 cursor-pointer hover:text-orange-500' />
          </div>
        </div>
      )}
    </>
  );
};

export default PostCardFooter;
