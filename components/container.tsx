import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-7xl mx-auto px-10 lg:px-5">{children}</section>;
};

export default Container;
