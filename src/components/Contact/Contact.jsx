import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import "./Contact.css"
function Contact() {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth c-container flex flex-col md:flex-row items-center justify-between">
                <div className="left flex flex-col gap-2">
                    <span className='orangeText text-4xl mb-2'>Our Contact Us</span>
                    <span className='primaryText text-2xl mb-1'>Easy to contact us</span>
                    <span className='secondaryText leading-6'>We always ready to help by providing the best services for you.<br /> We beleive a good place to live can make your life better</span>

                    <div className="contactModes md:flex md:flex-row flex flex-col gap-6 mt-6">
                        <div className="column1">
                            {/* call mode */}
                            <div className="call mb-6 duration-300 ease-in border-[1px] border-zinc-300 rounded-md p-4 hover:scale-[1.1] hover:shadow-lg">
                                <div className='flex gap-6 justify-start items-center'>
                                    <div className="icon bg-blue-100 p-2 rounded-[6px] text-blue-600">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="detail flex-col flex">
                                        <span className='primaryText text-lg'>Call</span>
                                        <span className='secondaryText'>021 123 891 86</span>
                                    </div>
                                </div>
                                <button className=' duration-200 ease-in bg-[color:var(--lightBlue)] rounded-md text-[var(--blue)] text-base p-2 font-semibold mt-4 md:w-[15vw] hover:bg-[#3E64FA] hover:text-white hover:scale-[0.8]'>Call Now</button>
                            </div>
                            {/* videoCall mode */}
                            <div className="videoCall duration-300 ease-in border-[1px] border-zinc-300 rounded-md p-4 hover:scale-[1.1] hover:shadow-lg">
                                <div className='flex gap-6 justify-start items-center'>
                                    <div className="icon bg-blue-100 p-2 rounded-[6px] text-blue-600">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="detail flex-col flex">
                                        <span className='primaryText text-lg'>Video Call</span>
                                        <span className='secondaryText'>021 123 891 86</span>
                                    </div>
                                </div>
                                <button className=' duration-200 ease-in bg-[color:var(--lightBlue)] rounded-md text-[var(--blue)] text-base p-2 font-semibold  md:w-[15vw] mt-4 hover:bg-[#3E64FA] hover:text-white hover:scale-[0.8]'>Video Call Now</button>
                            </div>
                        </div>
                        <div className="column2">
                            {/* chat mode */}
                            <div className="chat mb-6 duration-300 ease-in border-[1px] border-zinc-300 rounded-md p-4 hover:scale-[1.1] hover:shadow-lg">
                                <div className='flex gap-6 justify-start items-center'>
                                    <div className="icon bg-blue-100 p-2 rounded-[6px] text-blue-600">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="detail flex-col flex">
                                        <span className='primaryText text-lg'>Chat</span>
                                        <span className='secondaryText'>021 123 891 86</span>
                                    </div>
                                </div>
                                <button className=' duration-200 ease-in bg-[color:var(--lightBlue)] rounded-md text-[var(--blue)] text-base p-2 font-semibold md:w-[15vw] mt-4 hover:bg-[#3E64FA] hover:text-white hover:scale-[0.8]'>Chat Now</button>
                            </div>
                            {/* message mode */}
                            <div className="messageMode duration-300 ease-in border-[1px] border-zinc-300 rounded-md p-4 hover:scale-[1.1] hover:shadow-lg">
                                <div className='flex gap-6 justify-start items-center'>
                                    <div className="icon bg-blue-100 p-2 rounded-[6px] text-blue-600">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="detail flex-col flex">
                                        <span className='primaryText text-lg'>Message</span>
                                        <span className='secondaryText'>021 123 891 86</span>
                                    </div>
                                </div>
                                <button className=' duration-200 ease-in bg-[color:var(--lightBlue)] rounded-md text-[var(--blue)] text-base p-2 font-semibold mt-4 md:w-[15vw] hover:bg-[#3E64FA] hover:text-white hover:scale-[0.8]'>Message Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right image-container w-[20] h-[25rem] md:w-[30rem] md:h-[35rem] rounded-t-[15rem] overflow-hidden border-[8px] border-[#EAEAEA]">
                    <img src="./contact.jpg" className='object-fill w-full h-full' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact