import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let delayInp = null;
let stepInp = null;
let amountInp = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = e => {
  e.preventDefault();


  const {elements: { delay, step, amount }} = e.currentTarget;

  delayInp = Number(delay.value);
  stepInp = Number(step.value);
  amountInp = Number(amount.value);

  if(delayInp<0 || stepInp<0 || amountInp<0){Notify.warning("NO negative number!");return}

  for (let i = 1; i <= amountInp; i++) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInp += stepInp;
  }

  e.currentTarget.reset();
};
form.addEventListener('submit', submitHandler);