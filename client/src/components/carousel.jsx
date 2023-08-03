import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel() {
  return (
    <Carousel fade className='w-100 object-fill' interval={2000}>

      <Carousel.Item className='bg-black h-full w-full object-contain'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-contain'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100'/>
        <Carousel.Caption>
          Hemlo
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-contain'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='w-100'/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}