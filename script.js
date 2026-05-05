const prices = document.querySelectorAll('.prices');
const table = document.querySelector('table');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let total = 0;

  prices.forEach(price => {
    const match = price.textContent.match(/\d+$/);
    const value = match ? Number(match[0]) : 0;

    total += value;
  });

  const old = document.querySelector('#ans');
  if (old) old.remove();

  const row = document.createElement('tr');
  row.id = "ans";
  row.innerHTML = `
    <td>Total</td>
    <td>${total}</td>
  `;

  table.appendChild(row);
});
