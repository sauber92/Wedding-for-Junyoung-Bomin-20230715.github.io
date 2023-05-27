<!-- 출력순서: 8 -->
<!-- 사진: 그리드, 팝업창 -->
<!-- 글자: TBD -->
<!-- 글자효과: TBD -->
<!-- 그리드, 클릭 시 팝업 -->
<template>
  <div class="gallery">
    <div class="gallery-container">
      <span class="title">갤러리</span>
        <v-app>
          <v-container grid-list-xs>
            <v-row>
              <v-col v-for="(item, index) in filteredItems" :key="index" color="grey lighten-3" flat cols="6" lg="6" sm="6">
                <v-img
                  class="card"
                  :src="item.img"
                  :lazy-src="item.img"
                  @click="openDialog(item.img, index)"
                  height="100%"
                >
                  <template v-slot:placeholder>
                    <v-row class="ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey-lighten-5">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
            <!--  Dialog Carousel -->
            <v-dialog v-model="dialog" fullscreen :scrim="false">
              <div class="card-info">
                <span> {{ carouselStartIndex + 1 }} / {{ items.length }} </span>
                <v-btn class="xmark" variant="plain" @click="closeDialog">
                  <font-awesome-icon icon="fa-regular fa-circle-xmark" size="xl" />
                </v-btn>
              </div>
              <v-card class="card-item">
                <v-carousel class="carousel" v-model="carouselStartIndex" :show-arrows="false" hide-delimiters>
                  <v-carousel-item
                    v-for="(item, index) in items"
                    :key="index"
                    :src="item.img"
                    contains
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
        // {
        //   id: 0,
        //   popup: false,
        //   img: require("../assets/carousel/1.jpg")
        // },
        {
          id: 1,
          popup: false,
          img: require("../assets/carousel/2.jpg")
        },
        {
          id: 2,
          popup: false,
          img: require("../assets/carousel/6.jpg")
        },
        {
          id: 3,
          popup: false,
          img: require("../assets/carousel/7.jpg")
        },
        {
          id: 4,
          popup: false,
          img: require("../assets/carousel/8.jpg")
        },
        {
          id: 5,
          popup: false,
          img: require("../assets/carousel/1.jpg")
        },
        {
          id: 6,
          popup: false,
          img: require("../assets/carousel/5.jpg")
        },
        {
          id: 7,
          popup: false,
          img: require("../assets/carousel/3.jpg")
        },
        {
          id: 8,
          popup: false,
          img: require("../assets/carousel/4.jpg")
        },
        {
          id: 9,
          popup: false,
          img: require("../assets/carousel/9.jpg")
        },
        {
          id: 10,
          popup: false,
          img: require("../assets/carousel/10.jpg")
        },
        {
          id: 11,
          popup: false,
          img: require("../assets/carousel/11.jpg")
        },
        {
          id: 12,
          popup: false,
          img: require("../assets/carousel/12.jpg")
        },
        {
          id: 13,
          popup: false,
          img: require("../assets/carousel/13.jpg")
        },
        {
          id: 14,
          popup: false,
          img: require("../assets/carousel/14.jpg")
        },
        {
          id: 15,
          popup: false,
          img: require("../assets/carousel/15.jpg")
        },
        {
          id: 16,
          popup: false,
          img: require("../assets/carousel/16.jpg")
        },
        {
          id: 17,
          popup: false,
          img: require("../assets/carousel/17.jpg")
        },
        {
          id: 18,
          popup: false,
          img: require("../assets/carousel/18.jpg")
        },
        {
          id: 19,
          popup: false,
          img: require("../assets/carousel/19.jpg")
        },
        {
          id: 20,
          popup: false,
          img: require("../assets/carousel/20.jpg")
        },
        {
          id: 21,
          popup: false,
          img: require("../assets/carousel/21.jpg")
        },
        {
          id: 22,
          popup: false,
          img: require("../assets/carousel/22.jpg")
        },

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
  height: calc(var(--vh) * 110);
}

.title {
  display: inline-block;
  height: 3.4%;
  border-bottom: solid 0.1em #5d493b;
  color: #5d493b;
}

.xmark {
  position: absolute;
  right: 0;
  top: 10%;
  color: #BDBDBD;
  background-color: transparent;
}

.card-info {
  position: relative;
  display: flex;
  color: #BDBDBD;
  background-color: rgb(54, 54, 54);
  z-index: 1;
}

.card-info span {
  position: relative;
  display: flex;
  left: 5%;
  top: 50%;
}

.card-item {
  display: flex;
  background-color: rgb(54, 54, 54);
  z-index: 0;
}

.card-item .carousel {
  top: 50%;
  transform: translate(0%, -50%);
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 5%; */
    left: 0%;
    width: 100%;
  }
}

/* 아이폰 SE */
@media screen and (min-device-width : 359px) and (max-device-width : 376px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
}

/* 모바일 버전 */
@media screen and (min-device-width : 376px) and (max-device-width: 767px) {
  .gallery {
    height: calc(var(--vh) * 130);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
  }
}

/* 아이패드 미니 버전 */
@media screen and (min-device-width : 768px) and (max-device-width: 769px) {
  .gallery {
    height: calc(var(--vh) * 160);
  }
  .gallery-container {
    position: absolute;
    /* top: 2%; */
    left: 0%;
    width: 100%;
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
}

/* 아이패드 프로 */
@media only screen and (min-device-width : 1024px) {
  .gallery {
    height: calc(var(--vh) * 150);
  }
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
}

/* 아이패드 (가로) */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  .gallery {
    height: calc(var(--vh) * 180);
  }
  .gallery-container {
    position: absolute;
    /* top: 0; */
    left: 0%;
    width: 100%;
  }
}
</style>