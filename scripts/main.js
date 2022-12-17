const remainTime = document.querySelector("#remainTime");
const shareButton = document.querySelector(".share-button");

function diffDay() {
    const weddingTime = new Date("2023-07-15 11:00:00");
    const todayTime = new Date();
    const diffTime = weddingTime - todayTime;

    const diffDay = Math.floor(diffTime / (1000*60*60*24));
    const diffHour = Math.floor((diffTime / (1000*60*60)) % 24);
    const diffMin = Math.floor((diffTime / (1000*60)) % 60);
    const diffSec = Math.floor(diffTime / 1000 % 60);

    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

// Share Button
// using WebShare API
$(shareButton).on("click", function() {
    navigator.share({
        title: '준영 ♥ 보민 결혼합니다',
        url: 'https://wedding-for-junyoung-bomin-20220715.github.io'
    }).then(() => {
        console.log('Thanks for sharing!');
    }).catch(console.error);
})


$(document).ready(function() {
    // Hello world
    console.log("안녕하세요, 이 모바일 청접장을 개발한 정준영입니다.");
    console.log("개발자 모드를 열어서 내부를 보고 싶은 마음 충분히 이해합니다.");
    console.log("궁금한 점이 있으면, 아래 github을 통해 연락주세요 ^^*");
    console.log("https://github.com/Wedding-for-Junyoung-Bomin-20220715/Wedding-for-Junyoung-Bomin-20220715.github.io");

    // Confetti Effect
    startConfetti();
    setTimeout(stopConfetti, 3000);

    // Calculate D-day
    diffDay();
    setInterval(diffDay, 1000);

    // Account Info. Expand Button
    $(".account-btn-groomfamily").on("click", function(){
        $(".account-box-groomfamily").slideToggle("fast");
        if ($("#groomExpandBtn").text() == "expand_more") {
            $("#groomExpandBtn").text("expand_less");
        }
        else {
            $("#groomExpandBtn").text("expand_more");
        }
    });
    $(".account-btn-bridefamily").on("click", function(){
        $(".account-box-bridefamily").slideToggle("fast");
        if ($("#brideExpandBtn").text() == "expand_more") {
            $("#brideExpandBtn").text("expand_less");
        }
        else {
            $("#brideExpandBtn").text("expand_more");
        }
    });
})