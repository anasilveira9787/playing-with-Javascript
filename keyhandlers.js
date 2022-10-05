const pressedKeys = {
  NotDefinedKey() {}
}

const shiftPressedKeys = {
  NotDefinedKey() {}
}

const ctrlPressedKeys = {
  NotDefinedKey() {}
}

/**
 *  Define a execução de uma função ao pressionamento de uma "tecla"
 * @param {*} keyCode código da tecla pressionada (mesmo nome do event.code)
 * @param {*} func função a ser executada
 */
export function setKeyHandler(keyCode, func) {
  pressedKeys[keyCode] = func
}

/**
 *  Define a execução de uma função ao pressionamento de "Shift + tecla"
 * @param {*} keyCode código da tecla pressionada (mesmo nome do event.code)
 * @param {*} func função a ser executada
 */
export function setShiftKeyHandler(keyCode, func) {
  shiftPressedKeys[keyCode] = func
}

/**
 *  Define a execução de uma função ao pressionamento de "Ctrl + tecla"
 * @param {*} keyCode código da tecla pressionada (mesmo nome do event.code)
 * @param {*} func função a ser executada
 */
export function setCtrlKeyHandler(keyCode, func) {
  ctrlPressedKeys[keyCode] = func
}

/**
 * Inicia o gerenciamento das teclas pressionadas
 */
export default function startKeyHandler() {
  document.addEventListener('keydown', event => {
    const { code, shiftKey, ctrlKey } = event
    const ctrlShift = shiftKey && ctrlKey

    let callKeyFunction = {}

    if (shiftKey) {
      callKeyFunction =
        code in shiftPressedKeys
          ? shiftPressedKeys[code]
          : shiftPressedKeys['NotDefinedKey']
    } else if (ctrlKey) {
      callKeyFunction =
        code in ctrlPressedKeys
          ? ctrlPressedKeys[code]
          : ctrlPressedKeys['NotDefinedKey']
    } else {
      callKeyFunction =
        code in pressedKeys ? pressedKeys[code] : pressedKeys['NotDefinedKey']
    }

    // console.log(
    //   `key code: ${code}, shift pressed: ${shiftKey}, ctrl pressed: ${ctrlKey}`
    // )

    callKeyFunction()
  })
}
