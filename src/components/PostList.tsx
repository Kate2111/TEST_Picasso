import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useFetchAllPostsQuery } from '@/services/PostService';


const PostList: React.FC = () => {
    const {data: postArray} = useFetchAllPostsQuery();

    return (
        <div className='wrapper-book'>
            <TransitionGroup>
                {   
                    postArray && postArray.map(item=>{
                            return  <CSSTransition
                                        key={item.id}
                                        timeout={500}
                                        classNames="item"
                                    >
                                        <PostItem
                                            id={item.id}
                                            title={item.title}
                                            descr={item.body}
                                        />
                                    </CSSTransition>
                    })
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;