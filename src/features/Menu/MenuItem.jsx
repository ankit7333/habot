import LinkButton from "../../ui/LinkButton"

function MenuItem({menu, handleMenu}) {
    console.log(menu, "menumenu")
    return (    
            <li onClick={handleMenu} className="relative text-[15px] capitalize text-stone-500">
                {Object.keys(menu).map((key,id) => (
                    <LinkButton key={id} type="transparent">{key !== 'additional' && menu[key]}</LinkButton>
                ))}
            {/* {
                menu.additional.length > 0 &&(
                    <ul className="absolute z-10">
                        {
                            menu.additional.map((additionalItem, subIndex) => (
                                <li key={subIndex}><LinkButton type="transparent">{additionalItem}</LinkButton></li>
                            ))
                        }
                    </ul>
                )
            } */}
        </li>
    )
}

export default MenuItem
