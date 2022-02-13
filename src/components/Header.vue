<template>
  <header class="page-header">
    <van-button icon="plus" round :to="`add`"/>
  </header>
</template>

<style scoped>
.page-header{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-image: url("http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg");
    background-size: cover;
}
.van-button{
  float: right;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
}
</style>