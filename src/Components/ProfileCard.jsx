import React from 'react'

const ProfileCard = ({data,skills}) => {
  return (
    <section className=' w-64 border pt-2 bg-gray-700 text-center rounded-xl '>
        <div className='flex justify-center items-center'>
            {/* <p className='online '>online</p> */}
            <img src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I' alt='status'/>
        </div>
        <p className='text-sm mt-2'>{data.name}</p>
        <p className='text-sm mt-2'>{data.city}</p>
        <p className='text-sm my-2'>{data.role}</p>
        <div className='flex justify-center btn'>
            <button className='btn-1'>Message</button>
            <button className='btn-2'>Following</button>
        </div>
        <div className=' bg-gray-600 rounded-lg text-white  text-left px-5 py-2'>
            <h3 >skills</h3>
        <div className='flex flex-wrap  py-3 gap-2 flex-row '>
            {skills.map((skill,i)=><p key={i} className='bg-transparent border rounded px-2 py-1  text-xs text-white'>{skill}</p>)}
        </div>
   
        </div>
    </section>
  )
}

export default ProfileCard