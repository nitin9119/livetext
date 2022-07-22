import Product from "./Product";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((d) => {
            setData(d.data);
        }).catch(err => console.log(err.message))
    }, [])

    return (
        <div >
            {data.map((ele, i) => {
                return (
                    <div key={i} className="container">
                        <Link className="row"  to={`/products/${ele.id}`}><Product name={ele.title} image={ele.image} /></Link>
                    </div>
                )
            })}</div>
    )
}