<!-- 출력순서: 6 -->
<!-- 사진: 그리드, 팝업창 -->
<!-- 글자: TBD -->
<!-- 글자효과: TBD -->
<!-- 그리드, 클릭 시 팝업 -->
<template>
  <div class="gallery">
    <div class="gallery-container">
      <h2 class="text-center">갤러리</h2>
      <v-row>
        <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'GalleryCard',
  data() {
    return {
      images: [
        { src: "https://picsum.photos/id/1/400/600" },
        { src: "https://picsum.photos/id/2/400/600" },
        { src: "https://picsum.photos/id/3/400/600" },
        { src: "https://picsum.photos/id/4/400/600" },
        { src: "https://picsum.photos/id/5/400/600" },
        { src: "https://picsum.photos/id/6/400/600" },
        { src: "https://picsum.photos/id/7/400/600" },
        { src: "https://picsum.photos/id/8/400/600" },
      ],
    };
  },
};
</script>
  
<style scoped>
.gallery {
  background-color: rgb(188, 188, 231)
}

.gallery-container {
  background-color: blueviolet;
  width: 100%;
}
</style>