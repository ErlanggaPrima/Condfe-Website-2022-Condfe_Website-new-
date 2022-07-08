// Modal Function //
const scriptURL =
  'https://script.google.com/macros/s/AKfycby1RbCmM4mcFsdqsFeSSqwWY0jHmqAOO-WZk_TMuaB89zfmdj8KhpdgucQZtW5BVFQXQA/exec'
const form = document.forms['condfe-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault()

  // ketika tombol submit di click 
  // tampilkan tombol loading hilangkan tombol kirim 
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  
  fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
    // tampilkan tombol kirim hilangkan tombol kirim 

    .then((response) => {
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert 
      myAlert.classList.toggle('d-none')
      // reset form
      form.reset();
      console.log('Success!', response)
    })

    .catch(error => console.error('Error!', error.message))
})

// tes navbar 
function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
   slidesPerView: 1,
  loop: true,

   autoplay: {
      delay: 5000,
      disableOnInteraction: false
   },
   allowTouchMove: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});

console.log(mySwiper);