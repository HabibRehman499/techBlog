<template>
  <div class="container">
    <div class="header">
    </div>
    

  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  grid-gap: 20px;
}

.header {

  background: url('../assets/header.png') no-repeat;
  padding: 20px;
  width: 97.4%;
display: flex;
justify-content: center;
align-items: center;
min-height: 300px;
  text-align: center;
  background-position: 50% 50%!important;
  background-size: cover;
}
.headerVideo{
width: 100%;

/* height: 50vh; */

}
</style>
