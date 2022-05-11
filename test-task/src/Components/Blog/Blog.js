import React from "react";

const Blog = (props) => {
  const Style = {
    marginRight: 10,
  };
  return (
    <div className="blog">
      <div className="blog-title">
        <p>
          <span style={Style}> #{props.idNumber}</span>
          {props.title}
        </p>
      </div>
      <div className="blog-body">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Blog;
