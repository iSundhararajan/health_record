import React from 'react'

export default function Chatroom() {
    return (
        <div>
            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">Chatroom</h1>
                <div className="bg-blue-500 h-1 w-36 my-2"></div>
            </div>

            <div className='grid place-items-center'>
                <iframe src="http://localhost:5000/" width="98%" height="800px" />
            </div>
        </div>
    )
}
