import React from 'react';

function HeaderItem({ Icon, title }) {
  return (
    <div className='group cursor-pointer flex flex-col items-center hover:text-white h-auto'>
      <Icon size={25} className='group-hover:animate-bounce'/>
      <p className='tracking-widest opacity-0 group-hover:opacity-100 text-[10px] sm:text-sm'>{title}</p>
    </div>
  );
}

export default HeaderItem;
