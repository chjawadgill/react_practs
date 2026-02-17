import './home.css'

function Home(){
    return(
        <section className = "productSection">
            <h1>Product Session</h1>
            <div className = "productName"> 
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

            </div>

             </section>
    )
}

function Product(){
    return(
                <div className = "productPicture">
                    <img src = "/product-1.webp" alt = "product"/>
                    <h3> New Year Logo</h3>
                </div>
    )
}

export default Home