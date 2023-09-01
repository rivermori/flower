// 自動scroll
$(function (){
  $('.slide-items').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 7, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
          variableWidth: true,
        }
      }
    ]
  });
});

//slider_dialog
(() => {
  const initReserveDialog = function(container) {
        // モーダルを開く処理
    container.querySelectorAll('.js-reserveDialogOpen').forEach((reserveDialogOpenNode) => {
        reserveDialogOpenNode.addEventListener("click", () => {
            const clickedReserve = reserveDialogOpenNode.dataset.dialog;
            container.querySelector(`.js-reserveDialog[data-dialog="${clickedReserve}"]`).showModal();
            document.body.style.overflow = 'hidden'; // 追加
        });
    });
    // クローズボタンを押すとモーダルを閉じる処理
    container.querySelectorAll('.js-reserveDialogClose').forEach((reserveDialogCloseNode) => {
        reserveDialogCloseNode.addEventListener("click", (event) => {
            const closeTargetDialogDataReserve = event.target.closest(".js-reserveDialog").dataset.dialog;
            container.querySelector(`.js-reserveDialog[data-dialog="${closeTargetDialogDataReserve}"]`).close();
            document.body.style.overflow = ''; // 追加
        });
    });
    // モーダルの外をクリックするとモーダルを閉じる処理
    container.querySelectorAll('.js-reserveDialog').forEach((reserveDialogNode) => {
        reserveDialogNode.addEventListener("click", (e) => {
            if (!e.target.closest(".js-reserveDialogInner")) {
                e.target.closest(".js-reserveDialog").close();
                document.body.style.overflow = ''; // 追加

            }
        });
    });
  };
  // 全体が二回以上呼び出されても個別に動かすため

    $('.popup_slide').on('init', function(event, slick) {
    document.querySelectorAll('.gallery').forEach(initReserveDialog);
    });

    $('.popup_slide').slick({
    arrows: true,
    dots: false,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
});
})();

//スマホ版ハンバーガーメニュー
/*ハンバーガーメニュー*/
document.querySelector('.menu_icon').addEventListener('click', function() {
  // メニューアイコンがクリックされた時
  document.querySelector('.menu_inner').classList.toggle('show');
  document.querySelector('.menu_icon').classList.toggle('close');
});
document.querySelectorAll('.menu_inner a').forEach(function(anchor) {
  anchor.addEventListener('click', function() {
    // menu_flex内のaタグがクリックされた時にメニューが消えるよう指示
    document.querySelector('.menu_inner').classList.remove('show');
    document.querySelector('.menu_icon').classList.remove('close');
  });
});