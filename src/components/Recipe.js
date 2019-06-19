import React from "react";
// import ReactDOM from "react-dom";x
// import "./css/index.css";
import {Button,ButtonToolbar,ListGroup,Card, Accordion} from "react-bootstrap";
import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
// import App from './App';

//main class for displaying the recipes
class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      showAdd: false,
      showEdit: false,
      currentlyEditing: 0
    };
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    //load the local storage data after the component renders
    var recipes =
      typeof localStorage["recipes"] !== "undefined"
        ? JSON.parse(localStorage.getItem("recipes"))
        : [
            {
              name: "Banana Smoothie",
              ingredients: [
                "2 bananas",
                "1/2 cup vanilla yogurt",
                "1/2 cup skim milk",
                "2 teaspoons honey",
                "pinch of cinnamon"
              ]
            },
            {
              name: "Spaghetti",
              ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]
            },
            {
              name: "Split Pea Soup",
              ingredients: [
                "1 pound split peas",
                "1 onion",
                "6 carrots",
                "4 ounces of ham"
              ]
            }
          ];
    this.setState({ recipes: recipes });
  }

  showAddModal() {
    //show the edit recipe modal
    this.setState({ showAdd: !this.state.showAdd });
  }

  showEditModal(index) {
    //show the edit recipe modal
    this.setState({ currentlyEditing: index, showEdit: !this.state.showEdit });
  }

  addRecipe(recipe) {
    let recipes = this.state.recipes;
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes });
    this.showAddModal();
  }

  editRecipe(newName, newIngredients, currentlyEditing) {
    let recipes = this.state.recipes;
    recipes[currentlyEditing] = { name: newName, ingredients: newIngredients };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes });
    this.showEditModal(currentlyEditing);
  }

  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes, currentlyEditing: 0 });
  }

  render() {
    const recipes = this.state.recipes;
    let currentlyEditing = this.state.currentlyEditing;
    return (
      <div className="jumbotron">
        <h1>RECIPE BOX</h1>
        <Accordion>
        <ListGroup accordion="true">
          {recipes.map((recipe, index) => (
            <Card eventkey={index} key={index}>
              <Card.Header>
                <Card.Title className="title" toggle="true">
                  {recipe.name}
                </Card.Title>
              </Card.Header>
              <Card.Body collapsible='true'>
                <ListGroup>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button
                    bsstyle="warning"
                    onClick={() => {
                      this.showEditModal(index);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    bsstyle="danger"
                    onClick={() => {
                      this.deleteRecipe(index);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
              </Card.Body>
              <EditRecipe
                onShow={this.state.showEdit}
                onEdit={this.editRecipe}
                onEditModal={() => {
                  this.showEditModal(currentlyEditing);
                }}
                currentlyEditing={currentlyEditing}
                recipe={recipes[currentlyEditing]}
              />
            </Card>
          ))}
        </ListGroup>
        </Accordion>
        <Button bsstyle="primary" onClick={this.showAddModal}>
          Add Recipe
        </Button>
        <AddRecipe
          onShow={this.state.showAdd}
          onAdd={this.addRecipe}
          onAddModal={this.showAddModal}
        />
      </div>
    );
  }
}

export default Recipe;

