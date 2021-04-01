import Head from 'next/head'
import { offer1, offer2, offer3, offer4 } from '../constants/svgs';
import styles from '../styles/Home.module.css'
import Slider from "react-slick";


export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: 
    // nextArrow: <i class="fa fa-angle-right fa-3x nextArrow" aria-hidden="true"></i>
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
<>
<i class="fa fa-angle-right fa-2x" onClick={onClick} style={{ ...style,bottom:50, right:40, cursor:'pointer', zIndex:1111, position:'absolute', marginRight:100,zIndex:1111, position:'absolute', display: "block", background: "white", borderRadius:100, padding:15, width:100, height:100, display:'flex', justifyContent:'center', alignItems:'center' }}></i>,

</>      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
<>
<i class="fa fa-angle-left fa-2x" onClick={onClick} style={{ ...style, bottom:50, right:280, zIndex:1111, cursor:'pointer', position:'absolute', display: "block", background: "white", borderRadius:100, padding:15, width:100, height:100, display:'flex', justifyContent:'center', alignItems:'center' }}></i>,

</>      
    );
  }
  return (
    <>
      <Head>
        <title>About Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.bg_wrap}>
            <div className={styles.navHeader}>
                <img style={{height:120, width:130}} src='https://lh3.googleusercontent.com/proxy/_yYIuqIwRbjfNr8h77PrEY-l4VwizN4yyVDiPM_X822Few-H2dJ2Au1-B6FYrO601iz2xt0BjjKS_GwPsrtcZrT1gecKNG-SX02AjjkmIWXOptDUOK16yA1irObk0CI'  />
                <div className={styles.hero_left}>
                    <h1>A new era of shopping</h1>
                    <p>The fastest-growing shopping application in Europe</p>
                </div>
            </div>
            <div className={styles.gooey_rec}>
            <div className={styles.images}>
                <img className={styles.img1} src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone3-232x457.webp" alt=""/>
                <img className={styles.img2} src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone1-232x457.webp" alt=""/>
                <img className={styles.img3} src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone4-232x457.webp" alt=""/>
                <img className={styles.img4} src="https://resources.joomcdn.net/about-page/langs/en/iphones/iphone2-232x457.webp" alt=""/>
            </div>
        </div>
        </div>

        <div className={styles.container_2}>
            <div className={styles.child_1}>
                <h1>over 250,000,000</h1>
            <p>users on iOS, Android, Web</p>
            </div>
            <div className={styles.child_2}>
               <div className={styles.containerApple}>
               <div className={styles.appleBtn}>
               <i class="fa fa-apple fa-3x" style={{color:'#BF62B4'}} aria-hidden="true"></i>
               </div>
               <div>
               <p style={{fontSize:26, width:180}}>{`Top 5 in App Store in 2018`}</p>
               </div>
               </div>
              <div style={{paddingLeft:20}} className={styles.containerApple}>
              <div className={styles.playBtn}>
               <i class="fa fa-play fa-3x" style={{color:'#F3A04D'}} aria-hidden="true"></i>
                </div>
                <div>
                  <p style={{fontSize:26, width:200, paddingLeft:10}}>Top 5 in Google Play in 2018</p>
                </div>
              </div>
            </div>
        </div>

        <div className={styles.offer_container}>
          <div className="container">
          <h1 className='text-center my-5' className={styles.offer_heading} style={{fontSize:58, fontWeight:'700', marginBottom:60}}>What We Offer</h1>
            <div className="row mt-5">
              <div className="col-md-5 col-sm-12 offer_left">
                <div style={{display:'flex', flexDirection:'row',  marginBottom:50}}>
                  <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>{offer1}</div>
                  <div><p className={styles.offer1_left_p} style={{fontSize:25, fontWeight:'600', paddingLeft:34, paddingTop:15, width:300}}>Mobile marketplace with website</p></div>
                </div>
                <div style={{display:'flex', flexDirection:'row',  marginBottom:50}}>
                  <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>{offer2}</div>
                  <div><p className={styles.offer1_left_p} style={{fontSize:25, fontWeight:'600', paddingLeft:34, paddingTop:15, width:300}}>Communication between sellers, buyers and bloggers</p></div>
                </div>
                <div style={{display:'flex', flexDirection:'row',  marginBottom:50}}>
                  <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>{offer3}</div>
                  <div><p className={styles.offer1_left_p} style={{fontSize:25, fontWeight:'600', paddingLeft:34, paddingTop:15, width:300}}>Personalization of products, discounts and special offers</p></div>
                </div>
                <div style={{display:'flex', flexDirection:'row',  marginBottom:50}}>
                  <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>{offer4}</div>
                  <div><p className={styles.offer1_left_p} style={{fontSize:25, fontWeight:'600', paddingLeft:34, paddingTop:15, width:300}}>High-quality and reliable logistics</p></div>
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
              <div>
              <div className={styles.gooey_rec2}></div>
                <div className={styles.images_offer}>
                <img className={styles.offer_img1} src="https://resources.joomcdn.net/about-page/langs/en/features/android-410x898.webp" alt="" srcset=""/>
                <img className={styles.offer_img2} src="https://resources.joomcdn.net/about-page/langs/en/features/iphone-446x874.webp" alt=""/>
                <img className={styles.offer_img3}src="https://resources.joomcdn.net/about-page/langs/en/features/laptop-1180x1100.webp" alt=""/>   
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>

     <div className="container mt-5">
     <hr/>
     </div>

      <div className={styles.container_contact}>
        <div className="container-fluid">
        <h1 className='text-center my-5' style={{fontSize:58, fontWeight:'700', marginBottom:60}}>How to Contact Us</h1>
          <div style={{alignItems:'center', display:'flex', marginTop:50, flexDirection:'column'}}>
            <p style={{fontSize:19, color:'#909092'}}>Legal address:</p>
            <p style={{fontSize:21}}>Riga, Gustava Zemgala Street, 78-1, LV-1039</p>
            <p style={{fontSize:19, color:'#909092'}}>Contact our PR & Media team — <span style={{textDecoration:'underline', color:'black'}}> pr@joom.com</span></p>
            <p style={{fontSize:19, color:'#909092'}}>For inquiries about your orders — <span style={{textDecoration:'underline', color:'black'}}> support@joom.com</span></p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12" style={{padding:0}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139178.88642206715!2d23.98907913051966!3d56.97158333493549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2s!4v1617255623519!5m2!1sen!2s" width="100%" height="680" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="col-md-6 col-sm-12" style={{padding:0}}>
            <div style={{marginTop:-23}}>
        <Slider {...settings}>
       
          <div>
           <img style={{width:'100%', height:674, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/1-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:674, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/2-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:674, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/3-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:674, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/4-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:670, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/5-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:676, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/6-1440x1440.webp" alt=""/>
          </div>
          <div>
           <img style={{width:'100%', height:676, objectFit:'cover'}} src="https://resources.joomcdn.net/about-page/offices/7-1440x1440.webp" alt=""/>
          </div>
         
        </Slider>
      </div>
            </div>
          </div>
        </div>
      </div>

      
      </>
  );
}
