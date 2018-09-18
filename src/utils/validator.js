export function validateEmail(value) {
  return /^([\w_\.\-\+])+@([\w\-]+\.)+([\w]{2,10})+$/.test(value)
}