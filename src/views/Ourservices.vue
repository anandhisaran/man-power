<template>
 <section class="hero is-fullheight is-default is-bold">
 <layout-header></layout-header>
  <div class="ourservices">
    <p>This is an ourservices page</p>
  </div>
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

