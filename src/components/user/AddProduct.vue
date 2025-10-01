<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div
        class="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center"
        style="padding-bottom: 1.3rem; padding-top: 0.5rem"
      >
        <div class="mb-3 mb-sm-0">
          <p class="my-0 fs-4 fw-semibold mb-2">Add Product</p>
          <p class="my-0 text-secondary">
            Add your own product by providing complete details such as the name,
            description, price, and images. Make your product visible to
            customers and start selling today!
          </p>
        </div>
        <div>
          <router-link to="/new-recipe">
            <button
              class="btn btn-success add-btn px-3 py-2 rounded-pill"
              style="width: 10rem; margin-left: 4rem; margin-right: 1.5rem;"
            >
              <i class="fa-solid fa-circle-plus pe-2"></i>Add Recipe
            </button>
          </router-link>
        </div>
      </div>
    </li>
    <!-- <li class="list-group-item">
      <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
      <div class="row">
        User Recipe Card
      </div>
    </li> -->
  </ul>
</template>
