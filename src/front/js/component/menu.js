import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Menu = () => {
  const { store, actions } = useContext(Context);
  const [isCarrito, setIsCarrito] = useState(false);

    useEffect(() => {
        actions.getAllCategories();
    }, []);

    const handlePress = (e, product) => {
        toast.success('Se ha añadido a carrito!', {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        e.preventDefault();
        let Car = [...store.carrito];
        Car.push({
            "name": product.name, "id": product.id, "storeId": uuidv4(), "description": product.description,
            "price": product.price
        });
        actions.setCarrito(Car);
    }


    useEffect(() => {
        if (store.carrito.length > 0) setIsCarrito(true)
    }, [isCarrito]);
    return (

      <>
      {store.categories?.map((category, index) => (
          <div key={index} >
              <button className="button1 categorias mb-10 mt-10">
                  {category.name}
              </button>
              <div className="productos row row-cols-1 row-cols-md-2 g-4 text-center mt-5 d-flex " >
                  {category.product?.map((producto, i) => (
                      <div key={i} className="card mb-3 m-auto " style={{ maxWidth: "540px" }} >
                          <div className="row g-0">
                              <div className="col-md-4">
                                  <img src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ=" className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-6">
                                  <div className="card-body">
                                      <h3 className="card-title">{producto.name}</h3>
                                      <h6 className="card-text">{producto.description}</h6>
                                      <h6 className="card-text">${producto.price}</h6>
                                  </div>
                              </div>
                              <div className="col-md-2">
                                  <button className="cssbuttons-io-button" onClick={
                                      (e) => {
                                          handlePress(e, producto);
                                      }
                                  }>
                                      <i className="fa-sharp fa-solid fa-plus"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      ))}
      <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
  </>
    );
};
