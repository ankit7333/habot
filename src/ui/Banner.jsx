import Service from '../features/Service'
import Location from '../features/Location'
import LinkButton from './LinkButton'
import Button from './Button'
const locations = ['Mumbai', 'Navi Mumbai', 'Thane', 'Pune', 'Surat', 'Nasik'];
const services = ['electricity', 'water', 'telephones', 'email', 'website hosting', 'stationery', 'facilities', 'transport'];
function Banner() {
    return (
        <section className="bg-[url('/public/images/banner.png')] bg-cover bg-center h-screen flex items-center justify-center">
            <div className="container mx-auto text-center flex gap-5 md:gap-10 flex-col px-5">
                <h4 className="opacity-0 animate-fadeInDelay1 text-white font-bold text-3xl md:text-[55px]">Are You a Supplier?</h4>
                <p className="opacity-0 animate-fadeInDelay2 text-white text-3xl md:text-[55px]">Explore Matching Opportunities.</p>
                <form className='opacity-0 animate-fadeInDelay4 flex flex-col md:flex-row gap-5 justify-center items-center'>
                    <Service services={services} />
                    <Location locations={locations} />
                    <div className='w-28'>
                        <Button type="primary">Search</Button>
                    </div>
                </form>
                <p className='opacity-0 animate-fadeInDelay5 text-base md:text-lg text-white'><strong className='font-bold'>Are you a buyer? </strong> <LinkButton to="/"> Click here if you are looking to post a requirements</LinkButton></p>
            </div>
        </section>
    )
}

export default Banner
