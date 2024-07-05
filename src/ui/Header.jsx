import Logo from './Logo'
import Menu from '../features/Menu'
import Button from './Button'
import { useState } from 'react'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function handleMenu(){
        setIsOpen(!isOpen);
    }
    return (
        <header className='border-[1px] md:border-0'>
            <div className="container mx-auto flex flex-col md:flex-row item-center justify-between bg-white py-2 px-1 md:py-3 md:py-5 relative">
                <Logo header />
                <span className='absolute p-3 right-1 md:hidden flex items-center justify-center'>
                    <Button onClick={handleMenu}>MENU</Button>
                </span>
                <Menu handleMenu={handleMenu} isOpen={isOpen} />
            </div>
        </header>
    )
}

export default Header
