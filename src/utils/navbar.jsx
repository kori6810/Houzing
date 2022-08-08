import React from "react";
import { Generic } from "../page/generic/Generic";
import {HomePage} from "../page/Home/Home";
import {PropertiesPage} from "../page/Properties/Properties";
import AddHouse from "../page/AddHouse/index";
import DetailesPage from "../page/Detailes";
import SignInPage from '../page/Sign In';
import MyPropertiesPage from "../page/MyProperties";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: "2-1",
    title: "Properties",
    path: "/properties/:id",
    Element: <DetailesPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/signin",
    Element: <SignInPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 6,
    title: "MyProperties",
    path: "/profile/properties",
    Element: <MyPropertiesPage />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 7,
    title: "Add new house",
    path: "/profile/addHouse",
    Element: <AddHouse />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
];
