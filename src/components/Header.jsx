import React from 'react'
import { useTheme } from '../ThemeContext';


useTheme
const Header = () => {

    const { theme, toggleTheme } = useTheme();

  return (



    
    <header className='flex items-center justify-between 
    text-white px-6 py-4 h-16 bg-green-200 max-w-5xl mx-auto mt-12 bg-transparent'>
      <span></span>
      {/* <button  className='px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase '>Dark</button> */}
      <div>
      
      <button className='px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase ' onClick={toggleTheme}><h1>{theme}</h1></button>
    </div>

    </header>
  )
}

export default Header
