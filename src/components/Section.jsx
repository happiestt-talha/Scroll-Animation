import React from 'react'

const Section = ({ children }) => {
    return (
        <>
            <div className="h-screen w-full flex items-center justify-center">
                {children}
            </div>
        </>
    )
}

export default Section