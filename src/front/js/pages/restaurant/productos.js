import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubirImages } from "../../component/cloudinary";
import { NavbarAdmin } from "../../component/navbarAdmin";
import { Context } from "../../store/appContext";

export const Productos = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    actions.getAllCategories();
    //store.categories;
  }, []);

  function handleClick() {
    actions.createProduct(name, description, price, category);
    navigate("/easyrestaurant/productos");
  }

  return (
    <>
      <NavbarAdmin />
      <div class="bg-light">
        <div class="container align-items-center">
          <div>
            <div class="py-5 text-center">
              <h2>Productos</h2>
              <p class="lead">
                Recuerda que para incluir un producto en la carta, debes
                seleccionar la categoría a la que pertenece.
              </p>
            </div>

            <div class="row g-5">
              <div class="col-12">
                <form class="needs-validation" novalidate>
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="nombre" class="form-label">
                        Nombre
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder=""
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <div class="invalid-feedback">
                        Por favor introducir un nombre para el producto.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="description" class="form-label">
                        Descripción
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="description"
                        placeholder=""
                        required
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <div class="invalid-feedback">
                        Por favor introducir una descripción del producto.
                      </div>
                    </div>

                    <div class="col-12 p-1">
                      <label for="category" class="form-label">
                        Categoría
                      </label>
                      <select
                        class="form-select"
                        id="category"
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        required
                      >
                        <option>Elige una categoría...</option>
                        {store.categories?.map((categoria) => (
                          <>
                            <option value={categoria.id}>
                              {categoria.name}
                            </option>
                          </>
                        ))}
                      </select>
                      <div class="invalid-feedback">
                        Por favor seleccione una categoría.
                      </div>
                    </div>

                    <div class="row mt-4 justify-content-end">
                      <div className="col-4">
                        <label for="price" class="form-label">
                          Precio:
                        </label>
                      </div>
                      <div className="col-4 ">
                        <input
                          type="text"
                          class="form-control"
                          id="price"
                          placeholder=""
                          required
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                        <div class="invalid-feedback">
                          Por favor indica un pracio para el producto.
                        </div>
                      </div>
                    </div>

                    <SubirImages />
                  </div>

                  <hr class="my-4" />

                  <button
                    class=" btn btn-primary btn-lg"
                    type="submit"
                    onClick={handleClick}
                  >
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
