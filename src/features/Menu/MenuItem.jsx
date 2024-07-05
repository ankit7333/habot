import LinkButton from "../../ui/LinkButton"

function MenuItem({menu, handleMenu}) {
    return ( 
        <li onClick={handleMenu} className={`group relative text-[15px] capitalize text-stone-500 cursor-pointer`}>
            {menu.label}
            {menu.additional.length ? 
                <ul className={`absolute top-5 z-10 hidden bg-white py-2 px-2 rounded-[2px] group-hover:block`}>
                    {menu.additional.map((val)=>{
                        return(<li className='cursor-pointer'>
                                <LinkButton type="transparent">{val}</LinkButton>
                        </li>)
                    })} 
                </ul>
            :null} 
        </li>   
    )
}

export default MenuItem
