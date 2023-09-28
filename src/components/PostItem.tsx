import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { IPostItem } from '@/modules/PostItem';

const PostItem: React.FC<IPostItem> = ({id, title, body}) => {

    const navigate = useNavigate();
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
  
    return (
        <div className='card' ref={ref} key={id}>
            {
                inView 
                && (<>
                    <p className='cart__number'>{id}</p>
                    <p className='card__title'>{title} </p>
                    <p className='card__descr'>{body}</p>
                
                    <MyButton clickHandler={() => navigate(`/TEST_Picasso/${id}`)}>просмотр</MyButton>
                </>) 
            }
           

        </div> 
    );
};

export default PostItem;
