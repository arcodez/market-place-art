import React from "react";
import { Container } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";

const PageNotFound = () => {
  return (
    <>
      <CommonSection title={"Error 404 Page Not Found"} />

      <section>
        <Container>
          <h1 className="display-1">PageNotFound</h1>
        </Container>
      </section>
    </>
  );
};

export default PageNotFound;
