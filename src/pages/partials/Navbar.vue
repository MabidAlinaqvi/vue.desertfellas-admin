<template>
  <nav class="navbar navbar-expand-lg text-white  justify-content-around">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/logo.png" alt="" srcset="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navber-center-menu" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link " aria-current="page" href="/">Home</a> -->
            <router-link class="nav-link" active-class="active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Latest News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Partners</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/trips">Trips & Events</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Courses
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Shop</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-arround align-items-center">
        <i class="pi pi-search me-4" style="font-size: 1.5rem"></i>
        <i class="pi pi-shopping-cart" style="font-size: 1.5rem"></i>
      </div>
    </div>
  </nav>
</template>
<script setup>
import Button from "primevue/button"
</script>
  