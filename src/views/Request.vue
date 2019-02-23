<template>
 <section class="hero is-fullheight is-default is-bold">
 <layout-header></layout-header>
    <div class="contactus section">
      <div class="hero-body">
      <div class="container">
        <div class="subpage_block_entry">
            <h4 class="banner-title-outer is-size-1 has-text-center"> Request page</h4>
        </div>
        </div>
    </div>
  </div>
   <section class="section">
     <h4 class="has-text-left title is-5">Heading</h4>
     <p class="has-text-left is-size-6 content">
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
     </p>
         <form>
              <div class="container">
    <div class="columns is-centered">
        <div class="column is-6">       
<div class="field">
  <label class="label has-text-left">Company Name</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="Company Name" >
  </div>
  <!-- <p class="help is-danger has-text-left">This username is available</p> -->
</div>

<div class="field">
  <label class="label has-text-left">Contact Person Name</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="Contact Person Name">
  </div>
  <!-- <p class="help is-danger has-text-left">This email is available</p> -->
</div>

<div class="field">
  <label class="label has-text-left">Designation</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="Designation">
  </div>
  <!-- <p class="help is-danger has-text-left">This Mobile is available</p> -->
</div>


<div class="field">
  <label class="label has-text-left">Company Website</label>
 <div class="control">
    <input class="input is-dark" type="text" placeholder="Company Website">
  </div>
  <!-- <p class="help is-danger has-text-left">This Experience is available</p> -->
</div>


<div class="field">
    <label class="label has-text-left">Email Address</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="Email Address">
  </div>
</div>
<div class="field">
    <label class="label has-text-left">Phone/Mobile Nos</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="Phone/Mobile Nos">
  </div>
</div>
<div class="field">
    <label class="label has-text-left">Phone/Mobile Nos</label>
    <div class="control">
 <div class="select">
  <select>
    <option>Select dropdown</option>
    <option>Plumber</option>
     <option>Carpenter</option>
      <option>Car driver</option>
       <option>Fitter</option>
        <option>Electrician</option>
         <option>Mechanic</option>
  </select>
  </div>
</div> 
</div>
        </div>
       <div class="column is-6">
<div class="field">
  <label class="label has-text-left">Query</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>
<div class="field">
  <label class="label has-text-left">No of man power required</label>
 <div class="quantity buttons_added control">
	<input type="button" value="-" class="input button is-dark minus" @click="decrement()">
    <input type="number" name="quantity" 
    title="Qty" min="0.00" :value="quantity" class="quantity_input input-text qty text" 
    size="4" pattern="" inputmode="">
    <input type="button" value="+" class="input button is-dark plus" @click="increment()">
</div>
</div>

<div class="field">
    <label class="label has-text-left">From Date</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="MM/DD/YYY">
  </div>
</div>
<div class="field">
    <label class="label has-text-left">To Date</label>
  <div class="control">
    <input class="input is-dark" type="text" placeholder="MM/DD/YYY">
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="/terms" class="has-text-dark">terms and conditions</a>
    </label>
  </div>
</div>   
  <button type="submit" class="button is-info is-outlined is-rounded">Submit</button>
      </div>
      </div>
</div>
      </form>
   </section>
    <layout-footer></layout-footer>
 </section>
</template>
<script>
import LayoutHeader from '@/views/layouts/Header.vue';
import LayoutFooter  from '@/views/layouts/Footer.vue';
export default {
    name: "Quantity",
     data: function() {
        return {
  quantity: 1
        }
    },
  components: {
    LayoutHeader,
    LayoutFooter
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    }
  }

}
</script>
<style>

.button.is-info.is-outlined:hover {
    background-color: #f69b04 !important;
    border-color: #f69b04 !important;
    color: #fff !important;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
</style>


