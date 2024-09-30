import React from 'react'

const LoadingSpinner = () => {
  return (
    <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border my-5" style={{width:"8rem",height:"8rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
  )
}

export default LoadingSpinner