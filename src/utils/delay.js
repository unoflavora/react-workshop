
export default function delay(howLongMs: number) {
  return new Promise(resolve => {
    setTimeout(resolve, howLongMs);
  });
}
  