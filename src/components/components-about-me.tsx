import Image from 'next/image';
import { Button } from './ui/button';

function AboutMeComponent() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id='about'  className="text-black inline-block  px-4 py-2 text-xl mb-8 mt-20 font-bold" style={{
        width: '187px',
        border: '3px solid black',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.2em', // Use Montserrat font
      }}>
          ABOUT ME
        </h2>
        <p className="text-gray-600 mb-8">
        My name is Hassan, I am 17 years old, and currently, I am a 1st-year student. Along with my regular studies, I am also pursuing an IT course at the prestigious Governor House, where we are currently learning advanced technologies like Next.js. With a keen interest in web development and a passion for staying updated with modern frameworks, I am eager to grow my skills and knowledge in this field.
        </p>
        <a href="https://www.linkedin.com/in/hassan-rj-148220295/" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="mb-12 text-black mt-10" style={{borderRight: '3px solid #1f2937', borderLeft: '3px solid #1f2937'}}>
    EXPLORE
  </Button>
</a>


        <div className="relative w-full mb-40 flex justify-center mt-12" >
          <Image 
            src="https://s3-alpha-sig.figma.com/img/07c0/d9fd/8d83d78972a938739280579decfc2333?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAlat6rJXfprrWRIC0zhrgYb33ZHyEGetJnsvKK2YfL6epBCBwZxHFlJ7RpR0Cdh9ViM37obiRGwW~UuCxSijALxgqP0xGWjSzzUjdkvrS5oftbPK~Cs6WxmXQWVIGc2FL31LUd9NokJKnzlPcHFwNlmniZ6jMMcKApzVgef88GMIbxx39RLWkKM9YS9hnZZMpmGemr6WKFUsUOt18F4Vl~QdcvvRlTIUShPY68ZjeIfNxyWgbbnUr1r12QkI0hIkWGTyTfgEGBqVFCyu6ISWVwWsLZsX~Yv0tGdy~ZuFhl5Vcua4rjHbd4hpThlHzgv7rc3bAhw6tSAZR3kuQslqQ__"
            alt="About Me Image" 
            width={233}
            height={1}
          />
        </div>
        
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">DESIGN</h3>
              <p className="text-gray-600">
              I specialize in creating visually appealing logos and graphic elements using tools like Photoshop, Illustrator, and AI-based design solutions. I have hands-on experience in crafting unique, brand-specific logos and ensuring that designs align with modern trends and user preferences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">DEVELOPMENT</h3>
              <p className="text-gray-600">
              With a solid foundation in HTML, CSS, and Next.js, I develop interactive and responsive websites. I have completed several projects that demonstrate my ability to build dynamic user experiences, and I am always looking for ways to enhance functionality and performance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">LEARNING</h3>
              <p className="text-gray-600">
              As an IT enthusiast, I am continuously expanding my knowledge in Web 3.0, blockchain, and emerging technologies. My current focus is on mastering full-stack development and exploring new frameworks to stay ahead in the rapidly evolving tech landscape.


              </p>
            </div>
          </div>
        
        <div className="relative w-full mb-12 flex justify-center mt-40" >
          <Image 
            src="https://s3-alpha-sig.figma.com/img/07c0/d9fd/8d83d78972a938739280579decfc2333?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAlat6rJXfprrWRIC0zhrgYb33ZHyEGetJnsvKK2YfL6epBCBwZxHFlJ7RpR0Cdh9ViM37obiRGwW~UuCxSijALxgqP0xGWjSzzUjdkvrS5oftbPK~Cs6WxmXQWVIGc2FL31LUd9NokJKnzlPcHFwNlmniZ6jMMcKApzVgef88GMIbxx39RLWkKM9YS9hnZZMpmGemr6WKFUsUOt18F4Vl~QdcvvRlTIUShPY68ZjeIfNxyWgbbnUr1r12QkI0hIkWGTyTfgEGBqVFCyu6ISWVwWsLZsX~Yv0tGdy~ZuFhl5Vcua4rjHbd4hpThlHzgv7rc3bAhw6tSAZR3kuQslqQ__"
            alt="About Me Image" 
            width={233}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMeComponent;
