import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Containter";
import ArtikelDetail from "./ArtikelDetail";
import "./custom.css";
import QnASection from "./QnASection";
import ListProduct from "./ListProduct";
createRoot(document.getElementById("root")).render(
  <div>
    <Container>
        <HelloWorld />
      </Container>

      <Container>
      <ArtikelDetail />
      </Container>
    
      <Container>
      <QnASection/>
      </Container>

      <Container>
      <ListProduct/>
      </Container>
   
  </div>
);
