import React from 'react'

const QuoteAuthor = ({author,color}) => {
  return (
    <div  className='mt-8'>
        <span className='font-[300] text-base'>{author}</span>
    </div>
  )
}

export default QuoteAuthor