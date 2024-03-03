import React from "react";
import ReactDOM from "react-dom/client";

// jsx => React.createElement => ReactElement.Js object => htmlElelement(render)

/**
 * header
 * -logo
 * -nav items
 * Body
 * -search
 * -restaurantContainer
 * -RestaurantCard
 * Footer
 * ----copyright
 * -----Links
 * -----Address
 * -----Contact
 *
 */

//fuctional component react
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using jsx
  </h1>
);

//Component compostion
const HeadingComponent = () => (
  <div id="container">
    <Title></Title>

    <h1 className="heading">Namaste React using fuctional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
