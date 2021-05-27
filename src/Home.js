import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://previews.123rf.com/images/esvetleishaya/esvetleishaya1905/esvetleishaya190500116/123958404-brick-wall-wide-panorama-of-masonry-wall-with-small-bricks-modern-wallpaper-design-for-web-or-graphi.jpg" alt=""/>

                <div className="home_row">
                    <Product
                        id="0000001"
                        title="Harry Potter y la piedra filosofal / Harry Potter and the Sorcerer's Stone (Spanish Edition)
                    by J.K. Rowling"
                        price={19.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg'
                        ratting={5}
                    />
                    <Product
                        id="0000002"
                        title='Apple iPhone XS Max, Fully Unlocked, 64 GB - Gold (Renewed)'
                        price={600.00}
                        image='https://ipartner.com.ua/image/cache/catalog/imgmainru2_250/clearapple-iphone-x-64gb-silver-serebristij-680x630.jpeg'
                        ratting={4}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="0000003"
                        title='J.A. Henckels International Classic Chef Knife, 8 Inch, Kitchen Knife, Black'
                        price={5.78}
                        image='https://cdn.cutleryandmore.com/products/large/34250.jpg'
                        ratting={2}
                    />
                    <Product
                        id="0000004"
                        title='Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel'
                        price={350.50}
                        image='https://kenwood-shop.com.ua/modules/images/kenwood_kvc_3170_s_chef_a.jpg'
                        ratting={5}
                    />
                    <Product
                        id="0000005"
                        title="Hanes Men's ComfortSoft Short Sleeve T-Shirt"
                        price={10.99}
                        image='https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg'
                        ratting={2}
                    />
                </div>

                <div className="home_row">
                    <Product
                        id="0000006"
                        title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV '
                        price={800.00}
                        image='https://images.samsung.com/is/image/samsung/levant-c43j89-lc43j890dkmxzn-frontblack-119791121?$LazyLoad_Home_IMG$'
                        ratting={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home