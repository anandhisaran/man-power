<template>
  <section class="hero is-fullheight is-default is-bold">
    <layout-header></layout-header>
    <div class="contactus section">
      <div class="hero-body">
        <div class="container">
          <div class="subpage_block_entry">
            <h4 class="banner-title-outer is-size-1 has-text-center">About page</h4>
          </div>
        </div>
      </div>
    </div>
    <section class="section">
      <h4 class="has-text-left title is-5">Mission</h4>
      <p class="has-text-left is-size-6 content">
        Our mission is to provide our clients and candidates with
        consistently superior and proficient services which will
        improve their productivity, profitability and well being,
        on both a corporate and personal level.
      </p>
      <h4 class="has-text-left title is-5">Vision</h4>
      <p class="has-text-left is-size-6 content">
        To emerge as the Most Trusted Recruitments Service Provider
        in the Industry, anchored on the Values of Growth,
        Professionalism, and Transparency & Accountability.
      </p>
      <ul class="menu-list about_list">
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Innovation:</strong>
            </div>
            <div
              class="column is-6 is-paddingless"
            >Forwarding thinking, planning and execution to expand our horizons</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Integrity:</strong>
            </div>
            <div class="column is-6 is-paddingless">Honesty & transparency in what we say, do and think</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Passion:</strong>
            </div>
            <div class="column is-6 is-paddingless">Enthusiasm, desire & commitment to succeed.</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Fairness:</strong>
            </div>
            <div class="column is-6 is-paddingless">to ensure everyone counts</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Teamwork:</strong>
            </div>
            <div class="column is-6 is-paddingless">to achieve our potential</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Excellence:</strong>
            </div>
            <div class="column is-6 is-paddingless">to be recognize as the best</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Growth:</strong>
            </div>
            <div class="column is-6 is-paddingless">to continually improve</div>
          </div>
        </li>
        <li>
          <div class="columns">
            <div class="column is-1 is-paddingless">
              <strong>Trust:</strong>
            </div>
            <div class="column is-6 is-paddingless">Engender trust in our interactions with each other</div>
          </div>
        </li>
      </ul>
    </section>
    <layout-footer></layout-footer>
  </section>
</template>
<script>
import LayoutHeader from "@/views/layouts/Header.vue";
import LayoutFooter from "@/views/layouts/Footer.vue";
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
};
</script>

