<template>
  <section class="hero is-fullheight is-default is-bold">
  <layout-header></layout-header>

      
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="https://www.faulthero.com/_nuxt/img/9132d86.png" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Superhero Scaffolding
                        </h1>
                        <h2 class="subtitle is-4">
                            Let this cover page describe a product or service.
                        </h2>
                        <br>
                        <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined">
                Learn more
              </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

       
  
  <!-- <p>This is Home page</p> -->
    <layout-footer></layout-footer>
  </section>
</template>

<script>
import LayoutHeader from "@/views/layouts/Header.vue";
import LayoutFooter from "@/views/layouts/Footer.vue";
export default{
components: {
  LayoutHeader,
  LayoutFooter
}
}
</script>
