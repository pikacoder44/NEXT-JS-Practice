import React from "react";
import Script from "next/script";

const contact = () => {
  return (
    <div>
      <Script>{`alert("Welcome to Contact page")`}</Script>
      I am contact
    </div>
  );
};

export default contact;
export const metadata = {
  title: "Contact Facebook",
  description: "Contact page of Facebook",
};
