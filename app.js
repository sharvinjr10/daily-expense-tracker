function addExpense() {
  const itemName = document.getElementById("item-name").value;
  const itemPrice = parseFloat(document.getElementById("item-price").value);
  const itemType = document.getElementById("item-type").value;

  if (!itemName || isNaN(itemPrice)) {
    alert("Please enter a valid item and price.");
    return;
  }

  const expense = {
    name: itemName,
    price: itemPrice,
    type: itemType
  };

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
}

function renderExpenses() {
  const tbody = document.getElementById("expense-table-body");
  tbody.innerHTML = "";

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.forEach((expense) => {
    const row = document.createElement("tr");

    const highTag = expense.price > 30 ? "High" : "Normal";
    const tagClass = expense.price > 30 ? "high" : "";

    row.innerHTML = `
      <td>${expense.name}</td>
      <td>RM ${expense.price.toFixed(2)}</td>
      <td>${expense.type.toUpperCase()}</td>
      <td class="${tagClass}">${highTag} Expenditure</td>
    `;

    tbody.appendChild(row);
  });
}

window.onload = renderExpenses;
