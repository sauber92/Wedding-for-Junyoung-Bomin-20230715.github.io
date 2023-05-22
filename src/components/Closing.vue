<!-- 출력순서: 9 -->
<!-- 사진: TBD -->
<!-- 글자: TBD, 쿼리스트링 이용 -->
<!-- 글자효과: TBD -->
<template>
  <div class="closing">
    <div class="container">
			<span class="title">마음 전하실 곳</span>
      <div class="account-box groom">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(1)">
            신랑 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </span>
          </v-btn>
          <div :class="{ 'hidden': !show1, 'family': true }">
            <div class="account">
              <div class="test v-col-8 ma-0 pa-0">
                <div class="v-col-4 position">신랑</div>
                <div class="v-col-auto">정준영</div>
                <div class="v-col-4 position">국민은행</div>
                <div class="v-col-auto">94726400957</div>
              </div>
              <div class="test2 v-col-4 ma-0 pa-0">
                <v-btn>계좌 복사하기</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'account-box': true, 'bride': true, 'slide1': show1}">
        <div class="wrapper">
          <v-btn elevation="0" class="button" @click="toggleShow(2)">
            신부 측 마음 전하실 곳
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </span>
          </v-btn>
          <div :class="{ 'hidden': !show2, 'family': true }">버튼 2을 눌렀을 때 나오는 내용</div>
        </div>
      </div>

      <div :class="{'message': true, 'slide1': show1, 'slide2': show2}">
			</div>

    </div>
  </div>
</template>
  
  <!-- <div> -->
        <!-- <button class="account-btn-groomfamily" id="materialButton" type="button" aria-expanded="false"> -->
            <!-- <span>신랑측 계좌번호</span> -->
            <!-- <span class="account-cursor-span"> -->
                <!-- <span class="material-symbols-rounded custom-material-icon" id="groomExpandBtn">expand_more</span> -->
                
            <!-- </span> -->
        <!-- </button> -->
  <!-- </div> -->

    <!-- <div class="account-box-groomfamily hidden" id="accountBox">
      <div class="account-content-style">
          <div class="account-content-family" id="groomFamily">
              <div class="account-content-family-block">
                  <div class="account-content-role">신랑</div>
                  <div class="account-content-name">정준영</div>
                  <div class="account-content-role">국민은행</div>
                  <div class="account-content-name"><a class="account-num-0">94726400957</a></div>
              </div>
              <div class="account-content-icon">
                  <button type="button" class="account-content-icon-btn">
                      <svg viewBox="0 0 48 48" class="account-content-icon-svg">
                          <path
                              fill="currentColor"
                              class="kakao-logo_svg__st0"
                              d="M21.9 0C9.8 0 0 7.8 0 17.3 0 23.5 4.1 28.9 10.2 32l-2.1 7.7c-.1.2 0 .5.2.7.1.1.3.2.4.2.1 0 .3-.1.4-.1l8.9-6c1.3.2 2.6.3 4 .3 12.1 0 21.9-7.8 21.9-17.3 0-9.7-9.8-17.5-22-17.5z"
                          ></path>
                      </svg>
                      <p class="account-content-icon-p">카카오페이</p>
                  </button>
                  <button type="button" class="account-content-icon-btn copy-btn-0">
                      <span class="material-icons md-18 account-content-name">content_paste</span>
                      <p class="account-content-icon-p">계좌 복사하기</p>
                  </button>
              </div>
          </div>
          <hr class="account-content-hr">
          <div class="account-content-family" id="groomFamily">
              <div class="account-content-family-block">
                  <div class="account-content-role">아버님</div>
                  <div class="account-content-name">정진열</div>
                  <div class="account-content-role">국민은행</div>
                  <div class="account-content-name"><a class="account-num-1">000-000-000000</a></div>
              </div>
              <div class="account-content-icon">
                  <button type="button" class="account-content-icon-btn">
                      <svg viewBox="0 0 48 48" class="account-content-icon-svg">
                          <path
                              fill="currentColor"
                              class="kakao-logo_svg__st0"
                              d="M21.9 0C9.8 0 0 7.8 0 17.3 0 23.5 4.1 28.9 10.2 32l-2.1 7.7c-.1.2 0 .5.2.7.1.1.3.2.4.2.1 0 .3-.1.4-.1l8.9-6c1.3.2 2.6.3 4 .3 12.1 0 21.9-7.8 21.9-17.3 0-9.7-9.8-17.5-22-17.5z"
                          ></path>
                      </svg>
                      <p class="account-content-icon-p">카카오페이</p>
                  </button>
                  <button type="button" class="account-content-icon-btn copy-btn-1">
                      <span class="material-icons md-18 account-content-name">content_paste</span>
                      <p class="account-content-icon-p">계좌 복사하기</p>
                  </button>
              </div>
          </div>
          <hr class="account-content-hr">
          <div class="account-content-family" id="groomFamily">
              <div class="account-content-family-block">
                  <div class="account-content-role">어머님</div>
                  <div class="account-content-name">유재희</div>
                  <div class="account-content-role">국민은행</div>
                  <div class="account-content-name"><a class="account-num-2">000-000-000000</a></div>
              </div>
              <div class="account-content-icon">
                  <button type="button" class="account-content-icon-btn">
                      <svg viewBox="0 0 48 48" class="account-content-icon-svg">
                          <path
                              fill="currentColor"
                              class="kakao-logo_svg__st0"
                              d="M21.9 0C9.8 0 0 7.8 0 17.3 0 23.5 4.1 28.9 10.2 32l-2.1 7.7c-.1.2 0 .5.2.7.1.1.3.2.4.2.1 0 .3-.1.4-.1l8.9-6c1.3.2 2.6.3 4 .3 12.1 0 21.9-7.8 21.9-17.3 0-9.7-9.8-17.5-22-17.5z"
                          ></path>
                      </svg>
                      <p class="account-content-icon-p">카카오페이</p>
                  </button>
                  <button type="button" class="account-content-icon-btn copy-btn-2">
                      <span class="material-icons md-18 account-content-name">content_paste</span>
                      <p class="account-content-icon-p">계좌 복사하기</p>
                  </button>
              </div>
          </div>
      </div>
  </div> -->
<script>
export default {
  name: 'ClosingCard',
  props: {

  },
	data() {
		return {
			showDiv: false,
      show1: false,
      show2: false
		};
	},
	methods: {
		toggleDiv() {
			this.showDiv = !this.showDiv;
		},
    toggleShow(button) {
      if (button === 1) {
        this.show1 = !this.show1;
        this.show2 = false;
      } else if (button === 2) {
        this.show1 = false;
        this.show2 = !this.show2;
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
  height: 100vh;
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
  height: 3.4%;
  border-bottom: solid 0.1em #5d493b;
}

.account-box {
	position: absolute;
	display: flex;
  flex-direction: column;
  align-items: center;
	width: 80%;
  height: 7%;
  left: 10%;
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
  margin-left: 20px;
}

.account-box .wrapper .family {
  background-color: grey;
  margin-bottom: 10px;
  z-index: 1;
}

.groom {
	top: 6%;
}

.bride {
	top: 14%;
}

.hidden {
  display: none;
	padding: 10px;
  background-color: #00ff00;
}

.message {
	position: absolute;
	display: flex;
	width: 80%;
	height: 40%;
	left: 10%;
	top: 30%;
	background-color: yellow;
}

.animated-div {
  background-color: #e0e0e0;
  padding: 10px;
}

.slide1 {
  transform: translateY(200%);
}

.test2 {
  background-color: #0000ff;
}
.test {
  background-color: #00ff00;
}
.position {
  background-color: red;
}

/*
.account-content-icon-p {
    margin-bottom: 0px;
    font-size: 0.625em;
    line-height: 0.75em;
}

.account-content-hr {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    --tw-border-opacity: 1;
    border-color: rgba(229, 229, 229, var(--tw-border-opacity));
}

.swal-button {
    padding: 7px 19px;
    border-radius: 2px;
    font-size: 12px;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
} */
</style>