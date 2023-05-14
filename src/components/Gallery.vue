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
              <v-col v-for="i in 6" :key="items[i].id" color="grey lighten-3" flat cols="6" lg="4" sm="6">
                <v-img
                  class="card"
                  :src="items[i].img"
                  :lazy-src="items[i].img"
                  @click="openDialog(items[i].img, i)"
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
            <!--  -->
            <v-dialog v-model="dialog" max-width="800">
              <v-card>
                <v-carousel :start-index="carouselStartIndex" :show-arrows="false" hide-delimiters>
                  <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.img"
                    cover
                  ></v-carousel-item>
                </v-carousel>
                <v-card-actions class="xmark d-flex justify-end">
                  <v-btn color="primary" text @click="closeDialog">X</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!--  -->

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
      carouselStartIndex: 4
    };
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
  height: 96.6%;
}

.xmark {
  position: absolute;
  top: ca0;
  left: 0;
  right: 0;
  background-color: transparent;
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