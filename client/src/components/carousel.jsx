import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel() {
  return (
    <Carousel fade className='w-full h-screen object-cover cursor-pointer' interval={2000} indicators={false}>

      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <img src="https://www.tickertape.in/blog/wp-content/uploads/2022/06/TT-21-June-Top-10-government-girl-child-BB-scaled-1200x1200-cropped.jpg" alt="Image1" className='w-100 h-screen' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <img src="https://nift.ac.in/delhi/sites/delhi/files/2021-09/Shreyas%20Ghode-%203rd%20Prize.jpg" alt="Image1" className='w-100 h-screen'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='bg-black h-full w-full object-cover'>
        <img src="https://d1auykqeekwe79.cloudfront.net/wp-content/uploads/2023/12/Startup-India.png" alt="Image1" className='w-100 h-screen'/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}