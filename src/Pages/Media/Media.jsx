
import React from 'react';
import Post from './Post';
import { useGetPostQuery } from '../../redux/EndPoints/ApiEndpoints';



function Media() {
    // const [topPosts, setTopPosts] = useState([]);
    const { data, isLoading } = useGetPostQuery();


    return (


        <div className=' flex justify-center'>
            <div className='w-[600px]'>
                {data?.lenght === 0 ? <h1 className='text-2xl text-center'>No Media Available</h1> : <div className="container mx-auto  mt-8">
                    <h1 className="text-3xl font-bold mb-4">View All Media</h1>
                    <div className=''>
                        {data?.map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Media;
