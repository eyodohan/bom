import PostCard from './post-card';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1 className='ml-2 font-bold text-xl text-blue-900 my-3'>
        Populer Yazılar
      </h1>
      <div className='pt-4 sm:grid grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => {
          const { title, excerpt, id, img_url } = post;
          return (
            <PostCard
              key={id}
              title={title}
              excerpt={excerpt}
              id={id}
              imgUrl={img_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
