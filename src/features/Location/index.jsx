import { useState } from "react";

function Location({locations}) {

    const [searchValue, setSearchValue] = useState('')
    const [isDropDownOpen,setIsDropDownOpen] = useState(false)

    const filteredLocation = locations.filter(location => location.toLowerCase().includes(searchValue.toLowerCase()))

    function handleInputChange(e){
        setSearchValue(e.target.value)
        setIsDropDownOpen(true)
    }

    function handleOptionClick(value){
        setSearchValue(value)
        setIsDropDownOpen(false)
    }

    return (
        <div className="bg-white border-[#D1D5DB] border-[1px] rounded-[5px] inline-flex items-center py-3.5 px-4 w-full md:min-w-[400px] relative">
            <span className="w-5 h-5 bg-[url('/public/images/location.svg')] bg-cover bg-center mr-5" />
            <input value={searchValue} onChange={handleInputChange} onFocus={()=>setIsDropDownOpen(true)}  className="focus:outline-none w-full" type="text" placeholder="Search your desired location here" />
            {
                isDropDownOpen && (
                    <ul className="absolute top-16 left-0 bg-white rounded w-full text-left">
                        {filteredLocation.map((value, index) => (
                            <li onClick={()=>handleOptionClick(value)} className="	 text-sm py-2 px-2 hover:bg-slate-100 cursor-pointer" key={index}>{value}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Location
