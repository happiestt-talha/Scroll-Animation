import React from 'react'

const Section = ({ children }) => {
    return (
        <>
            <div className="h-screen w-full">
                {children}
            </div>
        </>
    )
}

export default Section