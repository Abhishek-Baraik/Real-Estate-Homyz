import React from 'react'

const Companies = () => {
  return (
    <section className='c-wrapper'>
   <div className="innerWidth paddings flex items-center justify-center flex-col c-container md:justify-around md:flex-row gap-[1rem]">
    <img src="./prologis.png" alt="" width={100} />
    <img src="./tower.png" alt=""  width={140}/>
    <img src="./equinix.png" alt=""  width={140}/>
    <img src="./realty.png" alt="" width={140} />
   </div>
   </section>
  )
}

export default Companies