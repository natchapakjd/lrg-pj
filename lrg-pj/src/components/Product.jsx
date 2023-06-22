import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FcGoogle } from "react-icons/fc";
import { RxCross1} from "react-icons/rx";

import "./Product.css"
function Product() {
  return (
    
    <div className='container'>
          <div className='products-con'>

                  <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWvwU0.png" />
                        <Card.Body>
                          <Card.Title className = "title">ม็อบ (เหลือจำนวน 20 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 25 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/06/I0eVR2.png" />
                        <Card.Body>
                          <Card.Title className = "title">ม็อบอัลตร้า (เหลือจำนวน 1 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 79 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>
                
                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/15/IbeJJD.png" />
                        <Card.Body>
                          <Card.Title className = "title">ม็อบ + เรเก็น (เหลือจำนวน 1 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 99 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/15/IbeGoy.png" />
                        <Card.Body>
                          <Card.Title className = "title">ม็อบ + เรเก็นร่างอัลตร้า (เหลือจำนวน 1 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 119 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>
                  

                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWGwJW.png" />
                        <Card.Body>
                          <Card.Title className = "title">เรเก็น (เหลือจำนวน 14 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 10 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWvF7u.png" />
                        <Card.Body>
                          <Card.Title className = "title">เรเก็นร่างอัลตร้า (เหลือจำนวน 2 ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: 25 บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                 
               
                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/12/IcgGd9.png" />
                        <Card.Body>
                          <Card.Title className = "title">ไอดีไก่รูบี้ (เหลือจำนวน <RxCross1 className='cross'/> ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด:ไอดีไก่รูบี้ เล่นถึงด่าน150 มีรูบี้ 1200+ ตั๋ว60+ สะอาด100% ทุกไอดียังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: <RxCross1 className='cross'/> บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>
                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWvtNR.png" />
                        <Card.Body>
                          <Card.Title className = "title">เจมส์มืด  (เหลือจำนวน <RxCross1 className='cross'/> ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 เชื่อม<FcGoogle/></p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: <RxCross1 className='cross'/> บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWvNZb.png" />
                        <Card.Body>
                          <Card.Title className = "title">บราวน์มายากล (เหลือจำนวน <RxCross1 className='cross'/> ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 เชื่อม<FcGoogle/></p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: <RxCross1 className='cross'/> บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                
                 <div className="products-item">
                    <Card>
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWvEUE.png" />
                        <Card.Body>
                          <Card.Title className = "title">สล็อต  (เหลือจำนวน <RxCross1 className='cross'/> ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 เชื่อม<FcGoogle/></p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: <RxCross1 className='cross'/> บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

                 
                 <div className="products-item">
                    <Card >
                        <Card.Img className ="card-img " variant="top" src="https://sv1.picz.in.th/images/2023/06/05/IWG5oa.png" />
                        <Card.Body>
                          <Card.Title className = "title">ริทสึร่างอัลตร้า (เหลือจำนวน <RxCross1 className='cross'/> ไอดี)</Card.Title>
                          <Card.Text>
                            <p className ="card-content">รายละเอียด: ป้ายเหลืองเวล 2-3 ยังไม่ได้เชื่อม</p>
                          </Card.Text>
                          <div>
                            <p className='bt-text'>Price: <RxCross1 className='cross'/> บาท</p>
                            <Button className = "button"variant="primary"><a className = "bt-text" href ="https://www.facebook.com/rebron.inwrebron.9">สั่งซื้อ</a></Button>

                          </div>
                        </Card.Body>
                      </Card>
                 </div>

          </div>
    </div>
  
    
  );
}

export default Product;