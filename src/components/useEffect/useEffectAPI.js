import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {
    const [products, setProducts] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://fakestoreapi.com/products?sort=desc');
        setProducts(await response.json());

    }
    const Buy = (products)=>{
        alert("You Purchased: ")
    }


    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <h2>List Of Products</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {

                        products.map((curElem) => {

                            const { title, image, price, id, category } = curElem;
                            {
                                return (
                                    <div className="col-4 mt-5">
                                        <div className="card bg-warning text-black p-3">
                                            <div className="d-flex align-items-center">
                                                <div className="image">
                                                    <img src={curElem.image} className="rounded" width="155" />
                                                    <button className="button" onClick={Buy}>Buy</button>
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.title} </h4>
                                                    {/* <span className="text-left">{curElem.description}</span>  */}
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="price">Price</span>
                                                            <span className="number1">{curElem.price}</span> 
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="category">Category</span>
                                                            <span className="number2">{curElem.category}</span> 
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )

                    }

                </div>
            </div>
        </>
    )
}

export default UseEffectAPI;