import Headcomp from './components/Pageheader/Headcomp.jsx'
import Article from './components/Mainarticle/Article.jsx'
import Imagesection from './components/Imagesection/Imagesection.jsx'

let App = () => {
  return (
    <>
      <div className="min-[1440px]:mx-[164px] min-[1280px]:mx-[80px] min-[1000px]:mx-[40px]">
        <Headcomp />
        <Article />
        <Imagesection />
      </div>
    </>
  )
}

export default App