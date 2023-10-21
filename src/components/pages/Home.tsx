import BookingSteps from "../organs/BookingSteps"
import BookingSteps1 from "../organs/BookingSteps1"
import HeroSection from "../organs/HeroSection"
import NewsLetter from "../organs/NewsLetter"
import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Services1 from "../organs/Services1"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
      <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
    <img src="https://i0.wp.com/londonbeatsandfestivals.co.uk/wp-content/uploads/2023/06/logo-color-1-e1686365676100.png" style={{ display: 'inline-block', width: '150px', height: 'auto' }} alt="Image 1" />
    <img src="https://www.asian-voice.com/bundles/core/images/AsianVoice-placeholder.png" style={{ display: 'inline-block', width: '150px', height: 'auto' }} alt="Image 2" />
    <img src="https://www.harrow.gov.uk/images/News_story_inline.png" style={{ display: 'inline-block', width: '150px', height: 'auto', marginRight: '10px' }} alt="Image 3" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Coat_of_arms_of_the_London_Borough_of_Harrow.svg/1200px-Coat_of_arms_of_the_London_Borough_of_Harrow.svg.png" style={{ display: 'inline-block', width: '150px', height: 'auto', marginRight: '10px' }} alt="Image 4" />
    
    
  </div>
  </div>
            <HeroSection />
            <BookingSteps1 />
            <Services1 />
            <BookingSteps />
            
            

           {/* <Services /> */}
{/* <Partners /> */}
{/* <TopDestination /> */}
{/* <Testimonials /> */}
{/* <NewsLetter /> */}
        </>
    )
}

export default Home