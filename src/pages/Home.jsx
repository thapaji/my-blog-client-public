import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";

const Home = () => {
  return (
    <MainLayout>
      {/* <video style={{ width: "100%" }} autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2022/12/20/143625-784129614_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <Panel header="Life" className="mb-5">
        <div className="flex justify-content-between flex-wrap">
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card
            title="Advanced Card"
            subTitle="Card subtitle"
            footer={"this is footer"}
            header={
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            }
            className="md:w-25rem mb-2"
          >
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
              error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
              nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
      </Panel>
      <Panel header="Sports" className="mb-5">
        <Panel header="Sports1"></Panel>
        <Panel header="Sports"></Panel>
        <Panel header="Sports"></Panel>
        <Panel header="Sports"></Panel>
      </Panel>
      <Panel header="Travel" className="mb-5">
        <Card title="Section 1" className="card"></Card>
        <Card title="Section 1" className="card"></Card>
        <Card title="Section 1" className="card"></Card>
      </Panel>
      <Panel header="Coding" className="mb-5">
        <Card title="Section 1" className="card"></Card>
        <Card title="Section 1" className="card"></Card>
        <Card title="Section 1" className="card"></Card>
      </Panel>

      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-4">
          <Card title="Section 1" className="card"></Card>
        </div>
        <div className="p-col-12 p-md-4">
          <Card title="Section 2" className="card"></Card>
        </div>
        <div className="p-col-12 p-md-4">
          <Card title="Section 3" className="card"></Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
