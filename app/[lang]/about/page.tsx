import { getDictionaries } from "@/getDictionaries";
import React from "react";

const page = ({ params }: any) => {
  console.log(" first ", params);

  console.log(params.lang);
  return (
    <>
      <h1>About page</h1>
    </>
  );
};

export default page;
