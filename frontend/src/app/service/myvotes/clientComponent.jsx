'use client'

import Myvotes from "@/components/organisms/myvotes";
import { useContext } from "react";
import MenuContext from "@/Context/menuContext";
import { useEffect } from "react";
export default function ClientComponent() {
  const { setLevel1, setLevel2 } = useContext(MenuContext);
  useEffect(() => {
    setLevel1("Votes");
    setLevel2("My Votes");
  }, []);
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-blue-600">My Votes</h1>
      <p className="text-gray-600 md:text-lg mt-1 mb-8">
        View all the polls you’ve participated in.
      </p>
      <Myvotes />
    </div>
  );
}
