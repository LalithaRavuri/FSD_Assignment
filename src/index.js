import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './commentbox'

const Student =()=>{
    return (
        <CommentBox />

    )
};

ReactDOM.render(
   <>
    <Student/>
   </>,
    document.getElementById('root')
)