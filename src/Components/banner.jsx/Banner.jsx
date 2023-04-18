import React from 'react';

// animation files here
import Lottie from 'lottie-react'
import namme from './aname.json'
// animation files eands 

import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='p-3 bg-gray-200 rounded-lg w-11/12 text-gray-700-400 mx-auto'>
                    <Marquee className='text-lg' speed={200}>
                        <span className='text-bold text-3xl text-orange-500'>Hi</span> there there are so many hotels  for you
                    </Marquee>
                </h1>
            </div>

            <section className=' h-screen items-center w-full mt-5 flex'>
                <div className='w-1/2 pl-5 '>
                    <h1 className='text-6xl font-bold '>Hi <span className='text-orange-500'>there</span> </h1>
                    <h5 className='text-4xl mt-3 font-lg'>Here is free <span className='text-5xl font-bold '>Hotels</span></h5>
                    <p className='py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sunt sit placeat quod, accusamus necessitatibus enim facilis laborum, esse cupiditate est voluptate unde atque magni asperiores minima explicabo iure sapiente!</p>
                    <button className='text-gray-300 hover:text-gray-600 border-2 py-3 px-6 rounded-lg'>
                        Book now
                    </button>


                </div>
                <div className='w-1/2 '>
                    <Lottie animationData={namme} />
                </div>
            </section>
        </div>
    );
};

export default Banner;