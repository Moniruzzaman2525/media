
import React from 'react';
import Post from './Post';
import {  useGetTopMediaQuery } from '../../redux/EndPoints/ApiEndpoints';



function ViewMedia() {
    // const [topPosts, setTopPosts] = useState([]);
    const { data, isLoading } = useGetTopMediaQuery();

 
    return (
        <div className="container mx-auto  mt-8">
            <h1 className="text-3xl font-bold mb-4">Top Posts</h1>
            <div className=''>
                {data?.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default ViewMedia;
