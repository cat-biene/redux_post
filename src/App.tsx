import { useEffect } from "react";
import PostsList from "./components/PostsList/PostsList";
import { useDispatch } from "react-redux";
import { RootDispatch } from "./store/store";
import { loadPosts } from "./store/slices/postsSlice";

function App() {

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
     dispatch(loadPosts());
  }, []);

  return (
    <div>
      <PostsList/>
    </div>
  );
}

export default App;
