import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel() {
  return (
    <Carousel fade className='w-full h-screen object-cover cursor-pointer' interval={2000} indicators={false}>

      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <a href='https://merimaatimeradesh.gov.in/'><img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100 h-screen' /></a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100 h-screen'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100 h-screen'/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}