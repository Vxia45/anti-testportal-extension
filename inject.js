try {
  const original = RegExp.prototype.test;

  RegExp.prototype.test = function (s) {
    const string = this.toString();

    if (string.includes("native code") && string.includes("function")) {
      return true;
    }

    return original.call(this, s);
  };

  document.hasFocus = () => true;
} catch (e) {}
