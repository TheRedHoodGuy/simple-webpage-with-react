import Imgdivs from "./Imgdivs"
import image1 from '../../assets/images/image-retro-pcs.jpg'
import image2 from '../../assets/images/image-gaming-growth.jpg'
import image3 from '../../assets/images/image-top-laptops.jpg'

const Imagesection = () => {
    return (
        <>
            <div className="min-[1440px]:flex">
                <Imgdivs image={image1} i_head="Revivng Retro PCs" i_cont="What happens when old PCs are given modern upgrades?" num="01" />
                <Imgdivs image={image2} i_head="Top 10 laptops of 2022" i_cont="Our best picks for various needs and budjets" num="02" />
                <Imgdivs image={image3} i_head="The Growth of Gaming" i_cont="How the pandemic has sparked fresh opportunities" num="03" />
            </div>
        </>
    );
}
export default Imagesection