function Product(props) {

    return (
        <div className="col col-lg-2" style={{ margin: "auto", border: "none", width: "300px", height: "400px", borderRadius: "5px", backgroundColor:"whitesmoke" }}>
            <img style={{ margin: "auto", width: "90%", height: "50%", border: "none",padding:"5px",backgroundColor:"white" }} src={props.image}></img>
            <p>{props.name}</p>
            <button>Product details</button>
        </div>
    )
}

export default Product;
