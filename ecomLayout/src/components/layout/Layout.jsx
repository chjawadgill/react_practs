import React from 'react';
import './Layout.css'; // Optional: Add styles in a separate CSS file

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
        <button className='btn'>Shop Now</button>
    </div>

    )
}


//   return (
//     <section className="productSection">
//       <h1>Product Session</h1>
//       <div className="productName">
//         {Products.map((obj, Index) => (
//           <Product data={obj} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function Product({ data }) {
//   return (
//     <div className="productPicture">
//       <img src={data.images} alt="product" />
//       <h3>{data.title}</h3>
//       <Btn value="Shop Now" colore="red" />
//     </div>
//   );
// }

export default Layout;