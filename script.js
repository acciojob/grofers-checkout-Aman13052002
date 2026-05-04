const prices = document.querySelectorAll('.prices');
const table = document.querySelector('table');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  let totalPrice = 0;

  prices.forEach((price) => {
    const matches = price.textContent.match(/\d+/g);
    const value = matches ? Number(matches[matches.length - 1]) : 0;

    totalPrice += value;

  const existing = document.querySelector('#ans');
  if (existing) existing.remove();

  const newRow = document.createElement('tr');
  newRow.id = "ans";

  newRow.innerHTML = `
    <td>Total Price</td>
    <td>${totalPrice}</td>
  `;

  table.appendChild(newRow);
});
