import React from "react";
import { NavbarAdmin } from "../../component/navbarAdmin";

export const Clientes = () => {
  return (
    <>
      <NavbarAdmin />
      <div class="bg-light">
        <div class="container">
          <div>
            <div class="py-5 text-center">
              <h2>Alergenos</h2>
              <p class="lead">
                Para mejorar la experiencia de compra del usuario, podemos crear
                alergenos que luego podremos incluir en los platos de la carta.
                De esta manera, si el cliente los inckluye en su perfil, la
                aplicación le avisará cuando intente pedir un producto que puede
                ser perjudicial para su salud.
              </p>
            </div>

            <div class="row g-5">
              <div class="col-md-7 col-lg-8">
                <form class="needs-validation" novalidate>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        placeholder=""
                        value=""
                        required
                      />
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        value=""
                        required
                      />
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="username" class="form-label">
                        Username
                      </label>
                      <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Username"
                          required
                        />
                        <div class="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Email <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="address" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="address2" class="form-label">
                        Address 2 <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div class="col-md-5">
                      <label for="country" class="form-label">
                        Country
                      </label>
                      <select class="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="state" class="form-label">
                        State
                      </label>
                      <select class="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div class="col-md-3">
                      <label for="zip" class="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="same-address"
                    />
                    <label class="form-check-label" for="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="save-info"
                    />
                    <label class="form-check-label" for="save-info">
                      Save this information for next time
                    </label>
                  </div>

                  <hr class="my-4" />

                  <hr class="my-4" />

                  <button class="w-100 btn btn-primary btn-lg" type="submit">
                    Continue to checkout
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
