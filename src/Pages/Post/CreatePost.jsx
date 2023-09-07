import React, { useContext } from 'react';
import PostModall from './PostModall';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/UserContext';
const CreatePost = () => {
    const { user } = useContext(UserAuth)
    return (
        <div className=''>
            <div className="flex py-4 gap-5 px-5">
                <div className="w-12 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
                {user ? <div className='rounded-3xl bg-gray-100 w-full'>
                    <label htmlFor="my_modal_6" className='text-start text-xl text-gray-500 ml-5 mt-1'>What's on your mind, {user.displayName}</label>
                </div> : <div className='rounded-3xl bg-gray-100 w-full'>
                    <Link to='/login' htmlFor="my_modal_6" className='text-start text-xl text-gray-500 ml-5 mt-1'>What's on your mind</Link>
                </div>}
            </div>
            <div className='bg-gray-100 h-[2px]'>

            </div>
            <div className='flex justify-between px-10 items-center h-20'>
                <div>
                    <button className='flex gap-2'>
                        <img src="https://i.ibb.co/ch19gMJ/c0d-Who49-X3.png" alt="c0d-Who49-X3" border="0" /> <span>Live Videe</span>
                    </button>
                </div>
                <div>
                    <button className='flex gap-2'>
                        <img src="https://i.ibb.co/MnmVVsg/Ivw7nh-Rt-Xyo.png" alt="Ivw7nh-Rt-Xyo" border="0" /> <span>Photo/videe</span>
                    </button>
                </div>
                <div>
                    <button className='flex gap-2'>
                        <img src="https://i.ibb.co/yXr87n0/Y4m-YLVOh-Twq.png" alt="Y4m-YLVOh-Twq" border="0" /> <span>Feeling/activity</span>
                    </button>
                </div>

            </div>
            <div>
                <PostModall />
            </div>
        </div>
    );
};

export default CreatePost;