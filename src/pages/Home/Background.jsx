
import bgImg from '../../assets/images/img-pattern.png';

const Background = () => {
    return (
        <div className='my-10 md:my-0'>
            <img src={bgImg} className='w-full object-cover' alt="" />
        </div>
    );
};

export default Background;


