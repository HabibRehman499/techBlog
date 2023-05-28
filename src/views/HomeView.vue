<template>
  <!-- header -->
  <el-row :gutter="0">
    <el-col :xs="24" :md="24" :lg="24" :xl="24" :offset="0">
      
      <img src="../assets/TechTalk.png" alt="Logo" style="object-fit: cover;margin-top: 6%;"/>
    </el-col>

  
  </el-row>

 <div>

   <h2 id="cardsHeading">Explore Topics</h2>
  </div>

    <!-- Cards -->
    <el-row id="cards" :gutter="0" >
      
      <!-- Card 1 Technology -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 0px;">
            <span id="cardsHeading">Technology</span>
          </div>
          <img src="../assets/technology.png" style="height:400px!important; " alt="">
        </el-card>
      </el-col>
      <!-- Card 2 Gamming -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 0px;">
            <span id="cardsHeading">Gamming</span>
          </div>
          <img src="../assets/gamming.png" style="height:400px!important;" alt="">
        </el-card>
      </el-col>
      <!-- Card 3 Fashion & Designing -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 0px;">
            <span id="cardsHeading">Fashion & Designing</span>
          </div>
          <img src="../assets/fs.png" style="height:400px!important;" alt="">
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="0" id="subscribeEmail" >
      <el-col :xs="24" :md="12" :lg="12" :xl="12" :offset="0">
        <div>
          <h3>Subscribe Newsletter</h3>
          <p>Get the latest blog news, trends, street-style snaps, runway coverage,
party reports, and more to your inbox!</p>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="12" :xl="12" :offset="0">
        <div >
          <el-form-item label="" >
            <el-input v-model="form.email" placeholder="Enter Your Email" style="width:50%;height:110%;margin-right: 3%;"></el-input>
            <el-button size="large" type="success">Subscribe</el-button>
          </el-form-item>
        </div>
      </el-col>
     
    </el-row>
    

  
</template>

<script>
export default{
  data(){
    return{
      form:{
        email:''
      },
    }
  },
}
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
.headerVideo {
  width: 100%;
}


  #cards{
    /* padding: 20px; */
    justify-content: space-between;
    
  }

  #cardsCol{
    /* margin: 0px 20px 0px 20px; */
    border-radius: 10px !important;

  }
  #cardsHeading{
    display: inline-block;
    /* position: relative; */
    font-size: 30px;
    font-weight: 300;
    /* z-index: 10; */
    line-height: 1em;
    margin-bottom: 0;
    padding: 0 10px;
    font-family: "Playfair Display",serif;
    color: #000;

  }

  #subscribeEmail{
    /* border:2px solid black; */
    align-items: center;
    padding: 3% 2%;
    background-color: #f4f4f4;
  }

  p{
    font-family: "Poppins",sans-serif;
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
