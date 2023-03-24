import React from "react";
import MenuCard from "./MenuCard";
const Menu = () => {
  const addtocartHandler = (itemNum) => {
    console.log(itemNum)
  };
  return (
    <section id="menu">
      <h1>Products</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={"http://via.placeholder.com/640x360"}
          price={100}
          title={"Item1"}
          handler={addtocartHandler}
          delay={0.1}
        />
         <MenuCard
          itemNum={2}
          burgerSrc={"http://via.placeholder.com/640x360"}
          price={200}
          title={"Item4"}
          handler={addtocartHandler}
          delay={0.1}
        />
         <MenuCard
          itemNum={3}
          burgerSrc={"http://via.placeholder.com/640x360"}
          price={300}
          title={"Item3"}
          handler={addtocartHandler}
          delay={0.1}
        />
       
      
      </div>
    
    </section>
  );
};

export default Menu;
