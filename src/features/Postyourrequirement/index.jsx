import Tab from './Tab'
function Postyourrequirement() {
    return (
        <section className="py-10 px-5 md:px-0 bg-[#072F57]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
                <div className='w-full md:w-1/2 h-80'>
                    <iframe title="This is a unique title" className="w-full h-full" src="https://www.bigbuckbunny.org/"></iframe>
                </div>
                <Tab />
            </div> 
        </section>
    )
}

export default Postyourrequirement
