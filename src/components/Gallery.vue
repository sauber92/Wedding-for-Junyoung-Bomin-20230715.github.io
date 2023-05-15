<!-- 출력순서: 8 -->
<!-- 사진: 그리드, 팝업창 -->
<!-- 글자: TBD -->
<!-- 글자효과: TBD -->
<!-- 그리드, 클릭 시 팝업 -->
<template>
  <div class="gallery">
    <div class="gallery-container">
      <span class="title">갤러리</span>
        <v-app class="fill-height">
          <v-container class="pa-3">
            <v-row>
              <v-col v-for="(item, index) in filteredItems" :key="index" color="grey lighten-3" flat cols="6" lg="4" sm="6">
                <v-img
                  class="card"
                  :src="item.img"
                  :lazy-src="item.img"
                  @click="openDialog(item.img, index)"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey-lighten-5">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
            <!--  Dialog Carousel -->
            <v-dialog v-model="dialog" max-width="800">
              <div class="card-info">
                <span color="grey-lighten-1"> {{ carouselStartIndex + 1 }} / 20</span>
                <!-- <v-btn class="xmark" text @click="closeDialog">
                  <font-awesome-icon icon="fa-regular fa-circle-xmark" />
                </v-btn> -->
              </div>
              <v-card>
                <v-carousel v-model="carouselStartIndex" :show-arrows="false" hide-delimiters>
                  <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.img"
                    cover
                  ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-dialog>
            <!--  Dialog Carousel -->

          </v-container>
        </v-app>
    </div>  
  </div>
</template>
  
<script>
export default {
  name: 'GalleryCard',
  data() {
    return {
      items: [
        {
          id: 0,
          popup: false,
          img: require("../assets/carousel_item_0.jpeg")
        },
        {
          id: 1,
          popup: false,
          img: require("../assets/carousel_item_1.jpeg")
        },
        {
          id: 2,
          popup: false,
          img: require("../assets/carousel_item_2.jpeg")
        },
        {
          id: 3,
          popup: false,
          img: require("../assets/carousel_item_3.jpeg")
        },
        {
          id: 4,
          popup: false,
          img: require("../assets/carousel_item_4.jpeg")
        },
        {
          id: 5,
          popup: false,
          img: require("../assets/carousel_item_5.jpeg")
        },
        {
          id: 6,
          popup: false,
          img: require("../assets/carousel_item_6.jpeg")
        },
        {
          id: 7,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 8,
          popup: false,
          img: require("../assets/bride.jpeg")
        },
        {
          id: 9,
          popup: false,
          img: require("../assets/groom.jpeg")
        }
      ],
      dialog: false,
      dialogImg: "",
      carouselStartIndex: 0
    };
  },
  computed: {
    filteredItems() {
      return this.items.slice(0, 6); // 6개 item만 선별
    }
  },
  methods: {
    openDialog(img, index) {
      this.dialogImg = img;
      this.dialog = true;
      this.carouselStartIndex = index;
    },
    closeDialog() {
      this.dialog = false;
    }
  },
};
</script>
  
<style scoped>
.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.title {
  display: inline-block;
  height: 3.4%;
  border-bottom: solid 0.1em #5d493b;
}

.fill-height {
  background-color: aquamarine;
  height: 93%;
}

.xmark {
  position: absolute;
  right: 0;
  top: 0;
  padding-bottom: -10px;
  color: #BDBDBD;
  background-color: transparent;
}

.card-info {
  margin-bottom: 1%;
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .gallery-container {
    position: absolute;
    /* top: 5%; */
    left: 0%;
    width: 100%;
  }
  .title {
    background-color: red;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 10%;
    width: 80%;
  }
  .title {
    background-color: yellow;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 768px) {
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
  .title {
    background-color: green;
  }
}

/* 데스크탑 버전 */
@media screen and (min-device-width: 769px) and (max-device-width : 1024px) {
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
  .title {
    background-color: blue;
  }
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
  .title {
    background-color: purple;
  }
}
</style>