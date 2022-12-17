const copyAccount_0 = document.querySelector(".copy-btn-0");
const copyAccount_1 = document.querySelector(".copy-btn-1");
const copyAccount_2 = document.querySelector(".copy-btn-2");
const copyAccount_3 = document.querySelector(".copy-btn-3");
const copyAccount_4 = document.querySelector(".copy-btn-4");
const copyAccount_5 = document.querySelector(".copy-btn-5");

const textToCopy_0 = document.querySelector('.account-num-0').innerText;
const textToCopy_1 = document.querySelector('.account-num-1').innerText;
const textToCopy_2 = document.querySelector('.account-num-2').innerText;
const textToCopy_3 = document.querySelector('.account-num-3').innerText;
const textToCopy_4 = document.querySelector('.account-num-4').innerText;
const textToCopy_5 = document.querySelector('.account-num-5').innerText;

$(copyAccount_0).on("click", function() {
    navigator.clipboard.writeText(textToCopy_0).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_0,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_0 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})

$(copyAccount_1).on("click", function() {
    navigator.clipboard.writeText(textToCopy_1).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_1,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_1 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})

$(copyAccount_2).on("click", function() {
    navigator.clipboard.writeText(textToCopy_2).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_2,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_2 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})

$(copyAccount_3).on("click", function() {
    navigator.clipboard.writeText(textToCopy_3).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_3,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_3 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})

$(copyAccount_4).on("click", function() {
    navigator.clipboard.writeText(textToCopy_4).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_4,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_4 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})

$(copyAccount_5).on("click", function() {
    navigator.clipboard.writeText(textToCopy_5).then(
        () => {
            /* clipboard successfully set */
            swal({
                title: "성공적으로 복사했습니다.",
                text: "계좌번호: "+textToCopy_5,
                buttons: {},
                timer: 1500,
                icon: "success"
            });
        },
        () => {
            /* clipboard write failed */
            swal(textToCopy_5 + " 복사에 실패했습니다.", {buttons: false, timer: 1500});
        }
    );
})