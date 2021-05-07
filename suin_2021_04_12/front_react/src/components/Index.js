import React from 'react';
import {Link} from 'react-router';
import './Index.css';

const Index = () => {
    return (
        <div className = "main_html">
            <div className = "homepage is-preload">
                <div id = "page-wrapper">
                    <section id = "header">
                        <h1>SooIn-Pharmacy</h1>

                        <nav id = "nav">
                            <ul>
                                <li className = "current"><Link to = "/">Home</Link></li>
                                <li>
                                    <Link to = "/">전체 카테고리</Link>
                                    
                                    <ul>
                                        <li><Link to = "/">의약품</Link></li>
                                        <li><Link to = "/">의료소모품</Link></li>
                                        <li><Link to = "/">검사/시약제품</Link></li>
                                        <li>
                                            <Link to ="/">소독/의약제품</Link>

                                            <ul>
                                                <li><Link to ="/">1</Link></li>
                                                <li><Link to ="/">2</Link></li>
                                                <li><Link to ="/">3</Link></li>
                                                <li><Link to ="/">4</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to ="/">기구/장비</Link></li>
                                        <li><Link to ="/">린넨류</Link></li>
                                    </ul>
                                </li>
                                <li><Link to ="/">의약품</Link></li>
                                <li><Link to ="/">의약소모품</Link></li>
                                <li><Link to ="/">검사/시약제품</Link></li>
                                <li><Link to ="/">소독/의약제품</Link></li>
                                <li><Link to ="/">기구/장비</Link></li>
                                <li><Link to ="/">린넨류</Link></li>
                            </ul>
                        </nav>

                        <section id = "banner">
                            <header>
                                <h2>Main Picture will be served</h2>
                                <p>수인약품 메인 사진</p>
                            </header>
                        </section>

                        <section id="intro" className = "container">
                                <div className = "row">
                                    <div className = "col-4 col-12-medium">
                                        <section className = "first">
                                            <i className = "icon solid featured fa-cog"></i>
                                            <header>
                                                <h2>무료배송</h2>
                                            </header>
                                            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                        </section>
                                    </div>
                                    <div className = "col-4 col-12-medium">
                                        <section className = "middle">
                                            <i className = "icon solid featured alt fa-bolt"></i>
                                            <header>
                                                <h2>병원오픈상담</h2>
                                            </header>
                                            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                        </section>
                                    </div>
                                    <div className = "col-4 col-12-medium">
                                        <section className = "last">
                                            <i className = "icon solid featured alt2 fa-star"></i>
                                            <header>
                                                <h2>상품문의</h2>
                                            </header>
                                            <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                        </section>
                                    </div>
                                </div>
                                <footer>
                                    <h2>Footer</h2>
                                </footer>
                            </section>
                    </section>

                    <section id = "main">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-12">
                                    
                                    <section>
                                        <header className = "major">
                                            <h2>Best Item</h2>
                                        </header>

                                        <div className = "row">
                                            <div className = "col-4 col-6-medium col-12-small">
                                                <section className = "box">
                                                    <Link to = "/" className = "image featured"><img src = "/images/pic02.jpg" alt = ""></img></Link>
                                                    <header>
                                                        <h3>의료품1</h3>
                                                    </header>
                                                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                    <footer>
                                                        <ul className = "actions">
                                                            <li><Link to ="/" className = "button alt">Price</Link></li>
                                                        </ul>
                                                    </footer>
                                                </section>
                                            </div>
                                            
                                            <div className = "col-4 col-6-medium col-12-small">
                                                <section className = "box">
                                                    <Link to = "/" className = "image featured"><img src = "/images/pic03.jpg" alt = ""></img></Link>
                                                    <header>
                                                        <h3>Sed etiam lorem nulla</h3>
                                                    </header>
                                                    <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                    <footer>
                                                            <ul className = "actions">
                                                                <li><Link to = "/" className = "button alt">Price</Link></li>
                                                            </ul>
                                                        </footer>
                                                </section>
                                            </div>
                                            <div className = "col-4 col-6-medium col-12-small">
                                                    <section className = "box">
                                                        <Link to = "/" className = "image featured"><img src = "/images/pic04.jpg" alt="" /></Link>
                                                        <header>
                                                            <h3>Consequat et tempus</h3>
                                                        </header>
                                                        <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                        <footer>
                                                            <ul className = "actions">
                                                                <li><Link to = "/" className = "button alt">Price</Link></li>
                                                            </ul>
                                                        </footer>
                                                    </section>
                                                </div>
                                                <div className = "col-4 col-6-medium col-12-small">
                                                    <section className = "box">
                                                        <Link to = "/" className = "image featured"><img src = "/images/pic05.jpg" alt="" /></Link>
                                                        <header>
                                                            <h3>Blandit sed adipiscing</h3>
                                                        </header>
                                                        <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                        <footer>
                                                            <ul className = "actions">
                                                                <li><Link to = "/" className = "button alt">Price</Link></li>
                                                            </ul>
                                                        </footer>
                                                    </section>
                                                </div>
                                                <div className = "col-4 col-6-medium col-12-small">
                                                    <section className = "box">
                                                        <Link to = "/" className = "image featured"><img src = "/images/pic06.jpg" alt="" /></Link>
                                                        <header>
                                                            <h3>Etiam nisl consequat</h3>
                                                        </header>
                                                        <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                        <footer>
                                                            <ul className = "actions">
                                                                <li><Link to = "/" className = "button alt">Price</Link></li>
                                                            </ul>
                                                        </footer>
                                                    </section>
                                                </div>
                                                <div className = "col-4 col-6-medium col-12-small">
                                                    <section className = "box">
                                                        <Link to = "/" className = "image featured"><img src = "/images/pic07.jpg" alt="" /></Link>
                                                        <header>
                                                            <h3>Dolore nisl feugiat</h3>
                                                        </header>
                                                        <p>Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.</p>
                                                        <footer>
                                                            <ul className = "actions">
                                                                <li><Link to = "/" className = "button alt">Price</Link></li>
                                                            </ul>
                                                        </footer>
                                                    </section>
                                                </div>
                                            </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id = "footer">
                        <div className = "container">
                            <div className = "col-12">
                                <div id = "copyright">
                                    <ul className = "links">
                                        <li>&copy; Untitled. All rights reserved.</li>
                                        <li>Design : SOOIN</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Index;