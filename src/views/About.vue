<template>
<div class="topspace">
 <layout-header></layout-header>
  <div class="about">
    <p>This is an about page</p>
  </div>
    <layout-footer></layout-footer>
</div>
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

