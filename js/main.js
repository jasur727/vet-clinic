// Modalni ochuvchi hamma elementlarni topiladi
var elsOpenModel = document.querySelectorAll(".js-open-modal")

// Modal topiladi
var elModel = document.querySelector('.modal')

// Modalni yopuvchi element topiladi
var elsCloseModel = document.querySelector('.js-close-modal')

// Modalni ochuvchi funksiya (modalga mos klassni qo'shadi)
var modalOpen = function () {
  elModel.classList.add('modal--open');
}

// Modalni yopuvchi funksiya (modaldan mos klassni olib tashlaydi)

var closeModal = function () {
  elModel.classList.remove('modal--open');
}

// Agar modalni ochuvchi tugmalar bo'lsa
if (elsOpenModel.length > 0) {
  elsOpenModel.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalOpen();
    });
  });
}
// Ularning har biriga link deb murojaat qiladi
// va har biriga click hodisasida
// tabiiy reaksiyani to'xtatib
// Modalni ochish funksiyasini ishga tushiradi

if (elsCloseModel) {
  elsCloseModel.addEventListener('click', function () {
    closeModal();
  })
}
// Agar modalni yopuvchi tugma bo'lsa
// U tugmaga click hodisasida
// Modalni yopish funksiyasini ishga tushirishni buyuradi