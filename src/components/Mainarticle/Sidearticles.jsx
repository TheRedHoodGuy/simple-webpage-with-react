const Sidearticles = ({c_class, heading, content}) => {
    return (
        <>
            <div className={c_class}>
                <h3 className="text-[20px] font-extrabold text-white_c">{heading}</h3>
                <p className="text-[15px] text-white_c mt-4 leading-[26px]">{content}</p>
            </div>
        </>
    );
}

export default Sidearticles