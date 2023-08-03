import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel() {
  return (
    <Carousel fade className='h-full' interval={2000}>

      <Carousel.Item className='bg-black'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='max-h-[35rem] h-full' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='max-h-[35rem] h-full'/>
        <Carousel.Caption>
          Hemlo
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black'>
        <img src="https://www.iitb.ac.in/sites/www.iitb.ac.in/themes/touchm/azadig20_logo.png" alt="Image1" className='max-h-[35rem] h-full'/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}