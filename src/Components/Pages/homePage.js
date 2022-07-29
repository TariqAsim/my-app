import React from "react";
import "./homePage.css";
import Layout from "./Layout";

function HomePage() {
  return (
    <Layout>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner vh-100">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={require("../images/img1.jpg")}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={require("../images/img2.jpg")}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src={require("../images/img3.jpg")}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>

        <table class="table table-dark mt-1 mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Tariq</td>
              <td>Asim</td>
              <td>@tariqasim</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ali</td>
              <td>ahmed</td>
              <td>@aliahmed</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ahsan</td>
              <td>babar</td>
              <td>@ahsanbabar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default HomePage;
