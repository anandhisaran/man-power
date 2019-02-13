<template>
 <section class="hero is-fullheight is-default is-bold">
 <layout-header></layout-header>
  <div class="contactus section">
      <div class="hero-body">
      <div class="container">
        <div class="subpage_block_entry">
            <h4 class="banner-title-outer is-size-1 has-text-center"> Contactus page</h4>
        </div>
        </div>
    </div>
  </div>
  <!-- map start -->
  <section class="section">
      <div class="container">
     <div class="columns is-vcentered">
       <div class="column">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9224878632535!2d78.12677644990055!3d9.940407376751144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5ebe3f87f47%3A0xa1f540b6d93223f9!2sSystimaNX+IT+Solutions+Private+Limited!5e0!3m2!1sen!2sin!4v1550054674982"
    width="900"
    height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
     </div>
     </div>
      </div>
  </section>
  <!-- map end -->
  <section class="section">
  <div class="container">
    <div class="columns">
    <div class="column is-7">
      <h1 class="has-text-left is-size-3">GET IN TOUCH</h1>
    <form class="contact_form">
    <div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="Name">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="Email">
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea" placeholder="Message"></textarea>
  </div>
</div>
<p class="has-text-centered"><a class="button is-info is-outlined is-rounded">
            Submit
              </a></p>
    </form>
    </div>
    <!-- contact info start -->
      <div class="column is-4 is-offset-1">
        <div class="contact_info">
          <h1 class="has-text-left is-size-3">CONTACT INFO</h1>
          <div class="has-background-black">
           <p><i class="fas fa-phone-volume has-text-white"></i> Phone: 0987654321</p>
           <p><i class="far fa-envelope-open has-text-white"></i> Email: admin@gmail.com</p>
          <p><i class="far fa-address-card has-text-white"></i>Address: </p>
          </div>
        </div>
      </div>
       <!-- contact info end -->
  </div>
  </div>
  </section>
    <layout-footer></layout-footer>
 </section>
</template>
<script>
import LayoutHeader from '@/views/layouts/Header.vue';
import LayoutFooter  from '@/views/layouts/Footer.vue';
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

