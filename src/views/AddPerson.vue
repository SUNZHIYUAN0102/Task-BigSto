<template>
  <div class="container">
    <h1>Add New User</h1>
    <van-form @submit="onSubmit">
      <van-field
        v-model="first_name"
        clearable
        maxlength="15"
        name="first_name"
        label="Firstname"
        placeholder="Firstname"
        :rules="[{ required: true, message: 'Firstname is required' }]"
      />
      <van-field
        v-model="last_name"
        clearable
        maxlength="15"
        name="last_name"
        label="Lastname"
        placeholder="Lastname"
        :rules="[{ required: true, message: 'Lastname is required' }]"
      />
      <van-field
        v-model="email"
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        clearable
        maxlength="20"
        :rules="[
          {
            required: true,
            message: 'Email is required',
          },
          {
            pattern:
              /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
            message: 'Please input correct email address',
          },
        ]"
      />
      <van-field
        v-model="avatar"
        clearable
        name="avatar"
        label="Avatar"
        placeholder="Avatar"
        :rules="[{ required: true, message: 'Avatar is required' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >Submit</van-button
        >
      </div>
    </van-form>
  </div>
</template>


<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      avatar: "",
      email: "",
    };
  },
  methods: {
    onSubmit(values) {
      values.id = uuidv4();
      this.$store.commit("addPerson", values);
      this.$router.push("/");
    },
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
.van-form {
  margin-top: 50px;
}
</style>