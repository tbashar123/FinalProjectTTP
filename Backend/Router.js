const pg = require('pg');
const express = require('express')
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
//support parsing of application/x-www-form-urlencoded post data
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const {Client } = require('pg')

const connectionString = 'postgres://postgres:Kubrick123@localhost:5432/blogpost'

const client = new Client({
  connectionString: connectionString,
})
client.connect()
.then( () => console.log('Established connection with database!'))
.catch( e => console.log('Error connecting to database!'+ e));

//const app = express();
// Route to get all posts
app.get('/posts.test', function(request, response) {
  console.log('GET Request for: All posts');

  // Query database for all students info
  client.query('SELECT * FROM posts.test')
    .then((res) => {
      console.log('\tGet Request was successful');
      response.send(res.rows);  // Returns array of student info
    })
    .catch( e => {
      console.log('\tGet Request failed');
      response.send(['dffdsfgdsfdfdssdf']);
    });  // Error returns empty array

});

// Route to get single post
app.get('/addBlog/:postId', function(request, response) {
  console.log('GET Request for: Single Post');

  // Query database for a post by id
  client.query('SELECT * FROM posts WHERE id = $1', [request.params.id])
    .then((res) => {
      console.log('\tGet Request was successful');
      response.send(res.rows);  // Returns array of student info obj
    })
    .catch( e => {
      console.log('\tGet Request failed');
      response.send([]);
    });  // Error returns empty array

});

// Route to add a new post
app.post('/addPost', function(request, response) {
  console.log('POST Request for: A Post');
  let title   = request.body.title;           // title
  let description   = request.body.description;        // description
  let author = request.body.author;            // author
  // Query database to insert a new campus


  console.log(title);
  let queryStr = 'INSERT INTO posts.test (title, description, author)';
  queryStr += ' VALUES ($1, $2, $3 )';

  client.query(queryStr, [title, description, author])
  .then((res) => {
    console.log('\tInsertion successful');
    response.send('success');  // if insertion was successful
  })
  .catch( e => {
    console.log('\tInsertion failed');
    console.log(e);   
    response.send('failure')  // if insertion failed
  });

});

//Deleting posts
app.delete('/addPost/:id', function(request, response) {
  console.log('DELETE Request for: A Post by id');
  let id = request.body.id;

  client.query('DELETE FROM posts.test WHERE id = $1', [id])
  .then( (res) => {
    if(res.rowCount >= 1) {
      console.log('\tDeletion successful');
      response.send('success');
    } else {
      console.log('\tDeletion failed');
      response.send('failure');
    }
  })
  .catch( err => {
    console.log(err);
    response.send('failure');
  });

});





console.log("We are testing");
app.post("/addBlog", function(req, res) {
  console.log("We are inserting in the database");
  res.send('Got your response');
});

app.post("/addBlog", function(req,res){
  console.log("Article Author");
});

// app.post("/addBlog", function(req,res){
//   console.log(Article Description);
// });
//
// app.post("/addBlog", function(req,res){
//   console.log(Article Author);
// });

app.listen(3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
});
