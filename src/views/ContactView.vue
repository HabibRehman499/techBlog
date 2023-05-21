<template>
  <div class="container">
    <div class="box">Content 1</div>
    <div class="box">Content 2</div>
    <div class="box">Content 3</div>
    <div class="box">Content 4</div>

  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px;
}

.box {
  background-color: #e0e0e0;
  padding: 20px;
  text-align: center;
}
</style>
