import React from "react";
import { useSelector } from "react-redux";
import { FetchPosts } from "../../Actions/Index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Blog from "../Blog/Blog";

const Posts = () => {
  const state = useSelector((state) => state.fetchedPosts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchPosts());
    console.log(state);
  }, []);

  const RenderPosts = () => {
    return state.map((el) => <Blog key={el.id} idNumber={el.id} title={el.title} body={el.body} />);
  };

  return <div className="posts-container">{RenderPosts()}</div>;
};

export default Posts;
