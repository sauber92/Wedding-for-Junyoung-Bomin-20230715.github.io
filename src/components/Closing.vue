<!-- 출력순서: 9 -->
<!-- 사진: TBD -->
<!-- 글자: TBD, 쿼리스트링 이용 -->
<!-- 글자효과: TBD -->
<template>
  <div :class="{'closing':true, 'closing-change-height': show1|show2}">
    <div class="container">
			<span class="title">마음 전하실 곳</span>
      
      <div :class="{'account-box': true, 'groom': true}">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(1)">
            신랑 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </span>
          </v-btn>
          <vue-slide-up-down v-model="show1" class="family">
            <v-row v-for="(member, index) in family1" :key="index" class="row" justify="center">
              <v-col cols="7" class="col">
                <v-row>
                  <v-col cols="5" class="v-col-4 col1">{{ member.position }}</v-col>
                  <v-col cols="7" class="v-col-4 col2">{{ member.name }}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="5" class="v-col-4 col1">{{ member.bank }}</v-col>
                  <v-col cols="7" class="v-col-4 col2">{{ member.account }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="5" class="col">
                <v-btn class="copy-btn" variant="tonal" size="small" color="brown-lighten-1" @click="copySelectedMember(member)">
                  <font-awesome-icon icon="fa-regular fa-copy" />
                  계좌 복사하기
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout" variant="flat" color="brown-lighten-4" rounded="pill">
                  <span class="snackbar-content"><strong>{{ selectedMember.name }}</strong>님의 계좌를 복사했습니다.</span>
                </v-snackbar>
              </v-col>
            </v-row>
          </vue-slide-up-down>
        </div>
      </div>

      <div :class="{'account-box': true, 'bride': true, 'slide-up': !show1, 'slide-down': show1}">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(2)">
            신부 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </span>
          </v-btn>
          <vue-slide-up-down v-model="show2" class="family">
            <v-row v-for="(member, index) in family2" :key="index" class="row" justify="center">
              <v-col cols="7" class="col">
                <v-row>
                  <v-col cols="5" class="v-col-4 col1">{{ member.position }}</v-col>
                  <v-col cols="7" class="v-col-4 col2">{{ member.name }}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="5" class="v-col-4 col1">{{ member.bank }}</v-col>
                  <v-col cols="7" class="v-col-4 col2">{{ member.account }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="5" class="col">
                <v-btn class="copy-btn" variant="tonal" size="small" color="brown-lighten-1" @click="copySelectedMember(member)">
                  <font-awesome-icon icon="fa-regular fa-copy" />
                  계좌 복사하기
                </v-btn>
                <v-snackbar v-model="snackbar" :timeout="timeout" variant="flat" color="brown-lighten-4" rounded="pill">
                  <span class="snackbar-content"><strong>{{ selectedMember.name }}</strong>님의 계좌를 복사했습니다.</span>
                </v-snackbar>
              </v-col>
            </v-row>
          </vue-slide-up-down>
        </div>
      </div>

      <div :class="{'message': true, 'slide-up': !(show1|show2), 'slide-down': show1|show2}">
        <p>
          평생의 짝이 되어<br/>
          믿음의 가정을 이루겠습니다.<br/>
          저희의 길을 축복해주시고<br/>
          오셔서 예쁜 모습 많이 담아주세요.<br/><br/>
          준영ㆍ보민 올림
        </p>
			</div>

      <div :class="{'share': true, 'slide-up': !(show1|show2), 'slide-down-share': show1|show2}">
        <v-btn variant="flat" rounded="pill" color="brown-lighten-4" @click="share">
          <font-awesome-icon icon="fa-regular fa-share-from-square" class="icon" />
          청접장 공유하기
        </v-btn>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ClosingCard',
	data() {
		return {
      show1: false,
      show2: false,
      snackbar: false,
      timeout: 1500,
      selectedMember: {name: '', account: ''},
      family1: [
          { position: '신랑', name: '정준영', bank: '국민은행', account: '94726400957'},
          { position: '아버님', name: '정진열', bank: '국민은행', account: '01048084682'},
          { position: '어머님', name: '유재희', bank: '국민은행', account: '01089287034'},
      ],
      family2: [
          { position: '신부', name: '전보민', bank: '국민은행', account: '01098818509'},
          { position: '아버님', name: '전이원', bank: '국민은행', account: '94726400957'},
          { position: '어머님', name: '양영옥', bank: '국민은행', account: '94726400957'},
      ]
		};
	},
	methods: {
    toggleShow(button) {
      if (button === 1) {
        this.show1 = !this.show1;
        this.show2 = false;
      } else if (button === 2) {
        this.show1 = false;
        this.show2 = !this.show2;
      }
    },
    copySelectedMember(member) {
      const textarea = document.createElement('textarea');
      textarea.value = member.account;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 9999);
      document.execCommand('copy');
      document.body.removeChild(textarea);

      this.selectedMember.name = member.name;
      this.selectedMember.account = member.account;
      this.snackbar = true;
    },
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: '준영♥보민 결혼합니다',
            text: '2022년 7월 15일 오전 11시',
            url: 'https://wedding-for-junyoung-bomin-20230715.github.io/'
          });
          console.log('Shared successfully!');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        console.log('Web Share API not supported.');
      }
    }
	}
}
</script>
  
<style scoped>
.closing {
  position: relative;
  display: flex;
  justify-content: center;
  height: 40em;
}

.closing-change-height {
  transition: transform 0.5s ease;
  height: 65em;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  display: inline-block;
  height: 2em;
  border-bottom: solid 0.1em #5d493b;
}

.account-box {
	position: absolute;
	display: flex;
  flex-direction: column;
  align-items: center;
	width: 90%;
  height: 7%;
  left: 5%;
}

.account-box .wrapper {
  flex: 1;
	width: 100%;
}

.account-box .wrapper .button{
  width: 100%;
  height: 3em;
  background-color: #f1efea;
  border-radius: 8px;
}

.account-box .wrapper .icon {
  position: absolute;
  right: 10%;
}

.account-box .wrapper .family {
  position: absolute;
  width: 90%;
  left: 5%;
  margin-bottom: 10px;
  font-size: 0.9em;
}

.groom {
	top: 4em;
}

.bride {
	top: 7.5em;
}

.slide-up {
  transition: transform 0.5s ease;
  transform: translateY(0);
}

.slide-down {
  transition: transform 0.5s ease;
  transform: translateY(21em);
}

.slide-down-share {
  transition: transform 0.5s ease;
  transform: translateY(25em);
}

.family .row {
  /* background-color: yellow; */
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  height: 8em;
  justify-content: center;
  border-bottom: solid 0.1em #b9a18f;
}

.family .row .col {
  align-self: center;
}

.family .col .col1 {
  text-align: right;
}

.family .col .col2 {
  text-align: left;
}

.family .copy-btn {
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
  align-items: center;
}

.snackbar-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
	position: absolute;
  display: flex;
	width: 90%;
	height: 40%;
	left: 5%;
	top: 12em;
	/* background-color: yellow; */
}

.message p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.share {
  position: absolute;
  display: flex;
  top: 32em;
  width: 100%;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
  align-items: center;
}

.share .icon {
  margin-right: 10px;
}
</style>