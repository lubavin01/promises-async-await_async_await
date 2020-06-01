export default function json(data) {
  return new Promise((resolve) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
    //  resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
