export function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n?.toString().replace(/\d/g, x => farsiDigits[x]);
}
/* ------------------------------------------------------------------------------------------------------------------ */
export function setCookie(name, value, hours) {
    let expires = '';
    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + hours * 60 * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
/* ------------------------------------------------------------------------------------------------------------------ */
export function readCookieFrom(cookies = '', name) {
    const nameEQ = name + '=';
    const ca = cookies.split(';');
    let i = 0;
    const length = ca.length;
    for (; i < length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  /* ------------------------------------------------------------------------------------------------------------------ */
  export function deleteCookie(name) {
    setCookie(name, '', -1);
  }
  /* ------------------------------------------------------------------------------------------------------------------ */
  export function getCookie(name) {
    return readCookieFrom(document.cookie, name);
  }