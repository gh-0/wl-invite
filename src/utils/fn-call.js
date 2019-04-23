function fnCall(action, params, keys = []) {
  console.log(action, params, keys)
  const { android, webkit } = window;
  if (android) {
    if (typeof android[action] === "function") {
      eval(
        `window.android.${action}(${keys
          .map(k => {
            const val = params[k];
            if (typeof val !== "number") {
              return `"${val}"`;
            }
            return val;
          })
          .join(", ")});`
      );
    }
  }
  if (webkit && webkit.messageHandlers && webkit.messageHandlers[action]) {
    if (
      webkit.messageHandlers[action].postMessage &&
      typeof webkit.messageHandlers[action].postMessage === "function"
    ) {
      eval(`
      window.webkit.messageHandlers.${action}.postMessage(${JSON.stringify(
        params
      )});
      `);
    }
  }
}

export default fnCall;
