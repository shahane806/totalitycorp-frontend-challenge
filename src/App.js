import AllRoutes from "./AllRoutes";
import "./App.css";
import watch from "./assets/logos/watch.jpg";
import bag from "./assets/logos/bag.jpg";
import camera from "./assets/logos/camera.jpg";
import earphones from "./assets/logos/earphones.jpg";
import keyboard from "./assets/logos/keyboard.webp";
import mobile from "./assets/logos/mobile.jpg";
import tv from "./assets/logos/tv.jpg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const Products = [
    {
      ProductName: "Noise Pulse Go Buzz Bluetooth Calling Smart Watch",
      ProductPrice: 1999,
      ProductRating: 3,
      ProductCategory:"Accessories",
      ProductImage: watch,
    },
    {
      ProductName:
        "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
      ProductPrice: 2999,
      ProductRating: 5,
      ProductCategory:"Accessories",
      ProductImage: earphones,
    },
    {
      ProductName:
        "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
      ProductPrice: 199,
      ProductRating: 2,
      ProductCategory:"Accessories",
      ProductImage: keyboard,
    },
    {
      ProductName: "Apple iPhone 14 Plus 512GB (Product) RED",
      ProductPrice: 10000,
      ProductRating: 5,
      ProductCategory:"Mobile & Tablets",
      ProductImage: mobile,
    },
    {
      ProductName:
        "Samsung 138 cm (55 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA55AUE70AKLXL (Black)",
      ProductPrice: 29999,
      ProductRating: 4,
      ProductCategory:"TV's & Monitors",
      ProductImage: tv,
    },
    {
      ProductName:
        "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
      ProductPrice: 4000,
      ProductRating: 3,
      ProductCategory:"Accessories",
      ProductImage: camera,
    },
    {
      ProductName:
        "Wesley Milestone 2.0 Casual Waterproof Laptop Backpack(Blue & black)",
      ProductPrice: 200,
      ProductRating: 3,
      ProductCategory:"Accessories",
      ProductImage: bag,
    },
  ];
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"SET_PRODUCTS",
      data:Products,
    })
  },[])
  return <div className="App">
    <AllRoutes/>
    </div>;
}

export default App;
