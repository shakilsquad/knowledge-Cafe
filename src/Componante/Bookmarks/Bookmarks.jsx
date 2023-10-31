
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (

        <div className=' md:w-1/3 bg-gray-300 p-3  rounded mt-4'>
            <div>
                <h1>Reading Time:{readingTime}</h1>
            </div>

            <div className=" ">
                <h1 className="text-2xl text-center">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>

    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
