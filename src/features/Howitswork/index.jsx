const data = [
    {
        icon : './images/signup.svg',
        content : 'Select Your Role and Sign Up'
    },
    {
        icon : './images/requirenment.svg',
        content : 'Buyers Post Your Requirements'
    },
    {
        icon : './images/suppliers.svg',
        content : ' Review, Select, and Contact the Best Suppliers'
    },
    {
        icon : './images/edit.svg',
        content : ' Suppliers Complete your profile and get notified for opportunities'
    },
    {
        icon : './images/quote-request.svg',
        content : 'Contact to Buyers and Share your Quote for the service'
    },
    {
        icon : './images/feedback.svg',
        content : 'Both the Parties can Connect and Make Business Leave a Feedback'
    },
]

function Howitwork() {
    return (
        <section className="py-10 px-5 md:px-0">
            <div className="container mx-auto flex flex-col justify-center items-center gap-5">
                <h4 className="opacity-0 animate-fadeInDelay1 text-[#222222] font-bold text-xl md:text-4xl">How it works?</h4>
                <p className="opacity-0 animate-fadeInDelay2 text-[#000000] text-base max-w-4xl text-center">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                <ul className='grid grid-cols-2  md:grid-cols-3 my-10'>
                    {data.map((value, index) => (
                        <li key={index} className="flex justify-center items-center flex-col text-black font-medium text-sm md:text-xl bg-[#E8FBFF] md:bg-white md:even:bg-[#E8FBFF] gap-5 text-center px-5 py-5 md:px-10 md:py-12">
                            <img className="opacity-0 animate-fadeInDelay1 w-10 md:w-[74px]" src={value.icon} alt={value.content} />
                            <span className="opacity-0 animate-fadeInDelay3">{value.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Howitwork
