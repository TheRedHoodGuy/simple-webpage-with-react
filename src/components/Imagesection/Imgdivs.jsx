const Imgdivs = ({image, i_head, i_cont, num}) => {
    return(
        <>
            <div>
                <div>
                    <img src={image} alt={image} />
                </div>
                <div>
                    <h2>{num}</h2>
                    <h3>{i_head}</h3>
                    <p>{i_cont}</p>
                </div>
            </div>
        </>
    );
}