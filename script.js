const prices = document.querySelectorAll('.prices');
const table = document.querySelector('table');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  let totalPrice = 0;

  prices.forEach((price) => {
    const value = Number(price.textContent.match(/\d+$/)?.[0] || 0);
    totalPrice += value;
  });

  // Remove old total row if exists
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
