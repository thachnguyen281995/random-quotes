import React from 'react'

const QuotesText = ({quote,color}) => {
  return (
    <div style={{color:color}}>
        <span className='text-2xl font-bold'>{quote}</span>
    </div>
  )
}

export default QuotesText