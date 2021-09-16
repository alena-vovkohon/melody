$(document).ready(function () {
  let number = 2
  let floorPath = $('.home-image path')
  let counterUp = $('.counter-up')
  let counterDown = $('.counter-down')
  let modal = $('.modal')
  let modalCloseButton = $('.modal-close-button')
  let viewFlatsButton = $('.view-flats')
  let flatsPath = $('.modal-image path')
  let flatList = $('.flat-list li')

  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor') /*видаляємо класи, чистимо */
    number = $(this).attr(
      'data-floor',
    ) /* шукаємо конкретний path та виводимо число */
    $('.counter').text(number)
  })

  flatsPath.on('mouseover', function () {
    number = $(this).attr('data-floor')
    console.log(number)
  })

  floorPath.on('click', toggleModal) /*клік на поверх, виклик вікна */

  modalCloseButton.on('click', toggleModal) /*клік на хрестик, закрити вікно */
  viewFlatsButton.on(
    'click',
    toggleModal,
  ) /*клік на button, відкрити вікно квартир*/

  /*Збільшення поверхів */

  counterUp.on('click', function () {
    if (number < 18) {
      number++ /* додаємо +1 до числа*/
      usNumber = number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) /*перетворюємо число в форматі 02*/
      $('.counter').text(usNumber)
      floorPath.removeClass('current-floor') /*видаляємо класи, чистимо */
      $(`[data-floor = ${usNumber}]`).toggleClass(
        'current-floor',
      ) /* додавання класу на конкретний поверх */
    }
    console.log('counterUp')
  })

  /*Зменшення поверхів */

  counterDown.on('click', function () {
    if (number > 2) {
      number-- /*  -1 від числа*/
      usNumber = number.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) /*перетворюємо число в форматі 02*/
      $('.counter').text(usNumber)
      floorPath.removeClass('current-floor') /*видаляємо класи, чистимо */
      $(`[data-floor = ${usNumber}]`).toggleClass(
        'current-floor',
      ) /* додавання класу на конкретний поверх */
    }
    console.log('counterDown')
  })

  function toggleModal() {
    modal.toggleClass('is-open')
  } /*функція додавання та видалення класу */
})
