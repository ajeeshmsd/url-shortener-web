import React, { useCallback, useState } from "react";
import { Login } from "../organisms/login";

export const Tabs = {
  LOGIN_TAB: 'LOGIN_TAB',
  SIGNUP_TAB: 'SIGNUP_TAB'
};


export const Welcome = () => {

  const [currentTab, setCurrentTab] = useState(Tabs.LOGIN_TAB);

  const toggleTab = useCallback(() => {
    if(currentTab === Tabs.LOGIN_TAB) {
      setCurrentTab(Tabs.SIGNUP_TAB);
    } else {
      setCurrentTab(Tabs.LOGIN_TAB);
    }
  }, [currentTab, setCurrentTab]);

  return (
    <div className="flex bg-gray-200 w-screen h-screen">
      <img src="assets/login.svg" alt="LOGIN" />
      {currentTab === Tabs.LOGIN_TAB
        ? <Login toggleTab={toggleTab} />
        : <>SignUp</>}
    </div>
  );;
};