import './MainScreen.css';
import { Link } from 'react-router-dom';

const MainScreen = () => {

    return (
        <div>
            <section className = "header">
                <div className = "main_container">
                    <p>Effective medicine, Everyday healthy</p>
                    <h1>Welcome to<br/>SUIN pharmacy</h1>
                    <Link to = "/home"><button type = "button" className = "main_button">Shop now</button></Link>
                </div>
            </section>

            <section className = "introduce">
                <div className = "introduce_row">
                    <div className = "introduce_col1">
                        <h2>
                            Free<br/>
                            Shipping
                            <h3>
                                Responsibility, Credit
                            </h3>
                            <p>
                                Reliable medicine, product<br/>
                                for customer
                            </p>
                        </h2>
                    </div>
                    <div className = "introduce_col2">
                        <h2>
                            Free<br/>
                            Shipping
                            <h3>
                                Responsibility, Credit
                            </h3>
                            <p>
                                Reliable medicine, product<br/>
                                for customer
                            </p>
                        </h2>
                    </div>
                    <div className = "introduce_col3">
                        <h2>
                            Free<br/>
                            Shipping
                            <h3>
                                Responsibility, Credit
                            </h3>
                            <p>
                                Reliable medicine, product<br/>
                                for customer
                            </p>
                        </h2>
                    </div>
                </div>
            </section>

            <section className = "business">
                <h1>Business</h1>
                <p>Our Reliable Product</p>

                <div className = "business_row">
                    <div className = "business_col1">
                        <img src = {require("../images/business_image.jpg").default} alt = "img" />
                    </div>
                    <div className = "business_col2">
                        <h3>More effectively</h3>
                        <p>
                            Alway be healthy<br/>
                            Everyday healthy
                        </p>
                    </div>
                </div>
                <div className = "business_row">
                    <div className = "business_col2">
                        <h3>More Closer</h3>
                        <p>
                            Alway be close<br/>
                            Everyday close
                        </p>
                    </div>
                    <div className = "business_col1">
                        <img src = {require("../images/business_image2.jpg").default} alt = "img" />
                    </div>
                </div>
                <div className = "business_row">
                    <div className = "business_col1">
                        <img src = {require("../images/business_image3.jpg").default} alt = "img" />
                    </div>
                    <div className = "business_col2">
                        <h3>Smarter</h3>
                        <p>
                            More smarter<br/>
                            Smartest service
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainScreen;