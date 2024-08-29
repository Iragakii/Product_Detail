import React from 'react'
import ProductJs from './ProductJs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat,faHeart,faBagShopping,faEarthAmericas,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import SliderJs from './SliderJs';

function ProductDetail() {

  return (
    <>
   
    
    <div className="header">
            <div className="logo">
                       <a href='ira'> <img
                        src={ require('../asset/z5515289576589_7c058af3ecae0bf7aa15794d1a56b014-removebg-preview.png')}
                        alt="abcxyz"></img></a>
            </div>
            <div className="mid-header">
                <a href='ira'><span>New & Featured</span></a>
                <a href='ira'><span>Men</span></a>
                <a href='ira'><span>Women</span></a>
                <a href='ira'><span>Kids</span></a>
                <a href='ira'><span>Sale</span></a>
                <a href='ira'><span>Customise</span></a>
                <a href='ira'><span>SNKRS</span></a>
            </div>
            <div className="last-header">
                <div className="search-header">
                <FontAwesomeIcon className='iconCat' icon={faCat} /><input
                        type="text" placeholder="Search"></input>
                </div>
                <div className="last-header-2">
                <FontAwesomeIcon className='iconHeart' icon={faHeart} />
                <FontAwesomeIcon className='iconBag' icon={faBagShopping} />
                </div>
            </div>
        </div>
        {/* header */}
        <section className="body-product">

            <div className="product-img">
                <div className="product-img-small">
                    <img src={ require('../asset/luka-2-pf-basketball-shoes-N6gmH9 (1).png')}
                        alt="" />
                    <img
                        src={ require('../asset/luka-2-pf-basketball-shoes-N6gmH9 (2).png')}
                        alt="" />
                    <img
                        src={ require('../asset/luka-2-pf-basketball-shoes-N6gmH9 (6).png')}
                        alt=""/>
                    <img
                        src={ require('../asset/luka-2-pf-basketball-shoes-N6gmH93.png')}
                        alt=""/>
                </div>
                <div className="product-img-big">
                    <img
                        src={require('../asset/luka-2-pf-basketball-shoes-N6gmH9.png')}
                        alt="">
                        </img>
                </div>

            </div>
            <div className="product-text">
                <div className="product-title">
                    <span>Air Jordan 9 G</span>
                    <p>Golf Shoes</p>
                </div>
                <div className="product-price-2">
                    <span>6,666,666 <sup>đ</sup></span>
                </div>
                <div className="product-size">
                    <span>Select size</span>
                    <div className="product-select-size">
                        <button>EU 40</button>
                        <button>EU 40.5</button>
                        <button>EU 41</button>
                        <button>EU 41.5</button>
                        <button>EU 42</button>
                        <button>EU 42.5</button>
                    </div>
                </div>
                <div className="product-add-button">
                    <div className="button-1"><button>Add to Bag</button></div>
                    <div className="button-2"><button>Favourite</button></div>
                </div>
            </div>
            <ProductJs></ProductJs>
            
        </section>
        {/* Slidershow */}
       
        <section>
            <div className='Like'>
            <span >YOU MIGHT ALSO LIKE</span>
            </div>

            <div className='box-container'>
                <div className='glider-contain'>
                    <FontAwesomeIcon className='chevron-fa-two' icon={faChevronLeft} />
                    <FontAwesomeIcon className='chevron-fa-one' icon={faChevronRight} />
                </div>
                <div className='box-box'>
                    <div className='box-slider'>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/tatum-2-legacy-pf-basketball-shoes-WWbXXKs.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Force </span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/zion-3-rising-pf-basketball-shoes-txLZ0h.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Fire Fly  </span>
                                </div>
                                <div className='product-type'>
                                    <span>Women's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/tatum-2-pf-basketball-shoes-8fp79D.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Ocean </span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/tatum-2-sidewalk-chalk-pf-basketball-shoes-SjC3nsc.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Pink Dream</span>
                                </div>
                                <div className='product-type'>
                                    <span>Women's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>  
                    <div className='box-slider'>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/jumpman-mvp-shoes-JV1HCs.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Jump Man 9F</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/jordan-stay-loyal-3-shoes-GNHN2X3.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Nike Royal</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/air-jordan-1-mid-shoes-BpARGV.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Air Jordan 1</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                        <div className='product-box'>
                            <div className='p-img-container'>
                                <div className='p-img'>
                                    <a href='iragaki'> 
                                        <img src={require('../asset/luka-2-pf-basketball-shoes-N6gmH9.png')} alt='abc'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='p-box-text'>
                                <div className='product-category'>
                                    <span>Air Jordan 1</span>
                                </div>
                                <div className='product-type'>
                                    <span>Men's Shoes</span>
                                </div>
                                <div className='price'>
                                <span>6,666,666 <sup>đ</sup></span>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>  
                </div>
                <SliderJs></SliderJs>
            </div>
            

            
            
            
        </section>
       
        {/* footer */}
        <div className="footer">
            <div className="footer-des">
                <div className="footer-des-1">
                    <div className="des-1-1">
                        <span>Resources</span>
                    </div>
                    <a href><p>Find A Store</p></a>
                    <a href><p>Become A Member</p></a>
                    <a href><p>Send Us Feedback</p></a>
                    <a href><p>Find A Store</p></a>
                    <a href><p>Become A Member</p></a>
                    <a href><p>Send Us Feedback</p></a>
                </div>
                <div className="footer-des-1">
                    <div className="des-1-1">
                        <span>Help</span>
                    </div>
                    <a href><p>Get Help</p></a>
                    <a href><p>Order Status</p></a>
                    <a href><p>Delivery</p></a>
                    <a href><p>Returns</p></a>
                    <a href><p>Payment Options</p></a>
                    <a href><p>Contact Us</p></a>

                </div>
                <div className="footer-des-1">
                    <div className="des-1-1">
                        <span>About Nike</span>
                    </div>
                    <a href><p>About Nike</p></a>
                    <a href><p>News</p></a>
                    <a href><p>Careers</p></a>
                    <a href><p>Investors</p></a>
                    <a href><p>Sustainability</p></a>
                </div>

            </div>
            <div className="footer-vietnam">
            <FontAwesomeIcon className='iconE' icon={faEarthAmericas} />
                <a href ='ira'><span>Vietnam</span></a>

            </div>
        </div>
        <div className="last-footer">
            <div className="last-1">
                <span>© 2024 Nike, Inc. All rights reserved </span></div>
            <a href='ira'><p>Guides</p></a>
            <a href='ira'><p>Terms of Sale</p></a>
            <a href='ira'><p>Terms of Use</p></a>
            <a href='ira'><p>Nike Privacy Policy</p></a>
        </div>
        
       
    </>
  ) 
}

export default ProductDetail;
