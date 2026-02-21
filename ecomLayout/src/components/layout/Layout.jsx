import React from 'react';
import './Layout.css'; // Optional: Add styles in a separate CSS file
import Buttoon from '../common/Button';

function Layout() {
    return(
        <section className="productSection">
            <h1>Product Session</h1>
            <div className="productName">
                <Product />
                <Product />
                <Product />
                </div>
        </section>
    )
}

function Product(){
    return(
    <div className="productPicture">
        <img src="https://picsum.photos/200/300" alt="product" />
        <h3>Apple iPhone 14 Pro Max (128GB) - Space Black</h3>
       <Buttoon value = 'Add to card' colore = 'green' />
    </div>

    )
}

export default Layout;