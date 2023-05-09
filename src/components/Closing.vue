<!-- 출력순서: 9 -->
<!-- 사진: TBD -->
<!-- 글자: TBD, 쿼리스트링 이용 -->
<!-- 글자효과: TBD -->
<template>
  <h4 class="mdc-typography--headline1">마음 전하실 곳</h4>
  
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
</template>
  
<script>
export default {
  name: 'ClosingCard',
  props: {

  }
}
</script>
  
<style scoped>
#accountBox {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    /* font-family: 'MaruBuri'; */
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