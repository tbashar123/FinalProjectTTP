import React from 'react';

function BlogTemplate(props){
  console.log('aslfjkhsdlkf');
   console.log(props);

   return (
      <div>
          <label>Title:{props.title}</label>
          <br></br>
          <label>Description:{props.description}</label>
          <br></br>
          <label>Author:{props.author}</label>
          <br></br>
          </div>
        )
}

export default BlogTemplate;
