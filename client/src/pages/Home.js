import React from "react"
// import HeroImg from "../assets/hero.svg"
// import FeatImg from "../assets/feat.svg"
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white py-10'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Medicord, a web platform that is designed to help patients to keep track of their medical records and efficiently communicate with their doctors. This website securely stores all of the patient's medical records, through the use of blockchain and allows them to book appointments with their doctor.</p>

                    <Link to="/records">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Store Medical Records</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src="./assets/hero.svg" alt="img" width="450" height="450" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src="./assets/feat.svg" alt="img" width="450" height="450" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>Medicord is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Book appointments with doctors.</li>
                        <li className="list-disc">Virtual consultation with doctors.</li>
                        <li className="list-disc">Store all your medical records securely on the blockchain.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
