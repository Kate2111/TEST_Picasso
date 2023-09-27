import PostList from "@/components/PostList";
import Loader from "@/components/UI/loader/loader";
import { postAPI } from "@/services/PostService";

const PostPage: React.FC = () => {
    const {error,isLoading } = postAPI.useFetchAllPostsQuery()
    //const sortedAndSearchedBooks = useSearchedBooks({ bookArr, sort: filter.sort, query: filter.query })

    return (
       <>   
            {isLoading && <Loader/>}
            {error && <h1>Произошла ошибка</h1>}
            <PostList/>
       </>
    );
};

export default PostPage;

/* 
<MyButton onClick={() => setModal(true)}>Add book to list</MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <BookForm  
                    bookArr={bookArr} 
                    setBook={setBook} 
                    setVisible={setModal}
                />
            </Modal>
            
            <BookFilter 
                filter={filter}
                setFilter={setFilter}
            />

            {
                sortedAndSearchedBooks.length 
                ?   <BookList 
                        bookArr={sortedAndSearchedBooks} 
                    /> 
                : <Loader/>
            }  */