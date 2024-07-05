import Button from '../../ui/Button'
import MenuItem from "./MenuItem";
const menus = [
    {
        label:'find suppliers',
        additional : ['']
    },
    {
        label:'find service tags',
        additional : ['find service tags 1', 'find service tags 2']
    }
]

function Menu({isOpen, handleMenu}) {
    return (
        <ul className={`flex items-center gap-4 py-5 md:py-0 md:gap-8 flex-col md:flex-row absolute top-[60px] left-0 md:static w-full md:size-fit bg-white ${!isOpen ? 'hidden md:flex' : ''}`}>
        {menus.map((menu, index) => (
                <MenuItem key={index} menu={menu} handleMenu={handleMenu} />
        ))}
        <li>
            <Button onClick={handleMenu} type="secondary">login / sign up</Button>
        </li>
        </ul>
    )
}

export default Menu
