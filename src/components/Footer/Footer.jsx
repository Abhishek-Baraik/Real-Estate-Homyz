import React from 'react'

function Footer() {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth f-container flex justify-center flex-col items-center md:flex-row md:justify-between">
                <div className="f-left flex flex-col gap-4">
                    <img src="./logo2.png" width={120} alt="" />
                    <span className='secondaryText'>Our vision is to make all people<br/>
                        the best place to live for them.</span>
                </div>
                <div className="f-right flex flex-col items-center md:items-start mt-9">
                    <span className='text-[#1f3e72] text-3xl font-semibold'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                    <div className="foof mt-5 font-medium grid grid-cols-2 ml-5 md:ml-0 md:flex md:gap-5">
                        <span className='mr-6 md:mr-0'>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer