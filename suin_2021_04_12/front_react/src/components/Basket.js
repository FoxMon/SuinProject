import React from 'react';
import { Link } from 'react-router';
import './Index.css';

const Basket = () => {
    return (
        <div id="page-wrapper">
            <section id="header">
                <h1><Link to="/">SooIn-Pharmacy</Link></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/">전체 카테고리</Link>
                            <ul>
                                <li><Link to="/">의약품</Link></li>
                                <li><Link to="/">의료소모품</Link></li>
                                <li><Link to="/">검사/시약제품</Link></li>
                                <li>
                                    <Link to="/">소독/의약제품</Link>
                                    <ul>
                                        <li><Link to="/">Magna phasellus</Link></li>
                                        <li><Link to="/">Etiam dolore nisl</Link></li>
                                        <li><Link to="/">Veroeros feugiat</Link></li>
                                        <li><Link to="/">Nisl sed aliquam</Link></li>
                                        <li><Link to="/">Dolore adipiscing</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">기구/장비</Link></li>
                                <li><Link to="/">린넨류</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">의약품</Link></li>
                        <li><Link to="/">의료소모품</Link></li>
                        <li><Link to="/">검사/시약제품</Link></li>
                        <li><Link to="/">소독/의약제품</Link></li>
                        <li><Link to="/">기구/장비</Link></li>
                        <li><Link to="/">린넨류</Link></li>
                    </ul>
                </nav>
            </section>

            <section id="main">
                <div className="container">
                    <article class="box post">
                        <header>
                            <h2>장바구니</h2>
                        </header>
                    </article>
                </div>
            </section>

            <section id="footer">
                <div className="container">
                    <div id="copyright">
                        <ul className="links">
                            <li>&copy; Untitled. All rights reserved.</li><li>Design : SOOIN</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Basket;