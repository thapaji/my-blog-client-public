import { Panel } from "primereact/panel";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Blog = () => {
  return (
    <MainLayout>
      {" "}
      <Panel header="Blogs" className="mb-5"></Panel>
    </MainLayout>
  );
};

export default Blog;
