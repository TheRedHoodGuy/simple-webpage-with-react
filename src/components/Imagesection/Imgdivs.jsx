const Imgdivs = ({image, i_head, i_cont, num}) => {
    return(
        <>
            <div className="flex mb-8 items-center justify-start">
                <div className="h-full w-[200px] overflow-hidden">
                    <img className="w-full" src={image} alt={image} />
                </div>
                <div className="ml-6">
                    <h2 className="text-[32px] font-extrabold">{num}</h2>
                    <h3 className="text-[18px] font-extrabold">{i_head}</h3>
                    <p className="text-[15px] leading-[26px]">{i_cont}</p>
                </div>
            </div>
        </>
    );
}

export default Imgdivs