import Image from "../../assets/images/image-web-3-mobile.jpg";
import Image_desc from "../../assets/images/image-web-3-desktop.jpg";
import Sidearticles from "./Sidearticles";

const Article = () => {
  return (
    <>
      <article className="mb-[70px] flex flex-col min-[1440px]:flex-row min-[1440px]:gap-[30px] justify-start">
        <div className="grid grid-cols-1 w-full xl:grid-cols-2 min-[1440px]:mt-14">
          <div className="w-full mt-8 min-[1440px]:mt-0 xl:col-span-2">
            <img
              className="min-[720px]:hidden visible"
              src={Image}
              alt="Abstract Image"
            />
            <img
              className="hidden min-[720px]:flex w-full h-full"
              src={Image_desc}
              alt="image"
            />
          </div>
          <div className="w-full mt-7 min-[1440px]:mt-10">
            <h1 className="text-[40px] font-[800] tracking-[0.01em] leading-[40px] min-[1440px]:text-[56px] min-[1440px]:tracking-[0.005em] min-[1440px]:leading-[56px]">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div className="flex flex-col mt-7 min-[1440px]:mt-10">
            <p className="text-[15px] leading-[26px] text-dark_blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a
              href="#"
              target="_blank"
              className="w-fit mt-7 text-[14px] tracking-[0.32em] uppercase font-bold text-white_c py-[20px] px-[34px] bg-red_c hover:cursor-pointer hover:bg-black_c"
            >
              read more
            </a>
          </div>
        </div>
        <div className="mt-16 min-[1440px]:mt-0 w-full bg-black_c flex flex-col px-[22px] col-span-1 min-[1440px]:w-[480px] min-[1440px]:mt-14">
          <div className="mt-7">
            <h2 className="text-[32px] font-[700] text-orange_c">New</h2>
          </div>
          <div className="flex flex-col mt-[42px]">
            <Sidearticles
              c_class="mb-9"
              heading="Hydrogen VS Electric Cars"
              content="Will hydrogen-fueled cars ever catch up to EVs?"
            ></Sidearticles>
            <hr className="text-white_c" />
            <Sidearticles
              c_class="mt-9 mb-9"
              heading="The Downsides of AI Artistry"
              content="What are the possible adverse effects of on-demand AI image generation?"
            ></Sidearticles>
            <hr className="text-white_c" />
            <Sidearticles
              c_class="mt-9 mb-9"
              heading="Is VC Funding Drying Up"
              content="Private funding by VC firms is down 50% YOY. We take a look at what that means"
            ></Sidearticles>
          </div>
        </div>
      </article>
    </>
  );
};
export default Article;
