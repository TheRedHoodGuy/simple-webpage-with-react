import Navbar from './Navbar'
import Sidemenu from './Sidemenu'
import Logo from '../../assets/images/logo.svg'

const Headcomp = () => {
    return (
        <>
            <header className="flex w-full items-center mt-7 min-[1440px]:mt-[90px]">
                <div>
                    <img className="w-[45px]" src={Logo} alt="Logo" />
                </div>
                <div className='hidden'>
                    <Navbar />
                </div>
                <div className='ml-auto'>
                    <Sidemenu />
                </div>
            </header>
        </>
    );
}

export default Headcomp