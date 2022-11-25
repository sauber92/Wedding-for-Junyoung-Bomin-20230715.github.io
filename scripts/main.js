const remainTime = document.querySelector("#remainTime");
const shareButton = document.querySelector('.share-button');

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