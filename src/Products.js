import React from 'react'

function Products(props) {
    return (
        <div>
            <h1>Products From API</h1>
            {props.products.map((product) => {
                return (
                    <div key={product.attributes.id}>
                        <h2>Title: {product.attributes.title}</h2>
                        <h2>Price: {product.attributes.price}</h2>
                        <h3>%%%%%%%%</h3>
                    </div>
                );
            })}
        </div>
    )
}

export default Products

