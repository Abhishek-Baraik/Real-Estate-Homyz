import React from 'react'

function GetStarted() {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="inner-container flex flex-col gap-4 text-center justify-center items-center bg-[#4161df] p-8 border-[6px] border-[#5d77d6] rounded-md">
                    <span className='text-white font-medium text-4xl mb-4'>Get started with Homyz</span>
                    <span className='text-[#B1B8ED] text-sm'>Subscribe and find super attractive price quotes from us.<br />
                        Find your residence soon</span>
                <button className='bg-[#5A73D7] w-32 scale-90 mt-1 hover:scale-100 duration-200 rounded-xl p-2 text-white border-[2px] border-[white]'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted