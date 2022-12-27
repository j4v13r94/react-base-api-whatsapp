import { children, useState } from "react";

export function Modal({ children }) {
  return (
    <div className="fixed grid bg-black  bg-opacity-25  w-full  h-screen items-center justify-center">
      <div className="text-center"> {children}</div>
    </div>
  );
}
