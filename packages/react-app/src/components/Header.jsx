import React from "react";
import { Button, Image, PageHeader } from "antd";
import logo from "../assets/money-bag.png";

// displays a page header

export default function Header({ setRoute }) {
  return (
    <div>
      {/* <a href="" rel="noopener noreferrer"> */}
      {/* <PageHeader title="🏗 scaffold-eth" subTitle="meta-multi-sig example" style={{ cursor: "pointer" }} /> */}
      {/* <div style={{ backgroundColor: "yellow" }}> */}
      <PageHeader title="Tax Filing Services" children={<Image width={95} src={logo} />} />
      {/* </div> */}
    </div>
  );
}
