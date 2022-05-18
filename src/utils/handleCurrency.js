export const convertMoney = (value, type) => {
  const currency = {
    euro: 'EUR',
    dolar: 'USD',
    real: 'BRL'
  }
  const money = value.replaceAll(',', '.')
  return Number(money).toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: currency[type]
  })
}
