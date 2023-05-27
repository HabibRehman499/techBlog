<template>
  <!-- header -->
  <el-row :gutter="0">
    <el-col :xs="24" :md="24" :lg="24" :xl="24" :offset="0">
      <img src="../assets/header.png" alt="Logo" />
    </el-col>

  
  </el-row>

 
    <h2>Explore Topics</h2>

    <!-- Cards -->
    <el-row id="cards" :gutter="0" >
      
      <!-- Card 1 Technology -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 10px;">
            <span>Technology</span>
          </div>
          <img src="../assets/technology.png" alt="">
        </el-card>
      </el-col>
      <!-- Card 2 Gamming -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 10px;">
            <span>Gamming</span>
          </div>
          <img src="../assets/gamming.png" alt="">
        </el-card>
      </el-col>
      <!-- Card 3 Fashion & Designing -->
      <el-col id="cardsCol" :xs="24" :md="6" :lg="6" :xl="6" :offset="0">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header" style="text-align: center;padding-bottom: 10px;">
            <span>Fashion & Designing</span>
          </div>
          <img src="../assets/fs.png" alt="">
        </el-card>
      </el-col>
    </el-row>

  
</template>

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

</style>
