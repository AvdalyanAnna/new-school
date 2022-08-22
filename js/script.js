$(function (){
  $('.page-form__item-select').styler()
  $('.form-radio__button input').on('click',function (){
  const id =$(this).attr('id')
    console.log(id)
    $('.form-radio__tab').hide()
    $(`.form-radio__tab[data-id="${id}"]`).show()
  })
})