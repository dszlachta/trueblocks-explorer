
export const formatNumber = (n, dd = 0, type = '', delim = ',', dec = '.') => {
  if (!n)
    return '';
  const number = (type === '' ? n.toString() : n.toFixed(dd));
  const prefix = (type === '' ? '' : (type === '$' ? (type + ' ') : ''));
  const postfx = (type === '' ? '' : (type === '$' ? '' : (' ' + type)));

  let ret = (number.replace('.', dec).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + delim));
  if (!ret.includes(dec))
    return prefix + ret + postfx;

  const parts = ret.split(dec);
  parts[1] = (dec === '.' ? parts[1].replace(/,/g, '') : parts[1].replace(/\./g, ''));
  ret = parts[0] + dec + parts[1];
  return prefix + ret + postfx;
}

/*
TESTING
  const check = (n, expected) => {
    return (
      <div style={{ width: '60%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>{n}</div>
        <div className={n === expected ? "" : "warning"}>{expected}</div>
      </div>
    );
  }

  <div style={{ margin: '200px', fontSize: '1em' }}>
    {check(formatNumber(2665), "2,665")}
    {check(formatNumber(-102665), "-102,665")}
    {check(formatNumber(111102665), "111,102,665")}
    {check(formatNumber(1240.52345), "1,240.52345")}
    {check(formatNumber(1000240.5121909812), "1,000,240.5121909812")}
    {check(formatNumber("100100"), "100,100")}
    {check(formatNumber(1000000000000001), "1,000,000,000,000,001")}
    {check(formatNumber(10000000000000001), "10,000,000,000,000,001")}
    {check(formatNumber(100000000000000001), "100,000,000,000,000,001")}
    {check(formatNumber(1000000000000000001), "1,000,000,000,000,000,001")}
    {check(formatNumber(2665, 0, '$'), "$ 2,665")}
    {check(formatNumber(2665, 2, '$'), "$ 2,665.00")}
    {check(formatNumber(2665.0123, 0, '$'), "$ 2,665")}
    {check(formatNumber(102665, 5, '$'), "$ 102,665.00000")}
    {check(formatNumber(1234567.0123456789, 0, '€', '.', ','), "1.234.567 €")}
    {check(formatNumber(1234567, 2, '€', '.', ','), "1.234.567,00 €")}
    {check(formatNumber(1234567.0123456789, 2, '€', '.', ','), "1.234.567,01 €")}
    {check(formatNumber(1234567.0123456789, 6, '€', '.', ','), "1.234.567,012346 €")}
  </div>
*/