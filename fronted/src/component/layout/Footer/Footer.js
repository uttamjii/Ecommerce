import React from 'react'
import store from "../../../images/store.png"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className="leftFooter">
                    <h4>DOWNLOAD OUR APP</h4>
                    <p>Download App for Andorid and IOS Mobile phone.</p>
                    <img src={store} alt="playstore and app store" />
                </div>
                <div className="midFooter">
                    <h1>ECOMMERCE</h1>
                    <p>High Quality it our first pripority</p>
                    <p>Copyright 2022 &copy; MeUttam.</p>
                </div>
                <div className="rightFooter">
                    <h4>Follow Us</h4>
                    <a href="">Instagram</a>
                    <a href="">Youtube</a>
                    <a href="">FaceBook</a>
                </div>
            </footer>
        </>
    )
}

export default Footer