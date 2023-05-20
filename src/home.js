import React from 'react'
import Banner from './images/b.png';
import "./home.css";
import Product from './Product';
import Productimage from './images/p.png';
import Mixer from './images/mixer.png'
import Suitcase from './images/suitcase.png'
import Teddy from './images/teddy.png'
import Watch from './images/watch.png'
import Bud from './images/buds.png'
import Gas from './images/gas.png'
import Cloth from './images/cloth.png'
import Men from './images/men.png'
import TV from './images/tv.png'
function home()
{

return(
  <div className=''>
    <div className='home__image' >

    <img src={Banner} alt='' /></div>
    
      <div className='home_row home'>
        <Product
          id="11556688"
          title="Amazon(3rd Gen)-Smart speaker with Alexa(Black)"
          price={1100}
          rating={5}
          image={Productimage}
        />
        <Product
          id="11556687"
          title="Cookwell Bullet Mixer Grinder (5 jars)"
          price={2750}
          rating={3}
          image={Mixer}
        /></div>
      <div className='home_row'>
        <Product
          id="11556685"
          title="NOVEX Dublin polycarbonate Hard sidede luggage set of 3 Trolleys bags(20,24,28)/Trolley luggage/4Wheel Luggage/Trolley Suitcase"
          price={7999}
          rating={4}
          image={Suitcase}
        />
         <Product
          id="11556683"
          title="Amazon Brand -Jam &Honey Pink Teddy 33 cm bear teddy"
          price={4000}
          rating={5}
          image={Teddy}
        />     
        <Product
          id="11556682"
          title="Ptron Force x12N 1.85 Full Touch HD Display Bluetooth Calling Brightness,HR,SpO2,Watch Faces,Inbuilt Games,5Days Battery Life& IP68 Waterprrof(Pink)"
          price={2200}
          rating={4}
          image={Watch} />

      </div>
      <div className='home_row'>
        <Product
          id="11556622"
          title="Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic,Upto21 hours Playtime,Mystic Black"
          price={3358}
          rating={3}
          image={Bud}
        /> <Product
          id="11556618"
          title="BlowHot Ruby 2 Burners Gas Stove Manual Ignition Heavy Brass Coated Burners ,Heavy Black Powder Coated BOdy-1 Year general Warranty"
          price={2190}
          rating={5}
          image={Gas}
        />     <Product
          id="11556614"
          title="Dream Beauty Fashion Women's Puff Sleeve Round Neck Top Ballon Bishop Sleeve Elegant Casualb Tee 23 "
          price={283}
          rating={2}
          image={Cloth}
        /> <Product
          id="11556611"
          title="Fanideaz Men's Cotton Full Sleeve Henley T Shirts for Men"
          price={699}
          rating={5}
          image={Men}
        />
      </div>
      <div className='home_row'>
        <Product
          id="11556041"
          title="MI 80 cm (32inches)5A Series HD Ready Smart Android LED TV L32M7-SAIN(Black)"
          price={13799}
          rating={4}
          image={TV}
        />
      </div>
    </div>
  );
}

export default home;
