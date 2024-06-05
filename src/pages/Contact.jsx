import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Panel } from "primereact/panel";

const Contact = () => {
  return (
    <MainLayout>
      {" "}
      <Panel header="Contact" className="mb-5"></Panel>
    </MainLayout>
  );
};

export default Contact;
