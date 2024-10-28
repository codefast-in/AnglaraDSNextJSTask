"use client";
import {store} from "@/store/store";
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast";
import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <Toaster position="bottom-right" reverseOrder={true} />
      {children}
    </Provider>
  );
};

export default Wrapper;
