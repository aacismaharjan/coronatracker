import React from 'react'

const Loading = () => {
  eturn(
    <div className='d-flex justify-content-center align-center'>
      <div className='spinner-border text-secondary m-5' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
