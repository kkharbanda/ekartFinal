import React from "react";
import MenuCard from "./MenuCard";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
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
          handler={addToCartHandler}
          delay={0.1}
        />
         <MenuCard
          itemNum={2}
          burgerSrc={"http://via.placeholder.com/640x360"}
          price={200}
          title={"Item4"}
          handler={addToCartHandler}
          delay={0.1}
        />
         <MenuCard
          itemNum={3}
          burgerSrc={"http://via.placeholder.com/640x360"}
          price={300}
          title={"Item3"}
          handler={addToCartHandler}
          delay={0.1}
        />
       
      
      </div>
    
    </section>
  );
};

export default Menu;
