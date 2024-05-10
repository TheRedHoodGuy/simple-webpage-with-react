import X from '../../assets/images/icon-menu-close.svg'
import Menu from '../../assets/images/icon-menu.svg'

const Sidemenu = () => {
    return(
        <>
            <div>
                <img className="w-10" src={Menu} alt="Menu" />
                <section className='absolute hidden'>
                    <div>
                        <img src={X} alt="Close" />
                    </div>
                    <nav>
                        <ul>
                        <li><a className="text-sm" href="#" target="_blank">Home</a></li>
                        <li><a className="text-sm" href="#" target="_blank">New</a></li>
                        <li><a className="text-sm" href="#" target="_blank">Popular</a></li>
                        <li><a className="text-sm" href="#" target="_blank">Trending</a></li>
                        <li><a className="text-sm" href="#" target="_blank">Categories</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </>
    );
}

export default Sidemenu