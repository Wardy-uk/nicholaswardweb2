// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart,
  faAddressCard,
  faEnvelope,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Explore",
    path: "/explore",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Near Me",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "My Cart",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faAddressBook} />
  },
  {
    label: "About Me",
    path: "/about",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Contact Me",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelope} />
  },
];

export default navButtons;