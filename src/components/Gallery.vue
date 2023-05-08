<!-- 출력순서: 6 -->
<!-- 사진: 그리드, 팝업창 -->
<!-- 글자: TBD -->
<!-- 글자효과: TBD -->
<!-- 그리드, 클릭 시 팝업 -->
<template>
  <div class="gallery">
    <div class="gallery-container">
      <h2>GalleryCard</h2>
        <v-app class="fill-height">
          <v-container class="pa-3">
            <v-row>
                <v-col v-for="item in items" :key="item.id" color="grey lighten-3" flat cols="6">
                  <v-img :src="item.img" :lazy-src="item.img" @click="openDialog(item.img)">
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
          img: require("../assets/bride.jpg")
        },
        {
          id: 2,
          popup: false,
          img: require("../assets/groom.jpg")
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
          img: require("../assets/bride.jpg")
        },
        {
          id: 6,
          popup: false,
          img: require("../assets/bride.jpg")
        },
        // {
        //   id: 7,
        //   popup: false,
        //   img: require("../assets/bride.jpg")
        // },
        // {
        //   id: 8,
        //   popup: false,
        //   img: require("../assets/bride.jpg")
        // },
        // {
        //   id: 9,
        //   popup: false,
        //   img: require("../assets/bride.jpg")
        // }
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
h2 {
  background-color: red;
}

.gallery {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: rgb(188, 188, 231)
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .gallery-container {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .gallery-container {
    position: absolute;
    top: 0;
    left: 30%;
    width: 40%;
  }
}
</style>