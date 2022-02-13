<template>
  <div class="container">
    <h1>User's Profile</h1>
    <div class="personalInfo">
      <img :src="user.avatar" alt="Oops, something is wrong" />
      <ul>
        <li>
          <h3>Firstname:&nbsp;</h3>
          {{ user.first_name }}
        </li>
        <li>
          <h3>Lastname:&nbsp;</h3>
          {{ user.last_name }}
        </li>
        <li>
          <h3>Email:&nbsp;</h3>
          {{ user.email }}
        </li>
      </ul>
    </div>
    <van-button :to="`/`" size="large" round icon="revoke" color="linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = this.peopleList.find(
      (item) => item.id == this.$route.params.userId
    );
  },
  computed: {
    ...mapState(["peopleList"]),
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  margin: 0 auto;
}
.container h1 {
 font-family: "Sofia", sans-serif;
 text-align: center;
}
img {
  border-radius: 20px;
  width: 128px;
}
.personalInfo {
  display: flex;
  align-items: center;
  margin: 40px 0;
}
.personalInfo ul {
  margin-left: 20px;
  flex: 1;
  overflow: hidden;
}
.personalInfo li {
  display: flex;
  margin: 10px 0;
  line-height: 100%;
}
</style>