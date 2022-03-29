import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/actionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(s => s.user);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <PostContainer/>
    </div>
  );
}

export default App;
