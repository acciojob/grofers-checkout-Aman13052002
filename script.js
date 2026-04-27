const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const price = document.querySelectorAll('price');
	
	let total = 0;
	price.forEach((price)=>{
		total+=Number(price.textContent);
	})
  let table = document.querySelector('table');
	let newRow = document.createElement('tr');
	let newCell = document.createElement('td');
	newCell.setAttribute("colspan","2");
	newCell.textContent = "Total:"+total;
	newRow.appendChild(newCell);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

