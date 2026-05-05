const prices = document.querySelectorAll('.prices');
const table = document.querySelector('table');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let total = 0;
  prices.forEach(price => {
    const value = Number(price.textContent.match(/\d+$/)?.[0] || 0);
    total += value;
  });

  const old = document.querySelector('#ans');
  if (old) old.remove();

  const row = document.createElement('tr');
  row.id = "ans";

  const cell = document.createElement('td');
  cell.colSpan = 2;   
  cell.textContent = total;

  row.appendChild(cell);
  table.appendChild(row);
});
