import "./Home.css"
import {AiFillBell} from 'react-icons/ai'
import Product from "./Product"
import Footer from "./Footer"
import {FaYoutube} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
const Home = () => {
  return (
    <div className="container">
        <div className="home-template">
            <div className="banner">
              <img src="https://sites.google.com/site/5xabdabkhahawonepiece/_/rsrc/1506772179952/onepiece/phea-mangkr-fa/683800382.jpg?height=291&width=400" alt="banner" />  
            </div>
            <div className="message-con">
                <div className="mes-details">
                    <div className="mes-left"><AiFillBell className="bell-logo"></AiFillBell></div>
                    <div className="mes-right">
                      <p><FaYoutube className="yt-logo"/>เทพราชาบอล</p>
                      <p><FaFacebook className="fb-logo"/>เทพราชาบอล แห่งเผ่ามังกรฟ้า</p>
                    </div>
                </div>
            </div>
            <div className="catagories">
              <p>ประเภทสินค้าที่จำหน่าย</p>
              <div className="cat-content">
                <div className="yellow-sign"><img src="https://sv1.picz.in.th/images/2023/06/05/IWGAiu.png" alt="yellow-sign-img" /> </div>
                <div className="kai-ruby"><img src="https://sv1.picz.in.th/images/2023/06/05/IWGlVR.png" alt="kairuby-img" /> </div>
              </div>
            </div>

            <div className="reccom-container">
              <div className="reccom-text">              
                <p>รายการสินค้า</p>
              </div>
              <div className="reccom-content">
                <Product></Product>
              </div>
            </div>
           
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home