import React, { useState } from 'react'
import {
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
    Accordion,
    AccordionItemHeading
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'
import './Value.css'
function Value() {
    const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper">
            <div className="innerWidth paddings v-container flex gap-32">
                <div className="v-left flex justify-center">
                    <div className="image-container w-[20rem] h-[25rem] flex items-center justify-center md:w-[30rem] md:h-[35rem] overflow-hidden rounded-t-[15rem]  border-[8px] border-[#EAEAEA]">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                <div className="v-right flex flex-col justify-start">
                    <span className='orangeText text-4xl'>Our Value</span>
                    <span className='primaryText mb-4 md:text-2xl'>Value We Give to You</span>
                    <span className='secondaryText leading-6'>We always ready to help by providijng the best services for you.
                        <br />
                        We beleive a good blace to live can make your life better
                    </span>

                    <Accordion allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className='mt-9 border-none'>
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem
                                        className={`bg-white border-[0.8px] border-[rgba(128,128,128,0.143)] rounded-[8px] overflow-hidden mb-[20px] shadow-xl`}
                                        key={i}
                                        uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flex items-center justify-between p-4'>
                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>


                                                <div className='flex items-center accordionIcon p-2 bg-[#eeeeff] rounded-[5px] text-blue-600'>{item.icon}</div>
                                                <span className='primaryText'>{item.heading}</span>
                                                <div className='flex items-center p-2 bg-[#eeeeff] rounded-[5px] text-blue-600'>
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Value