import React from "react";
import { Container } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import "../styles/associated-printer.css";

const AssociatedPrinters = () => {
  return (
    <>
      <CommonSection title={"Associated Printers"} />

      <section className="section-biggest">
        <Container>
          <h1>Associated Printers</h1>
        </Container>
      </section>
    </>
  );
};

export default AssociatedPrinters;
