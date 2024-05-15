
import bgImg from '../../assets/images/img-pattern.jpg';

const Background = () => {
    return (
        <div>
            <img src={bgImg} className='w-full object-cover' alt="" />
        </div>
    );
};

export default Background;


