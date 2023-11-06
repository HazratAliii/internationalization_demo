"use client";
import { getDictionaries } from "@/getDictionaries";
import Image from "next/image";
import { useState } from "react";

export default function Home({ params }: any) {
  const [lan, setLan] = useState<Record<string, string>>();

  const data = async () => {
    const s = await getDictionaries(params.lang);
    setLan(s);
    console.log("lang ", lan);
  };
  data();

  return (
    <>
      <h1>Hello world</h1>
      <p>{lan?.title}</p>
    </>
  );
}
