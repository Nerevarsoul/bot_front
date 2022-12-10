
const preloader = document.querySelector('.preloader')
window.onload = function() {
  preloader.remove()
};



/*
  Order list
 */

const listBlock = document.querySelectorAll('.order')
const listBlockBtn = document.querySelectorAll('.open-btn')
const listChooseBtn = document.querySelectorAll('.choose-btn')
const listBlockInfo = document.querySelectorAll('.order__info')
let chosenBlock = document.querySelector('.chosen-order')

function openMoreInfo (block, btn) {
  if (!block.classList.contains('open')) {
    for (let j = 0; j < listBlockInfo.length; j++) {
      listBlockInfo[j].classList.remove('open')
    }
    for (let j = 0; j < listBlockBtn.length; j++) {
      listBlockBtn[j].innerHTML = 'Подробнее'
    }
    block.classList.add('open')
    btn.innerHTML = 'Скрыть'
  } else {
    block.classList.remove('open')
    btn.innerHTML = 'Подробнее'
  }
}

function forOrderButtonText(orderNumber, orderDate) {
  return `
    <span>Продолжить</span>
    <p>Заказ ${orderNumber} от ${orderDate}</p>
  `;
}

function chooseOrder(choseOrderButton) {
  if (!choseOrderButton.classList.contains('chosen') ) {
    for (let h = 0; h < listChooseBtn.length; h++) {
      listChooseBtn[h].classList.remove('chosen')
    }
    chosenBlock.classList.add('chosen')
    choseOrderButton.classList.add('chosen')
    choseOrderButton.innerHTML = 'Выбрано'
    document.querySelector('.pagination').classList.add('chosen')
  } else {
    chosenBlock.classList.remove('chosen')
    choseOrderButton.classList.remove('chosen')
    choseOrderButton.innerHTML = 'Выбрать'
    document.querySelector('.pagination').classList.remove('chosen')
  }
}

for (let i = 0; i < listBlock.length; i++) {
  let parentElement = listBlock[i];
  let btn = parentElement.querySelector('.open-btn')
  let choseOrderButton = parentElement.querySelector('.choose-btn')
  let block = parentElement.querySelector('.order__info')
  const orderNumber = parentElement.querySelector('.order__head_number').textContent
  const orderDate = parentElement.querySelector('.order__head_date').textContent
  btn.addEventListener('click', function () {
    openMoreInfo(block, btn)
  })
  if (choseOrderButton) {
    choseOrderButton.addEventListener('click', function () {
      chooseOrder(choseOrderButton)
      chosenBlock.querySelector('.btn-proceed').innerHTML = forOrderButtonText(orderNumber, orderDate)

    })
  }

}

/*
  Order list
 */


/*
  Open filter
 */

const openFilterButton = document.querySelector('.filter-btn')
const closeFilterButton = document.querySelector('.close-filter')
const filterBlock = document.querySelector('.filter-section')
const mainSection = document.querySelector('.section-main')

function toggleFilter() {
  if (!filterBlock.classList.contains('filter-is-open')) {
    filterBlock.classList.add('filter-is-open')
    mainSection.classList.add('block-back')
  } else {
    filterBlock.classList.remove('filter-is-open')
    mainSection.classList.remove('block-back')
  }
}

if (openFilterButton) {
  openFilterButton.addEventListener('click', function () {
    toggleFilter()
  })
}
if (closeFilterButton) {
  closeFilterButton.addEventListener('click', function () {
    toggleFilter()
  })
}




/*
  Open filter
 */


/*
  Popup selection
 */

let filterCount = 0;
let newOrderCount = 0;
const openNewOrderButton = document.querySelector('.new-order-empty')
const newOrderWindow = document.querySelector('.section-add-order__new')
const filterButtonContainer = document.querySelector('.filter-section__button')
const resetButton = document.querySelectorAll('.btn-reset')
const applyButton = document.querySelector('.apply-button')
const newOrderAppendButton = document.querySelector('.new-order-append')

const popupSelection = document.querySelectorAll('.popup-selection')
const checkArrow = document.createElement('span')
checkArrow.innerHTML = '<svg viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M17.5877 0.40514C17.4686 0.276765 17.327 0.17487 17.1709 0.105335C17.0148 0.0357999 16.8474 0 16.6783 0C16.5092 0 16.3418 0.0357999 16.1858 0.105335C16.0297 0.17487 15.888 0.276765 15.769 0.40514L6.22709 10.6227L2.21822 6.32202C2.0946 6.19432 1.94867 6.09391 1.78875 6.02651C1.62884 5.95912 1.45808 5.92607 1.28622 5.92925C1.11437 5.93243 0.944779 5.97178 0.787141 6.04504C0.629504 6.11831 0.486905 6.22407 0.367486 6.35627C0.248068 6.48847 0.154168 6.64453 0.0911484 6.81553C0.0281286 6.98654 -0.00277745 7.16915 0.000195856 7.35293C0.00316916 7.53671 0.0399634 7.71806 0.108477 7.88664C0.176991 8.05521 0.275883 8.2077 0.399506 8.33541L5.31773 13.5949C5.4368 13.7232 5.57845 13.8251 5.73453 13.8947C5.8906 13.9642 6.05801 14 6.22709 14C6.39617 14 6.56357 13.9642 6.71965 13.8947C6.87573 13.8251 7.01738 13.7232 7.13645 13.5949L17.5877 2.41852C17.7177 2.29027 17.8214 2.1346 17.8924 1.96134C17.9634 1.78808 18 1.60098 18 1.41183C18 1.22268 17.9634 1.03558 17.8924 0.86232C17.8214 0.68906 17.7177 0.533397 17.5877 0.40514Z" fill="#5032C8"/>\n  </svg>'

const sortInput = document.querySelectorAll('input[name="sort"]')




function popupSelectionChosen(popupSelectionThis, popupSelectionList) {
  if (!popupSelectionThis.classList.contains('chosen')) {
    popupSelectionThis.classList.add('chosen')
    popupSelectionThis.append(checkArrow)
    popupSelectionList.classList.add('opened-selection')
    if (newOrderWindow) {
      newOrderWindow.classList.add('no-scroll')
    }
  } else {
    popupSelectionThis.classList.remove('chosen')
    popupSelectionList.classList.remove('opened-selection')
    if (newOrderWindow) {
      newOrderWindow.classList.remove('no-scroll')
    }
  }
}

function openSelection(popupSelectionListMain) {
  if (!popupSelectionListMain.classList.contains('opened-selection')) {
    popupSelectionListMain.classList.add('opened-selection')
    if (newOrderWindow) {
      newOrderWindow.classList.add('no-scroll')
    }

  } else {
    popupSelectionListMain.classList.remove('opened-selection')
    if (newOrderWindow) {
      newOrderWindow.classList.remove('no-scroll')
    }
  }
}

const clearValueButton = document.querySelectorAll('.clear-value')

for (let i = 0; i < clearValueButton.length; i++) {
  if (clearValueButton[i]) {
    clearValueButton[i].addEventListener('click', function () {
      console.log(clearValueButton[i])
    })
  }
}

let placeholderArray = []

for (let p = 0; p < popupSelection.length; p++) {

  const popupSelectionList = popupSelection[p].querySelector('.popup-selection__main_wrapper')
  const popupSelectionHead = popupSelection[p].querySelector('.popup-selection__head')
  placeholderArray.push(popupSelectionHead.innerHTML)
  const popupSelectionWrapper = popupSelection[p].querySelector('.popup-selection__wrapper')
  const popupSelectionItem = popupSelectionList.querySelectorAll('.popup-selection__main_item')
  const popupSelectionListChosen = popupSelection[p].querySelector('.popup-selection__main_chosen')
  const popupSelectionListMain = popupSelection[p].querySelector('.popup-selection__main')
  const closeSelection = popupSelection[p].querySelector('.close-selection')
  const chosenValueSendInput = document.querySelectorAll('.selected-input')
  const clearValue = document.createElement('span')

  clearValue.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM7.879 6.464C7.69946 6.28275 7.45743 6.17697 7.20245 6.16832C6.94748 6.15967 6.69883 6.2488 6.50742 6.41747C6.31601 6.58613 6.1963 6.82159 6.1728 7.07562C6.14929 7.32966 6.22378 7.58308 6.381 7.784L6.465 7.879L8.585 9.999L6.465 12.121C6.28375 12.3005 6.17797 12.5426 6.16932 12.7975C6.16067 13.0525 6.2498 13.3012 6.41847 13.4926C6.58713 13.684 6.82258 13.8037 7.07662 13.8272C7.33066 13.8507 7.58408 13.7762 7.785 13.619L7.879 13.536L10 11.414L12.121 13.536C12.3005 13.7173 12.5426 13.823 12.7975 13.8317C13.0525 13.8403 13.3012 13.7512 13.4926 13.5825C13.684 13.4139 13.8037 13.1784 13.8272 12.9244C13.8507 12.6703 13.7762 12.4169 13.619 12.216L13.536 12.121L11.414 10L13.536 7.879C13.7173 7.69946 13.823 7.45743 13.8317 7.20245C13.8403 6.94748 13.7512 6.69883 13.5825 6.50742C13.4139 6.31601 13.1784 6.1963 12.9244 6.1728C12.6703 6.14929 12.4169 6.22378 12.216 6.381L12.121 6.464L10 8.586L7.879 6.464Z" fill="#A2A2A6"/>
</svg>`
  clearValue.className = 'clear-value';
  clearValue.addEventListener('click', function () {
    const clearValueButton = popupSelection[p].querySelector('.clear-value')
    popupSelectionHead.classList.remove('head-chosen')
    clearValueButton.remove()
    popupSelectionHead.innerHTML = placeholderArray[p]
    for (let q = 0; q < popupSelectionItem.length; q++) {
      popupSelectionItem[q].classList.remove('chosen')
    }
    popupSelectionListChosen.classList.remove('slide-chosen')
    for (let f = 0; f < chosenValueSendInput.length; f++) {
      chosenValueSendInput[f].value = ''
    }
    const headDisabled = document.querySelector('.popup-selection__head.disabled')
    if (headDisabled) {
      headDisabled.classList.remove('disabled')
    }

    filterCount--
    newOrderCount--
    if (filterCount < 1) {
      for (let y = 0; y < resetButton.length; y++) {
        resetButton[y].classList.add('disabled')
      }
      if (applyButton) {
        applyButton.classList.add('disabled')
        filterButtonContainer.classList.remove('filter-chosen')
      }

    }
    if (newOrderCount !== 7) {
      if (newOrderAppendButton) {
        newOrderAppendButton.classList.add('disabled')
      }
    }
  })



  popupSelectionHead.addEventListener('click', function () {
    openSelection(popupSelectionListMain, popupSelectionList)
  })
  closeSelection.addEventListener('click', function () {
    openSelection(popupSelectionListMain, popupSelectionList)
  })


  for (let d = 0; d < popupSelectionItem.length; d++) {
    const popupSelectionThis = popupSelectionItem[d]
    const popupSelectionItemStrong = popupSelectionThis.querySelector('.popup-selection__main_strong').innerHTML
    let popupSelectionItemSmall
    if (popupSelectionItem[d].querySelector('.popup-selection__main_small') !== null)  {
      popupSelectionItemSmall = popupSelectionThis.querySelector('.popup-selection__main_small').innerHTML
    } else {
      popupSelectionItemSmall = ''
    }

    const chosenValue = popupSelectionListChosen.querySelector('a')
    popupSelectionThis.addEventListener('click', function () {
      for (let d = 0; d < popupSelectionItem.length; d++) {
        popupSelectionItem[d].classList.remove('chosen')
      }
      popupSelectionChosen(popupSelectionThis, popupSelectionList)
      popupSelectionListChosen.classList.add('slide-chosen')
      chosenValue.setAttribute('chosen-value', `${popupSelectionItemSmall} ${popupSelectionItemStrong}`)
    })
  }

  const thisSelectionInput = popupSelectionWrapper.querySelector('input')
  if (thisSelectionInput.value !== '') {
    popupSelectionHead.classList.add('head-chosen')
    popupSelectionHead.innerHTML = `${thisSelectionInput.value}`
    thisSelectionInput.value = `${thisSelectionInput.value}`

    popupSelectionWrapper.append(clearValue)
    filterCount++
    newOrderCount++
    if (filterCount > 0) {
      for (let y = 0; y < resetButton.length; y++) {
        resetButton[y].classList.remove('disabled')
      }
      if (applyButton) {
        applyButton.classList.remove('disabled')
        filterButtonContainer.classList.add('filter-chosen')
      }

    }
    if (newOrderCount === 7) {
      if (newOrderAppendButton) {
        newOrderAppendButton.classList.remove('disabled')
      }
    }
  }

  popupSelectionListChosen.addEventListener('click', function () {
    const chosenValueSend = popupSelectionListChosen.querySelector('a').getAttribute('chosen-value')
    const thisSelectionInput = popupSelectionWrapper.querySelector('input')



    popupSelectionHead.classList.add('head-chosen')
    openSelection(popupSelectionListMain, popupSelectionList)
    popupSelectionHead.innerHTML = `${chosenValueSend}`
    thisSelectionInput.value = `${chosenValueSend}`

    popupSelectionWrapper.append(clearValue)

    const thisSelectionInputLocation = document.querySelector('#location_b')

    const thisSelectionInputRegion = document.querySelector('#region')
    if (thisSelectionInputLocation.value !== '' && thisSelectionInputRegion.value === '') {
      let thisSelectionInputRegionWrapper = document.querySelector('.region')
      thisSelectionInputRegionWrapper.querySelector('.popup-selection__head').classList.add('disabled')
    }
    if (thisSelectionInputLocation.value === '' && thisSelectionInputRegion.value !== '') {
      popupSelection[1].querySelector('.popup-selection__head').classList.add('disabled')
    }

    filterCount++
    newOrderCount++
    if (filterCount > 0) {
      for (let y = 0; y < resetButton.length; y++) {
        resetButton[y].classList.remove('disabled')
      }
      if (applyButton) {
        applyButton.classList.remove('disabled')
        filterButtonContainer.classList.add('filter-chosen')
      }

    }
    if (newOrderCount === 7) {
      if (newOrderAppendButton) {
        newOrderAppendButton.classList.remove('disabled')
      }
    }
  })





}

let chosenRadio = 0
for (let g = 0; g < sortInput.length; g++) {
  sortInput[g].addEventListener('change', event => {

    if (sortInput[g].value !== 'all' && chosenRadio === 0) {
      chosenRadio++
      filterCount++
      if (filterCount > 0) {
        for (let y = 0; y < resetButton.length; y++) {
          resetButton[y].classList.remove('disabled')
        }
        if (applyButton) {
          applyButton.classList.remove('disabled')
          filterButtonContainer.classList.add('filter-chosen')
        }

      }
    } else if(sortInput[g].value === 'all' && chosenRadio === 1) {
      chosenRadio--
      filterCount--
      if (filterCount < 1) {
        for (let y = 0; y < resetButton.length; y++) {
          resetButton[y].classList.add('disabled')
        }
        if (applyButton) {
          applyButton.classList.add('disabled')
          filterButtonContainer.classList.remove('filter-chosen')
        }

      }
    }  else if(chosenRadio === 1) {
      chosenRadio--
      chosenRadio++
      filterCount--
      filterCount++
      if (filterCount < 1) {
        for (let y = 0; y < resetButton.length; y++) {
          resetButton[y].classList.add('disabled')
        }
        if (applyButton) {
          applyButton.classList.add('disabled')
          filterButtonContainer.classList.remove('filter-chosen')
        }

      }
    }
  })
}


/*
  Popup selection
 */

/*
  Date
 */



const inputDate = document.querySelectorAll('.input-date')
for (let r = 0; r < inputDate.length; r++) {
  const inputHead = inputDate[r].querySelector('.filter-section__input')
  const inputItem = inputDate[r].querySelector('input')
  const inputItemPlaceholder = inputHead.querySelector('span')
  const clearValueInput = document.createElement('span')
  clearValueInput.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM7.879 6.464C7.69946 6.28275 7.45743 6.17697 7.20245 6.16832C6.94748 6.15967 6.69883 6.2488 6.50742 6.41747C6.31601 6.58613 6.1963 6.82159 6.1728 7.07562C6.14929 7.32966 6.22378 7.58308 6.381 7.784L6.465 7.879L8.585 9.999L6.465 12.121C6.28375 12.3005 6.17797 12.5426 6.16932 12.7975C6.16067 13.0525 6.2498 13.3012 6.41847 13.4926C6.58713 13.684 6.82258 13.8037 7.07662 13.8272C7.33066 13.8507 7.58408 13.7762 7.785 13.619L7.879 13.536L10 11.414L12.121 13.536C12.3005 13.7173 12.5426 13.823 12.7975 13.8317C13.0525 13.8403 13.3012 13.7512 13.4926 13.5825C13.684 13.4139 13.8037 13.1784 13.8272 12.9244C13.8507 12.6703 13.7762 12.4169 13.619 12.216L13.536 12.121L11.414 10L13.536 7.879C13.7173 7.69946 13.823 7.45743 13.8317 7.20245C13.8403 6.94748 13.7512 6.69883 13.5825 6.50742C13.4139 6.31601 13.1784 6.1963 12.9244 6.1728C12.6703 6.14929 12.4169 6.22378 12.216 6.381L12.121 6.464L10 8.586L7.879 6.464Z" fill="#A2A2A6"/>
</svg>`
  clearValueInput.className = 'clear-value'



  duDatepicker('#date_car',{
    range:true,
  });
  duDatepicker('#date_order',{
    range:true
  });

  const inputCar = inputDate[r].querySelector('.date-car')
  const inputOrder = inputDate[r].querySelector('.date-order')

  if (inputCar) {
    inputCar.addEventListener('change', function () {
      inputItemPlaceholder.classList.add('selected-date')
      inputDate[r].append(clearValueInput)
      inputHead.classList.add('selected-date')
      filterCount++
      if (filterCount > 0) {
        for (let y = 0; y < resetButton.length; y++) {
          resetButton[y].classList.remove('disabled')
        }
        if (applyButton) {
          applyButton.classList.remove('disabled')
          filterButtonContainer.classList.add('filter-chosen')
        }

      }
    })
  }

  if (inputOrder) {
    inputOrder.addEventListener('change', function () {
      inputItemPlaceholder.classList.add('selected-date')
      inputDate[r].append(clearValueInput)
      inputHead.classList.add('selected-date')
      filterCount++
      if (filterCount > 0) {
        for (let y = 0; y < resetButton.length; y++) {
          resetButton[y].classList.remove('disabled')
        }
        if (applyButton) {
          applyButton.classList.remove('disabled')
          filterButtonContainer.classList.add('filter-chosen')
        }

      }
    })
  }

  /*
    Datepicker
   */

  if (inputDate[r] == inputDate[0]) {
    const inputPrevValue = document.querySelector('#order_date')
    if (inputPrevValue) {
      if (inputPrevValue.value !== '') {
        newOrderCount = 7
        if (newOrderCount === 7) {
          if (newOrderAppendButton) {
            newOrderAppendButton.classList.remove('disabled')
          }
        }
        inputDate[r].append(clearValueInput)
        inputItemPlaceholder.classList.add('selected-date')
        inputHead.classList.add('selected-date')
        filterCount++
        newOrderCount++
        if (filterCount > 0) {
          for (let y = 0; y < resetButton.length; y++) {
            resetButton[y].classList.remove('disabled')
          }
          if (applyButton) {
            applyButton.classList.remove('disabled')
            filterButtonContainer.classList.add('filter-chosen')
          }

        }
        if (newOrderCount === 7) {
          if (newOrderAppendButton) {
            newOrderAppendButton.classList.remove('disabled')
          }
        }
      }
    }

    let datePicker = new Rolldate({
      el: '#order_date',
      format: 'DD/MM/YYYY',
      lang: {
        title: 'Дата подачи',
        cancel: 'Отменить',
        confirm: 'Применить',
        year: '',
        month: '',
        day: '',
        hour: '',
        min: '',
        sec: ''
      },
      init: function() {
        setTimeout(() => {
          const monthArray = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
          ]
          const monthList = document.getElementById('rolldate-month')
          const monthListChild = monthList.querySelectorAll('li')

          for (let c = 0; c < monthListChild.length; c++) {
            const newSpan = document.createElement('span')
            newSpan.innerHTML = ''
            newSpan.className = 'month-name'
            monthListChild[c].append(newSpan)
            let thisSpan = monthListChild[c].querySelector('.month-name')
            thisSpan.innerHTML = monthArray[c]
          }
        }, "100")

      },
      confirm: function() {
        inputItemPlaceholder.classList.add('selected-date')
        inputDate[r].append(clearValueInput)
        inputHead.classList.add('selected-date')
        filterCount++
        newOrderCount++
        if (filterCount > 0) {
          for (let y = 0; y < resetButton.length; y++) {
            resetButton[y].classList.remove('disabled')
          }
          if (applyButton) {
            applyButton.classList.remove('disabled')
            filterButtonContainer.classList.add('filter-chosen')
          }

        }
        if (newOrderCount === 7) {
          if (newOrderAppendButton) {
            newOrderAppendButton.classList.remove('disabled')
          }
        }
      },
    })
  }


  /*
    Datepicker
   */


  /*
  Timepicker
 */

  if (inputDate[r] == inputDate[1]) {
    const inputTimePrevValue = document.querySelector('#order_time')
    if (inputTimePrevValue) {
      if (inputTimePrevValue.value !== '') {
        inputDate[r].append(clearValueInput)

        filterCount++
        newOrderCount++
        if (filterCount > 0) {
          for (let y = 0; y < resetButton.length; y++) {
            resetButton[y].classList.remove('disabled')
          }
          if (applyButton) {
            applyButton.classList.remove('disabled')
            filterButtonContainer.classList.add('filter-chosen')
          }

        }
        if (newOrderCount === 7) {
          if (newOrderAppendButton) {
            newOrderAppendButton.classList.remove('disabled')
          }
        }
      }
    }

    let timePicker = new Rolldate({
      el: '#order_time',
      format: 'hh:mm',
      lang: {
        title: 'Время подачи',
        cancel: 'Отменить',
        confirm: 'Применить',
        year: '',
        month: '',
        day: '',
        hour: '',
        min: '',
        sec: ''
      },
      confirm: function() {
        inputItemPlaceholder.classList.add('selected-date')
        inputDate[r].append(clearValueInput)
        inputHead.classList.add('selected-date')
        filterCount++
        newOrderCount++
        if (filterCount > 0) {
          for (let y = 0; y < resetButton.length; y++) {
            resetButton[y].classList.remove('disabled')
          }
          if (applyButton) {
            applyButton.classList.remove('disabled')
            filterButtonContainer.classList.add('filter-chosen')
          }

        }
        if (newOrderCount === 7) {
          if (newOrderAppendButton) {
            newOrderAppendButton.classList.remove('disabled')
          }
        }

      },
    })
  }


  /*
    Timepicker
   */








  clearValueInput.addEventListener('click', function () {

    inputItem.value = ''
    inputItemPlaceholder.classList.remove('selected-date')
    inputHead.classList.remove('selected-date')
    this.remove()
    filterCount--
    newOrderCount--
    if (filterCount < 1) {
      console.log(filterCount)
      for (let y = 0; y < resetButton.length; y++) {
        resetButton[y].classList.add('disabled')
      }
      if (applyButton) {
        applyButton.classList.add('disabled')
        filterButtonContainer.classList.remove('filter-chosen')
      }
    }
    if (newOrderCount !== 7) {
      if (newOrderAppendButton) {
        newOrderAppendButton.classList.add('disabled')
      }
    }
  })
}

/*
  Date
 */


/*
  Reset button
 */

for (let t = 0; t < resetButton.length; t++) {
  resetButton[t].addEventListener('click', function () {
    const allButtonClear = document.querySelectorAll('.clear-value')
    for (let w = 0; w < allButtonClear.length; w++) {
      allButtonClear[w].click()
    }
    for (let g = 0; g < sortInput.length; g++) {
      sortInput[0].click()
    }
  })
}

/*
  Reset button
 */


/*
  New order
 */

const newOrderButtonClose = document.querySelectorAll('.close-order-new')

function openOrderWidow() {
  if (!newOrderWindow.classList.contains('open-order-window')) {
    newOrderWindow.classList.add('open-order-window')
  } else {
    newOrderWindow.classList.remove('open-order-window')
  }
}

if (openNewOrderButton) {
  openNewOrderButton.addEventListener('click', function () {
    openOrderWidow()
  })
}

for (let u = 0; u < newOrderButtonClose.length; u++) {
  if (newOrderButtonClose[u]) {
    newOrderButtonClose[u].addEventListener('click', function () {
      openOrderWidow()
    })
  }
}


/*
  New order
 */

/*
  Number input
 */

const inputNumber = document.querySelectorAll('.only_num');
for (let l = 0; l < inputNumber.length; l++) {
  inputNumber[l].addEventListener('keydown', function(event) {
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
      (event.keyCode == 65 && event.ctrlKey === true) ||
      (event.keyCode >= 35 && event.keyCode <= 39)) {

      return;
    } else {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault();
      }
    }
  });
}


/*
  Number input
 */

/*
  Textarea
 */

let textarea = document.querySelectorAll('.textarea');

for (let h = 0; h < textarea.length; h++) {
  textarea[h].addEventListener('keydown', resize);
  if (textarea[h].textContent.length > 0) {
    let valueTextarea = textarea[h].textContent + ' '
    textarea[h].textContent = valueTextarea
    textarea[h].dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
  }

}




function resize() {
  let el = this;

  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:12px 16px';
    el.style.cssText = 'height: calc(' + el.scrollHeight + 'px + 20px)';
  }, 1);
}

/*
  Textarea
 */


/*
  Copy text
 */

const allCopyLine = document.querySelectorAll('.order__copy')

for (let i = 0; i < allCopyLine.length;i++) {
  const copyPhone = allCopyLine[i].querySelector('.order__line_item').textContent
  const copyPhoneButton = allCopyLine[i].querySelector('.order__line_copy')
  if (copyPhoneButton) {
    copyPhoneButton.addEventListener('click', function () {
      let x = document.createElement("INPUT")
      x.setAttribute("type", "text")
      x.setAttribute("value", copyPhone)
      let popupCopy = document.createElement("div")
      popupCopy.innerHTML = 'Телефон скопирован в буфер обмена'
      popupCopy.className = 'popup-copy'
      popupCopy.style.opacity = '0'
      setTimeout(() => {
        popupCopy.style.opacity = '1';
      }, 10);
      allCopyLine[i].appendChild(x)
      allCopyLine[i].appendChild(popupCopy)
      allCopyLine[i].querySelector('INPUT').select()
      document.execCommand('copy')
      allCopyLine[i].querySelector("INPUT").remove()
      setTimeout(() => {
        allCopyLine[i].querySelector(".popup-copy").remove()
      }, "4000")

    })
  }

}

/*
  Copy text
 */


/*
  Offers
 */

const allInfoOffers = document.querySelectorAll('.order__price')
for (let i = 0; i < allInfoOffers.length;i++) {
  const infoButton = allInfoOffers[i].querySelector('.order__price_info')
  const infoBlock = allInfoOffers[i].querySelector('.order__price_popup')
  if (infoButton) {
    infoButton.addEventListener('click', function () {
      if (!infoBlock.classList.contains('opened')) {
        infoBlock.classList.add('opened')
      }
    })
  }
}

/*
  Offers
 */


/*
  Executor
 */

const executorAll = document.querySelectorAll('.executor__item')
const executorDone = document.querySelector('.executor-done')
for (let y = 0; y < executorAll.length; y++) {
  const executorInput = executorAll[y].querySelector('input')
  if (executorInput) {
    executorInput.addEventListener('change', function () {
      executorDone.classList.add('executor-chosen')
    })


  }
}

/*
  Executor
 */


