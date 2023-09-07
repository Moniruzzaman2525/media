import React, { useState } from 'react';
import {
  useCommentPostMutation,
  useLikePostMutation,
} from '../../redux/EndPoints/ApiEndpoints';

function Post({ post }) {
  const [likes, setLikes] = useState(post?.likes);
  const [comment, setComment] = useState('');
  console.log(post);
  const [likePost] = useLikePostMutation();
  const [commentPostMutation] = useCommentPostMutation();

  const handleLike = async () => {
    // Call the likePost mutation here
    try {
      const body = {
        id: post._id,
      }
      const response = await likePost(body);
      console.log(response);
      if (response.data) {
        setLikes(response?.data?.likes);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = async () => {
    try {
      const body = {
        id: post._id, 
        data: comment
      }
      const response = await commentPostMutation(body);
      console.log('Comment response:', response);
      setComment('');
    } catch (error) {
      console.error('Error commenting on post:', error);
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg mb-4">
      <p className='text-xl py-2'>{post.text}</p>
      <img src={post.imageUrl} alt="Post" className="mb-2 w-[600px]" />
      <div className="flex justify-between">
        <button onClick={handleLike} className="text-red-500">
          Like ({likes})
        </button>
        <button className="text-blue-500">Comment</button>
      </div>
      <input
        type="text"
        placeholder="Add a comment..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={handleComment} className="mt-2 text-blue-500">
        Post
      </button>
    </div>
  );
}

export default Post;
