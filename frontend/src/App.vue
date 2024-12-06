<script setup>
//

import ProductTableView from "@/pages/ProductTableView.vue";
</script>

<template>
  <v-app class="">
    <v-main class="">
      <v-container>
        <ProductTableView/>
      </v-container>

      <v-footer class="footer">
        <div>
          Copyright &copy; Jailton Júnior - Fullstack Developer 2022 - {{ new Date().getFullYear() }}
        </div>
        <div class="my-links">
          <a href="https://www.linkedin.com/in/jailton-junior/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/linkedin-svgrepo-com.svg" height="40" title="Linkedin" alt="Linkedin"/>
          </a>
        </div>
        <div class="my-links">
          <a href="https://github.com/jailtonjuniordev" target="_blank" rel="noopener noreferrer">
            <img src="./assets/github-svgrepo-com.svg" height="40" title="Github" alt="Linkedin"/>
          </a>
        </div>
      </v-footer>

    </v-main>
  </v-app>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 10px;
  user-select: none;
  gap: 5px;

}

.my-links {
  margin-top: 7px;
}

</style>
