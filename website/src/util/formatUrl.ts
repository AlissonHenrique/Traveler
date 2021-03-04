export default function regex(palavra) {
  return palavra
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9A-zA-Z])/g, "")
    .toLowerCase();
}
