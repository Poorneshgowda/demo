import React from "react";
import Blog from "./Blog";

const NavMenu = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);

  //Component to be extracted
  const MenuItems = (props) => {
    const item = props.item;
    return <li>{item}</li>;
  };

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning react!" },
    { id: 2, title: "Installation", content: "You can install react from npm" },
  ];

  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
};

export default NavMenu;
