import React from 'react'
import { Link } from 'react-router-dom'

export default function Doctors() {
    return (
        <div>
            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">Doctors</h1>
                <div className="bg-blue-500 h-1 w-36 my-2"></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16 py-8 gap-4">

                <div className="bg-white rounded-xl grid place-items-center p-8">
                    <img src="/assets/doc1.png" alt="" height={200} width={200} className="rounded-full my-2" />
                    <h1 className='text-xl py-2 font-semibold'>Dr. Han</h1>
                    <p className='text-lg text-gray-500'>Cardiologist</p>
                    <Link to="/chatroom">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white'>Chat now</button>
                    </Link>

                </div>

                <div className="bg-white rounded-xl grid place-items-center p-8">
                    <img src="/assets/doc2.png" alt="" height={200} width={200} className="rounded-full my-2" />
                    <h1 className='text-xl py-2 font-semibold'>Dr. John</h1>
                    <p className='text-lg text-gray-500'>Neurologist</p>
                    <Link to="/chatroom">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white'>Chat now</button>
                    </Link>

                </div>

                <div className="bg-white rounded-xl grid place-items-center p-8">
                    <img src="/assets/doc1.png" alt="" height={200} width={200} className="rounded-full my-2" />
                    <h1 className='text-xl py-2 font-semibold'>Dr. Lee</h1>
                    <p className='text-lg text-gray-500'>Dermatologist</p>
                    <Link to="/chatroom">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white'>Chat now</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}
