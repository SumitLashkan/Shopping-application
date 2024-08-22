import React from 'react'
import  "./Spinner.css"

const Spinner = () => {
  return (
    <div className='w-[1500px] h-[600px] flex justify-center items-center'>
       <div className=' custom-loader '></div>
    </div>
  )
}

export default Spinner
