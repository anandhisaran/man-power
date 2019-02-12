<template>
  <section class="hero is-fullheight is-default is-bold">
  <layout-header></layout-header>

      
        <!-- <div class="hero-body"> -->
        <section class="hero">
        <figure class="image">
           
            <img src="../assets/banner3.jpg" class="logo_size">
        </figure>
    </section>
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by3">
                            <img src="../assets/man.png" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <div class="home_block_one_content">
                        <h1 class="title is-3">
                      WELCOME TO OUR COMPANY
                        </h1>
                        </div>
                        <p class="is-size-6 is-4">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        </p>
                        <br>
                        <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined">
                Learn more
              </a>
                        </p>
                    </div>
                </div>
                  </div>
                  <!-- second block start -->         
  <section class="section has-background-light">
        <div class="container has-text-centered home_block_two_content">
            <div class="columns is-centered">
            <div class="column is-6">
            <h1 class="title is-3">WHY CHOOSE US?</h1>
            <p class="is-size-6">
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
           </p>
        </div>
        </div>
        <!-- card start -->
        <div class="columns">
            <!-- card one start -->
    <div class="column">
<div class="card">
    <div class="card-content">
      <div class="content">        
<div class="home_block_item">
    <i class="fas fa-leaf"></i> 
          <h4>We deliver quality</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- card one end -->
   <!-- card two start -->
    <div class="column">
<div class="card">
    <div class="card-content">
      <div class="content">        
<div class="home_block_item">
    <i class="fas fa-leaf"></i> 
          <h4>We deliver two</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- card two end -->
   <!-- card three start -->
    <div class="column">
<div class="card">
    <div class="card-content">
      <div class="content">        
<div class="home_block_item">
    <i class="fas fa-leaf"></i> 
          <h4>We deliver three</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- card three end -->
   <!-- card four start -->
    <div class="column">
<div class="card">
    <div class="card-content">
      <div class="content">        
<div class="home_block_item">
    <i class="fas fa-leaf"></i> 
          <h4>We deliver four</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- card four end -->
        </div>
        <!-- card end -->
        </div>
  </section>

            <!-- second block end -->
          
         
          
        <!-- </div> this is hero body -->

       
  
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
