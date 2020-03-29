const Symbols = [
  [
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', "'", '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', "'", "'"],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', '.', '<'],
    ['Period', 'ю', 'Ю', ',', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const wrapper = document.createElement('section');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let language = 'rus';
let capsLock = false;

wrapper.className = 'wrapper';
keyboard.className = 'keyboard';
textarea.id = 'resValue';
wrapper.append(textarea);
wrapper.append(keyboard);
document.body.append(wrapper);

Symbols.forEach((el) => {
  const row = document.createElement('div');
  row.className = 'row';
  el.forEach((elTwo) => {
    const key = document.createElement('div');
    key.className = `key ${elTwo[0]}`;
    key.insertAdjacentHTML(
      'afterbegin',
      `<div class="rus">
        <span class="caseDown">${elTwo[1]}</span>
        <span class="caseUp hidden">${elTwo[2]}</span>
     </div>
     <div class="eng hidden">
        <span class="caseDown hidden">${elTwo[3]}</span>
        <span class="caseUp hidden">${elTwo[4]}</span>
     </div>  
    `
    );
    row.appendChild(key);
  });
  keyboard.appendChild(row);
});

function throttle(func, ms) {
  let lastCall = 0;
  return function () {
    let now = Date.now();
    if (lastCall + ms < now) {
      lastCall = now;
      return func.apply(this, arguments);
    }
  };
}

const addActiveClass = (el) => {
  el.classList.add('active');
};

const removeActiveClass = (el) => {
  el.classList.remove('active');
};

const changeCase = () => {
  const langEl = keyboard.querySelectorAll(`div > .${language}`);
  langEl.forEach((el) => {
    el.querySelectorAll('span')[0].classList.toggle('hidden');
    el.querySelectorAll('span')[1].classList.toggle('hidden');
  });
};

const changeLanguage = () => {
  const prevLang = keyboard.querySelectorAll(`div > .${language}`);
  prevLang.forEach((el) => {
    el.classList.toggle('hidden');
    el.querySelectorAll('span')[0].classList.toggle('hidden');
  });
  if (language === 'rus') {
    language = 'eng';
    localStorage.setItem('language', language);
  } else {
    language = 'rus';
    localStorage.setItem('language', language);
  }
  const nextLanguage = keyboard.querySelectorAll(`div > .${language}`);
  nextLanguage.forEach((el) => {
    el.classList.toggle('hidden');
    el.querySelectorAll('span')[0].classList.toggle('hidden');
  });
};

if (localStorage.lang === 'eng') {
  changeLanguage();
}

textarea.addEventListener('keydown', (event) => {
  event.preventDefault();
});

document.addEventListener(
  'keydown',
  throttle((event) => {
    const el = keyboard.getElementsByClassName(event.code)[0];
    if (
      event.altKey &&
      event.ctrlKey &&
      (event.keyCode === 18 || event.keyCode === 17)
    ) {
      addActiveClass(el);
      changeLanguage();
      return false;
    }
    switch (event.code) {
      case 'Tab':
        event.preventDefault();
        addActiveClass(el);
        textarea.value += '    ';
        break;
      case 'CapsLock':
        if (capsLock) {
          removeActiveClass(el);
          capsLock = false;
        } else {
          addActiveClass(el);
          capsLock = true;
        }
        event.preventDefault();
        changeCase();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        event.preventDefault();
        addActiveClass(el);
        changeCase();
        break;
      case 'ControlLeft':
      case 'ControlRight':
        event.preventDefault();
        addActiveClass(el);
        break;
      case 'MetaLeft':
        break;
      case 'AltLeft':
      case 'AltRight':
        event.preventDefault();
        addActiveClass(el);
        break;
      case 'Enter':
        event.preventDefault();
        addActiveClass(el);
        textarea.value += '\n';
        break;
      case 'Backspace':
        textarea.value = textarea.value.substr(0, textarea.value.length - 1);
        addActiveClass(el);
        break;
      case 'Delete':
        event.preventDefault();
        addActiveClass(el);
        break;
      default:
        addActiveClass(el);
        textarea.value += el.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }

    console.log(el);
  }, 10)
);

document.addEventListener('keyup', (event) => {
  const el = keyboard.getElementsByClassName(event.code)[0];
  switch (event.code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      event.preventDefault();
      removeActiveClass(el);
      changeCase();
      break;
    case 'CapsLock':
      break;
    default:
      removeActiveClass(el);
      break;
  }
});

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.tagName === 'SPAN') {
    const el = event.target.closest('.key');
    switch (el.classList[1]) {
      case 'MetaLeft':
        event.preventDefault();
        break;
      case 'Tab':
        event.preventDefault();
        addActiveClass(el);
        textarea.value += '    ';
        break;
      case 'Enter':
        event.preventDefault();
        addActiveClass(el);
        textarea.value += '\n';
        break;
      case 'Backspace':
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        addActiveClass(el);
        break;
      case 'CapsLock':
        event.preventDefault();
        if (capsLock) {
          removeActiveClass(el);
          capsLock = false;
        } else {
          addActiveClass(el);
          capsLock = true;
        }
        changeCase();
        break;
      case 'Delete':
        event.preventDefault();
        addActiveClass(el);
        break;
      case 'AltLeft':
      case 'AltRight':
        event.preventDefault();
        addActiveClass(el);
        break;
      case 'ControlLeft':
      case 'ControlRight':
        event.preventDefault();
        addActiveClass(el);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        event.preventDefault();
        addActiveClass(el);
        changeCase();
        break;
      default:
        addActiveClass(el);
        textarea.value += el.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  } else {
    event.preventDefault();
  }
});

keyboard.addEventListener('mouseup', (event) => {
  const el = event.target.closest('.key');
  switch (el.classList[1]) {
    case 'ShiftLeft':
    case 'ShiftRight':
      event.preventDefault();
      removeActiveClass(el);
      changeCase();
      break;
    case 'CapsLock':
      event.preventDefault();
      if (!capsLock) {
        removeActiveClass(el);
      } else {
        addActiveClass(el);
      }
      break;
    default:
      removeActiveClass(el);
      break;
  }
});

keyboard.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

keyboard.addEventListener('dblclick', (event) => {
  event.preventDefault();
});

document.body.append(wrapper);
