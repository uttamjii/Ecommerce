import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png"

const options = {
    burgerColorHover: "#a62d24",
    logo: logo,
    logoWidth: "18vmax",
    navColor1: "white",
    logoHoverSize: "6px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",

    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",

    link1Size: "2vmax",
    link1Color: "rgba(35,35,35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-end",

    link2ColorHover: "#eb4034",
    link1ColorHover: "#eb4034",
    link3ColorHover: "#eb4034",
    link4ColorHover: "#eb4034",

    link2Margin: "2vmax",
    link3Margin: "0",
    link4Margin: "2vmax",

    profileIconUrl: "/login",

    profileIconColor: "rgba(35,35,35,0.8)",
    searchIconColor: "rgba(35,35,35,0.8)",
    cartIconColor: "rgba(35,35,35,0.8)",

    searchIconColorHover: "#eb4034",
    profileIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
}

const Header = () => {
    return (
        <ReactNavbar
            {...options}
        />
    )
}

export default Header