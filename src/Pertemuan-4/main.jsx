import { createRoot } from "react-dom/client";
import "./tailwind.css";

import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import FrameworkListSearchFilterEfisien from "./FrameworkListSearchFilterEfisien";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";
createRoot(document.getElementById("root")).render(
  <div>
   {/* <FrameworkList/> */}
   {/* <FrameworkListSearchFilter/> */}
   {/* <FrameworkListSearchFilterEfisien/> */}
   {/* <ResponsiveDesign/> */}
   <ProductList/>
  </div>
);
