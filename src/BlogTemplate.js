import React from "react";

function BlogTemplate(props) {
  console.log("test");
  console.log(props);

  return (
    <div>
      <label>Title:{props.title}</label>
      <br />
      <label>Description:{props.description}</label>
      <br />
      <label>Author:{props.author}</label>
      <br />
    </div>
  );
}

export default BlogTemplate;
