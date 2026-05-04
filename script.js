const prices = document.querySelectorAll('.prices');
const table = document.querySelector('table');
let totalPrice = 0;

prices.forEach((price)=>{
	totalPrice += Number(price.textContent);
})
const newRow = document.createElement('tr');
newRow.innerHTML = `<td>Total Price</td>
					<td>${totalPrice}</td>
`;
table.appendChild(newRow);
