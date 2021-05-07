import React from 'react';
import {Link} from 'react-router';
import './Index.css';

const List = () => {
    return (
        <div id="page-wrapper">
            <section id="header">
                <h1><Link to = "/">SuIn-Pharmacy</Link></h1>

                <nav id = "nav">
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li>
                            <Link to = "/">전체 카테고리</Link>
                            <ul>
                                <li><Link to = "/">의약품</Link></li>
                                <li><Link to = "/">의료소모품</Link></li>
                                <li><Link to = "/">검사/시약제품</Link></li>
                                <li>
                                    <Link to="/">소독/의약제품</Link>
                                    <ul>
                                        <li><Link to ="/">Magna phasellus</Link></li>
                                        <li><Link to ="/">Etiam dolore nisl</Link></li>
                                        <li><Link to ="/">Veroeros feugiat</Link></li>
                                        <li><Link to ="/">Nisl sed aliquam</Link></li>
                                        <li><Link to ="/">Dolore adipiscing</Link></li>
                                    </ul>
                                </li>
                                <li><Link to = "/">기구/장비</Link></li>
                                <li><Link to = "/">린넨류</Link></li>
                            </ul>
                        </li>
                        <li className = "current"><Link to ="/">의약품</Link></li>
                            <li><Link to = "/">의료소모품</Link></li>
                            <li><Link to = "/">검사/시약제품</Link></li>
                            <li><Link to = "/">소독/의약제품</Link></li>
                            <li><Link to = "/">기구/장비</Link></li>
                            <li><Link to = "/">린넨류</Link></li>
                    </ul>
                </nav>
            </section>

            <section id = "main">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-2 col-12-medium">
                            <section className = "box">
                                <Link to = "/" className = "image featured"><img src="/images/pic09.jpg" alt="" /></Link>
                                <header>
                                    <h3>회원정보</h3>
                                </header>
                                <p>아이디</p>
                                <p>닉네임</p>
                                <p>포인트</p>
                                <p>주문내역</p>
                                <p>장바구니</p>
                                <p>etc..</p>
                            </section>
                        </div>
                        <div className = "col-10 col-12-medium imp-medium">
                            <article className = "box post">
                                <header>
                                    <h2>Item-List</h2><br/>
                                </header>
                                <Link to = "/" className = "image featured"><img src="images/pic01.jpg" alt="" /></Link>
                                <section>
                                    <header className = "major">
                                        <h2>의약품</h2>
                                    </header>
                                    <div className = "row">
                                        <div className = "col-4 col-6-medium col-12-small">
                                            <section className = "box">
                                                <Link to ="/" className = "image featured"><img src="images/pic02.jpg" alt="" /></Link>
                                                <header>
                                                    <Link to = "/"><h3>의약품1</h3></Link>
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
                                                <Link to = "/" className = "image featured"><img src="images/pic03.jpg" alt="" /></Link>
                                                <header>
                                                    <h3>의약품2</h3>
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
                                                <Link to = "/" className = "image featured"><img src="/images/pic04.jpg" alt="" /></Link>
                                                <header>
                                                    <h3>의약품3</h3>
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
                                                <Link to = "/" className = "image featured"><img src="images/pic05.jpg" alt="" /></Link>
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
                                                <Link to ="#" className = "image featured"><img src="/images/pic06.jpg" alt="" /></Link>
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
                                                <Link to = "/" className = "image featured"><img src="images/pic07.jpg" alt="" /></Link>
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
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "footer">
                <div className = "container">
                    <div id = "copyright">
                        <ul className = "links">
                            <li>&copy; Untitled. All rights reserved.</li><li>Design : SOOIN</li>
                        </ul>
                    </div>
                </div>
            </section>
		</div>
    );
}

export default List;