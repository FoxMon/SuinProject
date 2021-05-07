import React from 'react';
import {Link} from 'react-router';
import './Index.css';

const Item = () => {
    
    return (
        <div id = "page-wrapper">
            <section id = "header">
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
                                    <Link>소독/의약제품</Link>
                                    <ul>
                                        <li><Link to = "/">Magna phasellus</Link></li>
                                        <li><Link to = "/">Etiam dolore nisl</Link></li>
                                        <li><Link to = "/">Veroeros feugiat</Link></li>
                                        <li><Link to = "/">Nisl sed aliquam</Link></li>
                                        <li><Link to = "/">Dolore adipiscing</Link></li>
                                    </ul>
                                </li>
                                <li><Link to = "/">기구/장비</Link></li>
                                <li><Link to = "/">린넨류</Link></li>
                            </ul>
                        </li>
                        <li><Link to = "/">의약품</Link></li>
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
                        <div className = "col-8 col-12-medium">
                            <article className = "box post">
                                <Link to = "/" className = "image featured"><img src="/images/pic01.jpg" alt="" /></Link>
                                <header>
                                    <h2>상품설명</h2><br/>
                                    <h2>상품 상세 이미지</h2><br/>
                                    <h2>상세 정보</h2><br/>
                                    <h2>고객 후기</h2><br/>
                                    <h2>상품 문의</h2>
                                </header>
                            </article>
                        </div>
                        <div class="col-4 col-12-medium">
                            <section className = "box">
                                <Link to = "/" className = "image featured"><img src="images/pic09.jpg" alt=""/></Link>
                                <header>
                                    <h3>가격</h3>
                                    <h3>판매단위</h3>
                                    <h3>중량/용량</h3>
                                    <h3>배송구분</h3>
                                    <h3>포장타입</h3>
                                    <h3>안내사항</h3>
                                    <h3>구매수량</h3>
                                </header>
                                <footer>
                                    <Link to ="/" className = "button alt">구매</Link>
                                    <Link to = "/" className = "button alt">장바구니 담기</Link>
                                </footer>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "footer">
                <div className = "container">
                    <div id = "copyright">
                        <ul className = "links">
                            <li>&copy; Untitled. All rights reserved.</li><li>Design : SOOIN </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Item;