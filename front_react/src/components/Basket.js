import React from 'react';
import {Link} from 'react-router';
import './Index.css';

const Basket = () => {
    return (
        <div id = "page-wrapper">
            <section id = "header">
                <h1><Link to = "/">SooIn-Pharmacy</Link></h1>
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
                                    <Link to = "/">소독/의약제품</Link>
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
                    <article class="box post">
                        <header>
                            <h2>장바구니</h2>
                            <p>Lorem ipsum dolor sit amet feugiat</p>
                        </header>
                        <p>
                            Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                            hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                            Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                            Pellentesque tempus nulla non urna eleifend ut ultrices nisi faucibus.
                            Vestibulum scelerisque ultricies libero id hendrerit. Vivamus malesuada quam faucibus ante dignissim auctor
                            hendrerit libero placerat. Nulla facilisi. Proin aliquam felis non arcu molestie at accumsan turpis commodo.
                            Proin elementum, nibh non egestas sodales, augue quam aliquet est, id egestas diam justo adipiscing ante.
                        </p>
                        <p>
                            Praesent a dolor leo. Duis in felis in tortor lobortis volutpat et pretium tellus. Vestibulum ac ante nisl,
                            a elementum odio. Duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                            placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                            eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                            elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
                        </p>
                        <section>
                            <header>
                                <h3>Something else</h3>
                            </header>
                            <p>
                                Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                                placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                                eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                                elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                                sit amet nullam consequat feugiat dolore tempus.
                                Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
                                placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                                eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                                elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
                            </p>
                            <p>
                                Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                                eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                                elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                                sit amet nullam consequat feugiat dolore tempus.
                            </p>
                        </section>
                        <section>
                            <header>
                                <h3>So in conclusion ...</h3>
                            </header>
                            <p>
                                Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
                                eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
                                elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                                sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
                                Maecenas sagittis convallis justo vel mattis.
                            </p>
                        </section>
                    </article>
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

export default Basket;