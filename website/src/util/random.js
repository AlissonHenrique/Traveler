export default function random(data) {
  return data.sort(() => Math.random() - 0.5);
}
