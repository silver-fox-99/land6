import './reset.css';
import {Fragment} from "react";
import Header from "./components/header/header";
import MainBlock from "./components/main-block/main-block";
import Advantages from "./components/advantages/advantages";
import Instruments from "./components/instruments/instruments";
import PriceBlock from "./components/price-block/price-block";

import TableBlock from "./components/table-block/table-block";
import ContactBlock from "./components/contact-block/contact-block";
import Footer from "./components/footer/footer";

function App() {
  return <Fragment>
      <Header />
      <MainBlock />
      <Advantages />
      <Instruments />
      <PriceBlock />
      <TableBlock />
      <ContactBlock />
      <Footer />
  </Fragment>
}

export default App;
