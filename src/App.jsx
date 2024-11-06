import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./style.css";

const page = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default page;
