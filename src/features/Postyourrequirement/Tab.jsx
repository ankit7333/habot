import { useState } from "react"
const tabs = [
    {
        title : 'Buyer',
        content : [
                    'Post your requirements.',
                    'Sit back for multiple suppliers to contact you.',
                    'Choose among the suppliers based on the ratings and reviews.'
                ]
    },
    {
        title : 'Supplier',
        content : [
            'Post your requirements.',
            'Sit back for multiple suppliers to contact you.',
            'Choose among the suppliers based on the ratings and reviews.'
        ]
    },
]
function Tab() {
    const [isActive, setIsActive] = useState(0)
    function handleTab(index){
        setIsActive(index)
    }
    return (
        <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center justify-between gap-5">
                {tabs.map((tab, index) => (
                        <button key={index} className={`${isActive === index ? 'text-[#EB7150] border-[#EB7150]' : 'border-transparent'} font-bold text-2xl md:text-[32px] border-b-4 text-white w-2/4 pb-5`} onClick={() => handleTab(index)}>{tab.title}</button>
                    )
                )}
            </div>
            <div className="flex flex-col pt-5 text-white text-sm md:text-lg">
                {tabs[isActive].content.map((item,i) => <p  key={i}>{item}</p>)}
            </div>
        </div>
    )
}

export default Tab
