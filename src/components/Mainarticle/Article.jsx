import Image from '../../assets/images/image-web-3-mobile.jpg'
import Sidearticles  from './Sidearticles'

const Article = () => {
    return (
        <>
            <article>
                <div className="flex flex-col w-full">
                    <div className="w-full mt-8">
                        <img src={Image} alt="Image" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-[40px] font-[800] tracking-[0.01em] leading-[40px] mt-7">The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[15px] leading-[26px]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <a href="#" target="_blank" className="w-fit mt-7 text-[14px] tracking-[0.32em] uppercase font-bold text-white_c py-[20px] px-[34px] bg-red_c">read more</a>
                    </div>
                </div>
                <div className="mt-16 w-full bg-black_c flex flex-col px-[22px]">
                    <div className="mt-7">
                        <h2 className="text-[32px] font-[700] text-orange_c">New</h2>
                    </div>
                    <div className="flex flex-col mt-[42px]">
                        <Sidearticles heading="Hydrogen VS Electric Cars" content="Will hydrogen-fueled cars ever catch up to EVs?"></Sidearticles>
                        <Sidearticles c_class="mt-9" heading="The Downsides of AI Aristry" content="What are the possible adverse effects of on-demand AI image generation?"></Sidearticles>
                        <Sidearticles c_class="mt-9" heading="Is VC Funding Drying Up" content="Private funding by VC firms is down 50% YOY. We take a look at what that means"></Sidearticles>
                    </div>
                </div>
            </article>
        </>
    );
}
export default Article