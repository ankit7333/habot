import Button from './Button'
function supplier() {
    return (
        <section className="bg-[#E8FBFF] py-10 px-5 md:py-24">
            <div className='opacity-0 animate-fadeInDelay1 flex flex-col md:flex-row gap-5 items-center justify-between container mx-auto'>
                <h6 className='text-xl md:text-3xl font-semibold'>Let Suppliers <span className='underline decoration-[#EB7150] decoration-4'>Find You</span></h6>
                <div className='w-52 flex'>
                    <Button type="verified">get verified</Button>
                </div>
            </div>
        </section>
    )
}

export default supplier
