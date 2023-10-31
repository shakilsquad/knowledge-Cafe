import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handelAddBookmark,handelMarksAsRead}) => {
    // console.log(blog);
    const {title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-5 p-5 space-y-3'>
            <img className='w-full' src={cover} alt={`cover pitcher of the title ${title}`} />
            <div className='flex justify-between items-center py-5'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div className=''>
                        <h4 className='mb-3'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-[20px] font-medium '>{reading_time}min read</span>
                    <button
                    onClick={() =>handelAddBookmark(blog)}
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash ,idx)=> <span key={idx}><a href="">#{hash}  </a></span>)
                }
            </p>
            <button
            onClick={() => handelMarksAsRead(reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.PropTypes ={
    blog: PropTypes.object.isRequired,
    handelAddBookmark:PropTypes.func,
    handelMarksAsRead:PropTypes.func
}
export default Blog;