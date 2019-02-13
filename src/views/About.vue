<template>
 <section class="hero is-fullheight is-default is-bold">
 <layout-header></layout-header>
    <div class="contactus section">
      <div class="hero-body">
      <div class="container">
        <div class="subpage_block_entry">
            <h4 class="banner-title-outer is-size-1 has-text-center"> About page</h4>
        </div>
        </div>
    </div>
  </div>
   <section class="section">
     <h4 class="has-text-left is-size-4">Heading</h4>
     <p class="has-text-left">
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
     </p>
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

