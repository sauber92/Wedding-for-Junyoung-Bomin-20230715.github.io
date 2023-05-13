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
                  @click="openDialog(items[i].img)"
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
            <v-dialog v-model="dialog" max-width="800">
              <v-card>
                <v-img :src="dialogImg" max-height="600" />
                <v-card-actions>
                  <v-btn color="primary" text @click="closeDialog">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
          id: 1,
          popup: false,
          img: require("../assets/bride.jpeg")
        },
        {
          id: 2,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 3,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 4,
          popup: false,
          img: require("../assets/mainveiw_0.gif")
        },
        {
          id: 5,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 6,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 7,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 8,
          popup: false,
          img: require("../assets/intro.jpg")
        },
        {
          id: 9,
          popup: false,
          img: require("../assets/intro.jpg")
        }
      ],
      dialog: false,
      dialogImg: ""
    };
  },
  methods: {
    openDialog(img) {
      this.dialogImg = img;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    }
  },
};
</script>
  
<style scoped>
.title {
  display: inline-block;
  height: 3.4%;
  border-bottom: solid 0.1em #5d493b;
}

.gallery {
  position: relative;
  display: flex;
  justify-content: center;
}

/* 갤럭시 폴드 */
@media screen and (max-device-width : 359px) {
  .gallery-container {
    position: absolute;
    top: 5%;
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
    top: 2%;
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
    top: 2%;
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
    top: 0;
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
    top: 0;
    left: 0%;
    width: 100%;
  }
  .title {
    background-color: purple;
  }
}
</style>