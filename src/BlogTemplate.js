import React from 'react';

function BlogTemplate(props){

   console.log(props);

   return (
      <div>

      

          <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title:</th>
      <th scope="col">Description:</th>
      <th scope="col">Author:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.author}</td>
    </tr>

  </tbody>
</table>


          </div>



        )
}

export default BlogTemplate;
