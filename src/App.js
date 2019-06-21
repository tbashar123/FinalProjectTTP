import React from "react";
import "./App.css";
import Header from "./components/header";
// import Main from "./components/main";
// import Footer from "./components/footer";
import Form from "./components/form";

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <Header />
          {/* <Main /> */}
          {/* <Footer /> */}
        </div>

        <section className="intro">
          <h2>About Us</h2>
          <div>
            <p>
              Universal Recipes is a website for creating & sharing in social
              media blog focused on saving people time and money, amplifying
              wellness efforts, and reducing household food waste. Plenty offers
              users the ability to: create and share recipes; connect with
              friends, family, and their favorite food influencers; collaborate
              on cookbooks; locate food-related events; access premier
              educational content; and discover personalized recipe suggestions
              based on their unique lifestyle metrics and available resources.
            </p>
          </div>
        </section>

        <div className="gallery">
          <div className="gallery-item-one" />
          <div className="gallery-item-two" />
          <div className="gallery-item-three" />
          <div className="gallery-item-four" />
          <div className="gallery-item-five" />
          <div className="gallery-item-six" />
        </div>

        <section>
          <h2>Our Mission</h2>
          <div>
            <p>
              Universal Recipes is dedicated to the best recipes and cooking
              tips. From quick and easy dinner recipes to new and exciting
              dessert recipes, we find and deliver the best recipes from all
              over the web. Universal Recipes is a wonderful online resource for
              cooks of all skill levels.{" "}
            </p>
            <p>
              This site for full recipes. Univeral Recipes food is a
              collection of food ideas shared by the owners, our
              advisors, and other engaged community members. We encourage you to
              share your recipes using the BlogPost submission form.
              We will review all recipes and may choose to publish yours on the
              website at a future date.
            </p>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <Form />
        </section>
      </main>
    );
  }
}

export default App;
