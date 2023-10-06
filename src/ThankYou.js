import './ThankYou.css';
import BlueTick from './images/BlueTick.png'

function ThankYou() {
    return (
        <div className='outerBox'>
        <div className='box'>
            <div className='message'>
                Thank you, your form has been submitted!
            </div>
            <div className='blue-tick'>
                <img src={BlueTick} alt="Blue-Tick-Successful" />
            </div>
            </div>
        </div>
    )
}

export default ThankYou;