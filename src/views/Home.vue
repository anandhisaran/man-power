<template>
<div class="topspace">
  <layout-header></layout-header>

  <p>This is Home page</p>
    <layout-footer></layout-footer>
  </div>
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
