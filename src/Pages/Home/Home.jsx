import React from 'react';
import ViewMedia from '../Media/ViewMedia';
import CreatePost from '../Post/CreatePost';

function App() {
    return (
        <div className="">
            <div className='flex justify-center  mt-5 items-center'>
                <div className='rounded-xl w-[600px] bg-white shadow-2xl h-[150px]'>
                    <CreatePost />
                </div>
            </div>
            <div className=' flex justify-center'>
                <div className='w-[600px]'>
                    <ViewMedia />
                </div>
            </div>
        </div>
    );
}

export default App;
