import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <footer>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <a href="" id="footer-credit-link" className="footer-links"> © ShareCreds.com </a>
                            <a href="" className="footer-links"> Privacy </a>
                            <a href="" className="footer-links"> Terms </a>
                            <a href="" className="footer-links"> Security </a>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
