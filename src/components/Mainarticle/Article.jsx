import Image from '../../assets/images/image-web-3-mobile.jpg'

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
                <div className="mt-16 w-full bg-black_c flex px-[22px]">
                    <div className="mt-7">
                        <h2 className="text-[32px] font-[700] text-orange_c">New</h2>
                    </div>
                    <div className="mt-[40px]">
                        <h3></h3>
                    </div>
                </div>
            </article>
        </>
    );
}
export default Article