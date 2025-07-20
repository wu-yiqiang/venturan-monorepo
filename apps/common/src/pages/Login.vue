<template>
  <section class="Login">
    <div class="LoginForm">
      <a-form :model="form" direction="horizontal" @submit="handleSubmit">
        <a-form-item field="account">
          <a-input v-model="form.account" placeholder="Account" />
        </a-form-item>
        <a-form-item field="password">
          <a-input-password v-model:visibility="form.password" placeholder="Password" :defaultVisibility="false" allow-clear />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const form = ref({
  account: '',
  password: ''
})
const handleSubmit = (data) => {
  console.log(data)
}
</script>
<style lang="scss" scoped>
.Login {
  background-image: url('../../../../packages/assets/image/commonImage.png');
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  .LoginForm {
    background-color: #fff;
    border-radius: 4px;
    padding: 14px;
    display: grid;
    place-content: center;
  }
}
</style>
