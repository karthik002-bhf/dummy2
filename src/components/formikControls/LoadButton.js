import React from 'react'

function LoadButton({ bname, type, bclass, isLoading, ...rest }) {
    return (
        <div>
            <button type={type} {...rest} className={bclass} disabled={isLoading}>
                {isLoading ? <span><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> {bname}</span> : bname}
            </button>
        </div>
    )
}

export default LoadButton
