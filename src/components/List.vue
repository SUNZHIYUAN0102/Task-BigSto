<template>
  <div class="container">
    <van-search v-model="value" placeholder="Please input your keywords" />
    <van-list
      class="van-clearfix"
      v-model="loading"
      :finished="finished"
      finished-text="Nothing More"
      @load="onLoad"
    >
      <van-cell
        :to="`/detail/${item.id}`"
        v-for="item in handlePeopleList"
        :key="item.id"
      >
        <img :src="item.avatar" alt="Oops, something is wrong" />
        <ul class="userInfo">
          <li>
            <h3>{{ item.first_name }} {{ item.last_name }}</h3>
          </li>
          <li>{{ item.email }}</li>
        </ul>
        <van-button
          @click.stop="handleDelete(item.id)"
          round
          icon="delete-o"
          type="danger"
          size="small"
        ></van-button>
      </van-cell>
      <van-divider />
    </van-list>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [],
      loading: false,
      value: "",
    };
  },
  created() {
    axios.get("https://reqres.in/api/users").then((res) => {
      this.getTotalNum(res.data.total_pages);
    });
  },
  methods: {
    ...mapMutations([
      "deletePerson",
      "getTotalNum",
      "setPageNum",
      "setLoading",
      "setPeopleList",
    ]),
    onLoad() {
      axios
        .get(`https://reqres.in/api/users?page=${this.pageNum}`)
        .then((res) => {
          this.list = [...this.list, ...res.data.data];
          this.setPeopleList(this.list);
          this.loading = false;
          if (this.pageNum === this.totalNum) {
            this.setLoading();
          }
          this.setPageNum();
        });
    },
    handleDelete(id) {
      this.$dialog
        .confirm({
          title: "Delete Confirmation",
          message: "Are you sure for deleting this person?",
        })
        .then(() => {
          this.deletePerson(id);
        })
        .catch(() => {});
    },
  },
  computed: {
    ...mapState(["peopleList", "pageNum", "totalNum", "finished"]),
    handlePeopleList() {
      if (this.value === "") {
        return this.peopleList;
      } else {
        return this.peopleList.filter(
          (item) =>
            item.first_name.toUpperCase().includes(this.value.toUpperCase()) ||
            item.last_name.toUpperCase().includes(this.value.toUpperCase())
        );
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 128px;
  border-radius: 20px;
}
.van-cell__value {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userInfo {
  padding: 10px;
  flex: 1;
  overflow: hidden;
  word-break: keep-all;
}
.userInfo li {
  text-align: center;
  overflow: hidden;
}

.userInfo li h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>