import LinkButton from "./LinkButton"
import Logo from "./Logo"

function Footer() {
    return (
        <footer className={`bg-[#123557] py-5 px-5 md:py-10 md:px-10`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between border-0 md:border-y-[1px] md:border-red-50 md:py-10 gap-5 md:gap-0">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                    <div className="flex flex-col">
                        <Logo footer />
                        <span className={`text-[16px] font-light text-white mt-2`}>&#169; R SINGHANIA</span>
                    </div>
                    <div className="flex gap-5 md:gap-20 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col gap-1 flex-auto md:flex-none">
                            <h4 className={`text-white font-bold text-[15px]`}>Company</h4>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>About</span></LinkButton>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>FAQ</span></LinkButton>
                        </div>
                        <div className="flex flex-col gap-1 flex-auto md:flex-none">
                            <h4 className={`text-white font-bold text-[15px]`}>Terms</h4>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>Data privacy</span></LinkButton>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>Terms</span></LinkButton>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>Accessibility</span></LinkButton>
                        </div>
                        <div className="flex flex-col gap-1 flex-auto md:flex-none">
                            <h4 className={`text-white font-bold text-[15px]`}>Related</h4>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>Find Buyer</span></LinkButton>
                            <LinkButton to="/"><span className={`text-sm text-white font-light`}>Feedback</span></LinkButton>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div className={`flex items-center justify-around gap-2`}>
                        <LinkButton to="/"><img src="/images/linkedin.svg" alt="linkedin" /></LinkButton>
                        <LinkButton to="/"><img src="/images/twitter.svg" alt="twitter" /></LinkButton>
                        <LinkButton to="/"><img src="/images/facebook.svg" alt="facebook" /></LinkButton>
                        <LinkButton to="/"><img src="/images/instagram.svg" alt="instagram" /></LinkButton>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
