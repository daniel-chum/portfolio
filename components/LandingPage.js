import cn from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


const LandingPage = (props) => {

    return (
      <section
        className={
          cn('h-screen bg-primary transition transform ease-in-out duration-1000',
            'flex justify-center items-center',
            { "-translate-y-full": props.scrolled },

          )
        }
        onWheel={props.scrollDown}
        onTouchStart={props.scrollDown}
        onTouchMove={props.scrollDown}
      >
        <div className="font-open-sans text-word h-1/2">
          <h2 className="animate-show text-secondary-dark text-xl">Hello! My name is</h2>
          <h1 className="pt-6 font-lora font-medium text-8xl">
            <span>Daniel Chum.</span>
            <br />
            <span className='block pt-1'>I am a Software Engineer.</span>
          </h1>
          <h3 className="text-3xl tracking-tight font-light text-secondary pt-10">I analyze problems and implement solutions with code, through and through.</h3>
          <div className='flex flex-col items-center pt-16'>
            <h2 className='text-lg text-secondary-dark'>See more about me.</h2>
            <div className='pt-4 animate-arrowDown' onClick={props.scrollDown}>
              <FontAwesomeIcon icon={faAngleDoubleDown} size='3x' className='text-secondary-dark h-4 cursor-pointer'/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default LandingPage;
