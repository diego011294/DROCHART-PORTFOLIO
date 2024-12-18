import React from 'react'

export const OutlineButton = ({ children, onClick }) => {
  return (
    <div>
      <button
      onClick={onClick}
      className=" border border-[#333333] text-[#333333] px-4 py-2 font-bold hover:bg-[#333333] hover:text-white transition duration-300"
    >
      {children}
    </button>
    </div>
  )
}