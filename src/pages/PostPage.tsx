import { postAPI } from "@/app/services/PostService";
import PostList from "@/components/PostList";
import Loader from "@/components/UI/loader/loader";


const PostPage: React.FC = () => {
    const {error,isLoading } = postAPI.useFetchAllPostsQuery()

    return (
       <>   
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка</h1>}
            <PostList/>
       </>
    );
};

export default PostPage;

