import './Footer.css';

const Footer = () => {

    return ( 
        <footer className = "footer_body">
            <div className = "footer_row">
                <div className = "footer-col">
                    <h2>SUIN-PHARMACY</h2>
                    <p>
                        Company : SUIN-PHARMACY <br/>
                        Company registration number : ooo-ooo <br/>
                        Address : ooo-ooo-ooo <br/>
                        Tel : ooo-ooo-ooo
                    </p>
                </div>
                <div className = "footer-col">
                    <h2>SERVICE</h2>
                    <p>
                        Medicine <br/>
                        Supplies <br/>
                        Medical Equipment <br/>
                    </p>
                </div>
                <div className = "footer-col">
                    <h2>TERMS OF SERVICE</h2>
                    <p>
                        Privacy-Policy
                    </p>
                </div>
            </div>
            <div className = "footer_row">
                <div className = "footer-col2">
                    <p>
                        Copyright : ⓒSUIN-PHARMACY
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;