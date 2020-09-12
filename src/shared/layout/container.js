import React from 'react';

const Container = ({ children, ...props }) => (
  <div className={`container ${props.classes}`} children={children} {...props} />
);

export default Container;