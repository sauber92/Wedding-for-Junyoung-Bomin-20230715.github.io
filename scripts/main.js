const remainTime = document.querySelector("#remain-time");

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

$(document).ready (function () {
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

window.onload = function() {
    startConfetti();
    setTimeout(stopConfetti, 3000);

    diffDay();
    setInterval(diffDay, 1000);
};