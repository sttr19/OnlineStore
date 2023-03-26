import appView from "./pages/app/View/appView";
import { products, Products } from "./data/products";
import "./index.scss";

const app = new appView();
app.renderUI(products);
