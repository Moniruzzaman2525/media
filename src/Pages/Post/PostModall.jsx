import React, { useContext, useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { PostImage } from '../Home/imageUpload';
import { useCreatePostMutation } from '../../redux/EndPoints/ApiEndpoints';
import { UserAuth } from '../../Context/UserContext';
const PostModall = () => {
    const { user } = useContext(UserAuth)
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [createPost, resPostInf] = useCreatePostMutation();

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    const handleSubmit = async () => {
        try {
            const imageUrl = await PostImage(image);
            const body = {
                imageUrl: imageUrl,
                text
            };

            await createPost(body)
            setImage(null)
            setText("")
        } catch (error) {
            setImage(null)
            setText("")
            console.error('Network error:', error);
        }
    };
    return (
        <div>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />

            <div className="modal">

                <div className="modal-box">
                    <label
                        htmlFor="my_modal_6"
                        className="btn btn-sm btn-circle border-0 absolute right-2 bg-[#FFE2E5] text-[#ee3c4d] hover:bg-[#ee3c4d] hover:text-white top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-center text-lg">Create post</h3>
                    <div className='bg-gray-100 my-3 h-[2px]'>

                    </div>
                    <div className='flex gap-5'>
                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                        </div>
                        <div>
                            <h1>{user.displayName}</h1>
                            <div className='flex bg-gray-300 items-center justify-center gap-1 rounded-md h-[25px] w-[100px]'>
                                <BiWorld />
                                <h1>Public</h1>
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <input onChange={handleTextChange} className='w-full border-white focus:border-white p-2 mt-5' placeholder="What's on your mind, Md"></input>

                    </div>
                    <div className='border'>
                        <label for="upload_image" className='bg-[#f7f8fa] w-full flex flex-col justify-center items-center m-2 h-[200px]'>
                            <img src="https://i.ibb.co/6Jt58bD/blob.webp" alt="blob" border="0" />
                            <h1>
                                Add Photos/video
                            </h1>
                        </label>
                        <input accept="image/*"
                            onChange={handleImageChange} type='file' id='upload_image' style={{ display: 'none' }} />
                    </div>
                    <div className="modal-action">
                        {(!text || !image )? <button disabled className="w-full flex justify-center items-center text-white text-[20px] font-bold h-[50px] bg-gray-200" onClick={handleSubmit}>
                            Post
                        </button> : <button className="w-full flex justify-center items-center text-white text-[20px] font-bold h-[50px] bg-[#1b74e4]" onClick={handleSubmit}>
                            <label htmlFor="my_modal_6" >Post</label>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModall;