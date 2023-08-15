let ticketsBtnArr = document.querySelectorAll('.concert__ticket');
let buyTicketsBtn = document.querySelector('.buyWindow__btn');
let inpNum = document.querySelector('.buyWindow__inp_num');
let inpSum = document.querySelector('.buyWindow__inp_sum');
let inpName = document.querySelector('.buyWindow__inp_name');
let inpEmail = document.querySelector('.buyWindow__inp_email');

inpNum.value = 1;

ticketsBtnArr.forEach((elem) => {
  elem.addEventListener('click', () => {
    inpSum.value = Number(inpNum.value) * 500;
    inpNum.addEventListener('input', () => {
      inpSum.value = Number(inpNum.value) * 500;
    });
  });
});

buyTicketsBtn.addEventListener('click', () => {
  if (inpName.value && inpEmail.value) {
    document.querySelector('#buyTicket').close();
  };
});