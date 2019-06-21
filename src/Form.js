import React from 'react';
import axios from 'axios';
import BlogTemplate from './BlogTemplate';

class Form extends React.Component {

constructor(props){
  super(props);
  this.state = {
    blogs:[],
    // title:'',
    // description:'',
    // author:'',
  };
}

handleChange = e => {
   this.setState({ 'title': e.target.value});
 };

 handleChange2 = e => {
   this.setState({ 'description': e.target.value});

 };

 handleChange3 = e => {
   this.setState({ 'author': e.target.value});

 };

  sendToExpress = (e) => {


    e.preventDefault();
 let data = {

   title :this.state.title,
   description : this.state.description,
   author:this.state.author
 }
 console.log(data)
    // let data = {
    //   title: 'something',
    //   description: 'sometelse',
    //   author: 'me'
    // };
      axios.post('http://localhost:3001/addPost', data)
      .then( res =>{
        console.log('This is the function');
        //console.log(res.data);
        this.setState({blogs: [  ...this.state.blogs, data ]})


    });
      //.catch( err => console.log(err));
  }


  componentDidMount() {
    axios.get('http://localhost:3001/posts.test')
    .then( res => {
        console.log(res.data)
        this.setState({blogs:res.data})
      })
    .catch( err => console.log(err));

  }



  handleonDelete= (e) => {

    console.log("its time to delete something");

    e.preventDefault();
    axios.delete('/addPost/:id'+this.state.id).then(res =>{
          this.state.updatelist();
    })

  }








 getBlogs = () =>{
   let blogs=[]
 if(this.state.blogs.length){
      blogs = this.state.blogs.map(words => <BlogTemplate title={words.title} description={words.description} author={words.author}/>)
 }
 return blogs
 }



  render() {


    return (
      <div className="col-12 col-lg-6 offset-lg-3">
      <form onSubmit = {this.sendToExpress}>
      Article Title:
        <input className="form-control my-3" input value={this.state.title} placeholder="Article Title" onChange={this.handleChange} />
        Article Description:
        <textarea className="form-control my-3" input value={this.state.description} placeholder="Article Description" onChange={this.handleChange2}>
        </textarea>
        Article Author:
        <input className="form-control my-3" input value={this.state.author} placeholder="Article Author" onChange={this.handleChange3} />

        <button  onClick = {this.sendToExpress} className="btn btn-primary float-right">Submit</button>
        </form>
          <button onClick = {this.handleonDelete} className="btn btn-primary float-right">Delete</button>
          <br>
          </br>
           {this.getBlogs()}

      </div>
    )
  }
}

export default Form;
