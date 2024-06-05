import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Panel } from "primereact/panel";

const About = () => {
  return (
    <MainLayout>
      {" "}
      <Panel header="About" className="mb-5"></Panel>
    </MainLayout>
  );
};

export default About;
