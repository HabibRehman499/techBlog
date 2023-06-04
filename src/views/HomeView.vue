<template>
  <!-- header -->
  <el-row :gutter="0" style="margin-top: 1%">
    <el-col :xs="24" :md="24" :lg="24" :xl="24" :offset="0">
      <img
        src="../assets/TechTalk.png"
        alt="Logo"
        style="object-fit: cover; margin-top: 0%"
      />
    </el-col>
  </el-row>

  <div>
    <h2 id="cardsHeading" style="margin-top: 2%">Explore Topics</h2>
  </div>

  <!-- Cards -->
  <el-row id="cards" :gutter="0" style="margin-top: 1%">
    <!-- Card 1 Technology -->
    <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <router-link to="/technology">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
          <div slot="header" style="text-align: center; padding-bottom: 0px">
            <span id="cardsHeading">Technology</span>
          </div>

          <img
            src="../assets/technology.png"
            style="height: 400px !important"
            alt=""
          />
        </el-card>
      </router-link>
      <!-- <router-view/> -->
    </el-col>
    <!-- Card 2 Gamming -->
    <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <router-link to="/gamming">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
          <div slot="header" style="text-align: center; padding-bottom: 0px">
            <span id="cardsHeading">Gamming</span>
          </div>
          <img
            src="../assets/gamming.png"
            style="height: 400px !important"
            alt=""
          />
        </el-card>
      </router-link>
    </el-col>

    <!-- Card 3 Fashion & Designing -->
    <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <router-link to="/fashion_Designing">
        <el-card shadow="always" :body-style="{ padding: '10px' }">
          <div slot="header" style="text-align: center; padding-bottom: 0px">
            <span id="cardsHeading">Fashion & Designing</span>
          </div>
          <img src="../assets/fs.png" style="height: 400px !important" alt="" />
        </el-card>
      </router-link>
    </el-col>
  </el-row>

  <!-- Subscribe Newsletter -->
  <el-row :gutter="0" id="subscribeEmail" style="margin-top: 1%">
    <el-col :xs="24" :md="12" :lg="12" :xl="12" :offset="0">
      <div>
        <h3>Subscribe Newsletter</h3>
        <p>
          Get the latest blog news, trends, street-style snaps, runway coverage,
          party reports, and more to your inbox!
        </p>
      </div>
    </el-col>
    <el-col :xs="24" :md="12" :lg="12" :xl="12" :offset="0">
      <div>
        <el-form-item label="">
          <el-input
            v-model="form.email"
            placeholder="Enter Your Email"
            style="width: 50%; height: 110%; margin-right: 3%"
          ></el-input>
          <el-button size="large" type="success">Subscribe</el-button>
        </el-form-item>
      </div>
    </el-col>
  </el-row>

  <!-- Follow Me -->
  <el-row :gutter="0" id="followMe" style="margin-top: 1%">
    <el-col :xs="24" :md="12" :lg="12" :xl="12" :offset="0">
      <div>
        <h3>Follow Me</h3>
      </div>
      <div id="followMe" style="display: flex; flex-direction: row">
        <div id="followMe" style="margin: 3%">
          <i class="fa-brands fa-facebook"></i> Facebook
        </div>
        <div id="followMe" style="margin: 3%">
          <i class="fa-brands fa-instagram"></i> Instagram
        </div>
      </div>
    </el-col>
  </el-row>

  <!-- Footer -->
  <el-row :gutter="0" id="footer" style="margin-top: 1%">
    <el-col :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <div id="innerFooter">
        <h4>Tech Talk</h4>
        <span>techtalk@gmail.com</span><br />
        <span>+92 335 1724336</span>
      </div>
    </el-col>
    <el-col :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <div id="innerFooter">
        <i>CATEGORIES</i>
      </div>
    </el-col>
    <el-col :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      
        <div id="innerFooter"><i>LINKS</i></div>
     
    </el-col>
    <el-col :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
      <div id="innerFooter"><i>Address</i></div>
    </el-col>
  </el-row>
</template>

<script>
import Technology from "../components/Technology.vue";
import Gamming from "../components/Gamming.vue";
import FashionAndDesigning from "../components/FashionAndDesigning.vue";

export default {
  components: {
    Technology,
    FashionAndDesigning,
    Gamming,
  },
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
};
</script>

<style scoped="less">
.container {
  display: flex;

  /* grid-template-columns: repeat(auto-fit, minmax(auto-fit, 1fr)); */
  grid-gap: 20px;
}

img {
  display: flex;
  width: 100%;
  height: 300px;
  object-fit: fill;
  z-index: 10;
}
.maginBetweenDiv {
  margin-top: 2%;
}

#cards {
  /* padding: 20px; */
  justify-content: space-between;
}

#cardsCol {
  /* margin: 0px 20px 0px 20px; */
  border-radius: 10px !important;
}
#cardsHeading {
  display: inline-block;
  /* position: relative; */
  font-size: 30px;
  font-weight: 300;
  /* z-index: 10; */
  line-height: 1em;
  margin-bottom: 0;
  /* padding: 0 10px; */
  font-family: "Playfair Display", serif;
  color: #000;
}

#subscribeEmail {
  /* border:2px solid black; */
  align-items: center;
  padding: 3% 2%;
  background-color: #f4f4f4;
}
#followMe {
  /* border:2px solid black; */
  align-items: center;
  justify-content: center;
  padding: 1% 2%;
  background-color: #f4f4f4;
  text-align: center;
}
#footer {
  /* border:2px solid black; */
  align-items: center;
  /* justify-content: center; */
  /* padding-left: 20% !important; */
  padding: 2% 2%;
  background-color: #282e3a;
  color: white;
  /* text-align: center; */
}
#innerFooter {
  margin: 3%;
}

p {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  padding-top: 1%;
}

/* Dynamic Classes */

.el-form-item >>> .el-form-item__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  line-height: 32px;
  position: relative;
  /* font-size: var(--font-size); */
  min-width: 0;
  justify-content: center !important;
}
</style>
