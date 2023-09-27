import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface PostItem {
    id: number,
    title: string,
    descr: string
}

const PostItem: React.FC<PostItem> = ({id, title, descr}) => {
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
                    <p className='card__descr'>{descr}</p>
                
                    <MyButton clickHandler={() => navigate(`/React_book/${id}`)}>просмотр</MyButton>
                </>) 
            }
           

        </div> 
    );
};

export default PostItem;
