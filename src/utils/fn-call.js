function fnCall(action, params, keys = []) {
  const { android, webkit } = window;
  if (android) {
    if (typeof android[action] === 'function') {
      eval(
        `window.android.${action}(${keys
          .map(k => {
            const val = params[k];
            if (typeof val !== 'number') {
              return `"${val}"`;
            }
            return val;
          })
          .join(', ')})`,
      );
    }
  }
  if (
    webkit &&
    webkit.messageHandlers &&
    webkit.messageHandlers.jsToOc &&
    webkit.messageHandlers.jsToOc.postMessage
  ) {
    webkit.messageHandlers.jsToOc.postMessage(action, params);
  }
}

export default fnCall;
