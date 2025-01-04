import React from 'react';
import './TestimonialSection.css'; // Import the CSS for styling
// import '../../style.css';
// Import images from the assets folder
import giftImage from '../../assets/images/gift.jpg'; // Replace with actual image path
import balloonsImage from '../../assets/images/Balloons.jpg'; // Replace with actual image path

const TestimonialSection = () => {
  return (
<section class="testimonial-section bg-pastel-green py-12 px-6">
    <div class="container mx-auto flex flex-col md:flex-row items-stretch"> 
        {/* <!-- Left Image --> */}
        <div class="testimonial-image left-image">
            <img src={giftImage} alt="Customer" class="rounded-bottom-left" />
        </div>

        {/* <!-- Testimonial Text --> */}
        <div class="testimonial-text text-left px-4 flex flex-col justify-center">
            <p class="testimonial-quote text-xl italic mb-2">
                <span class="highlight">"I loved getting a Local Gift
and the experience was
ipsum dolor sit amet,
consectetur adipiscing elit!"</span>  
            </p>
            <p class="testimonial-author text-sm text-gray-600">-- Stephanie, 
              <p>
                "SantaBarbara, CA"
              </p>
            </p>
        </div>

        {/* <!-- Right Image --> */}
        <div class="testimonial-image right-image">
          <img src={balloonsImage} alt="Customer" class="rounded-top-right" />
        </div>
    </div>

    {/* <!-- Pagination Dots --> */}
    {/* <div class="pagination-dots flex justify-center mt-4">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div> */}
</section>
  );
};

export default TestimonialSection;