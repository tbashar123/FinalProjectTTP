import React from 'react';
import Form from './Form'


class Blog extends React.Component {
  render() {
      return (
        <div className="container">
          <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">BlogPost</h1>

      </div>
      <Form />
       </div>
     </div>
      );
}

}

export default Blog;
