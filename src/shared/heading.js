import React from "react";
import { Typography } from "antd";
const { Title } = Typography;

const Heading = ({ text, classes, ...props }) => (
  <div className={`heading ${classes}`} {...props}>
    <Title level={2} children={text} />
    <div className="heading__divider" />
  </div>
);

export default Heading;