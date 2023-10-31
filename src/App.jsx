import { useState } from 'react'
import './App.css'
import Blogs from './Componante/Blogs/Blogs'
import Bookmarks from './Componante/Bookmarks/Bookmarks'
import Header from './Componante/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handelAddBookmark = blog =>{
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks);
  }

  const handelMarksAsRead = (id,time) =>{
    const newReadingTime =readingTime + time;
    setReadingTime(newReadingTime);
    // remove reading items
    // console.log('removed id' , id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto px-4 py-2 md:flex gap-3'>
        <Blogs handelAddBookmark={handelAddBookmark} handelMarksAsRead={handelMarksAsRead} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
