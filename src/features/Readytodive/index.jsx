import Button from "../../ui/Button"

const cities = ['Abu Dubai', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'];

function Readytodive() {
    return (
        <section className="py-10 px-5 md:px-0">
            <div className='flex flex-col md:flex-row gap-10 md:gap-5 items-center justify-between container mx-auto'>
                <div className="opacity-0 animate-fadeInDelay1 flex flex-wrap flex-col gap-5 w-full md:w-2/4">
                    <h4 className="font-bold text-2xl md:text-3xl text-black">Ready to dive into <span className="text-[#271555]">HABOT?</span></h4>
                    <p className="text-sm text-black font-light">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <div className="max-w-xs flex">
                        <Button type="primary">Sign up Today! &rarr;</Button>
                    </div>
                </div>
                <ul className="flex flex-wrap gap-5 justify-end w-full md:w-2/4">
                    {cities.map((value, index) => (
                        <li key={index} className={`text-sm md:text-lg text-[#3E3E3E] font-medium border-[1px] border-[#E7760D] rounded-[5px] py-4 w-[46%] md:w-[48%] text-center opacity-0 animate-fadeInDelay${index + 1}`}>{value}</li>
                    )
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Readytodive
