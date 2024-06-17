const form = document.getElementById('inputForm');
const tableContainer = document.getElementById('tableContainer');
const multiplicationTable = document.getElementById('multiplicationTable');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const startMultiplier = parseInt(document.getElementById('startMultiplier').value);
  const endMultiplier = parseInt(document.getElementById('endMultiplier').value);
  const startMultiplicand = parseInt(document.getElementById('startMultiplicand').value);
  const endMultiplicand = parseInt(document.getElementById('endMultiplicand').value);

  if (isNaN(startMultiplier) || isNaN(endMultiplier) || isNaN(startMultiplicand) || isNaN(endMultiplicand)) {
    alert('Please enter a valid number.');
    return;
  }

  if (startMultiplier > endMultiplier || startMultiplicand > endMultiplicand) {
    alert('Starting numbers cannot be greater than ending numbers.');
    return;
  }

  multiplicationTable.innerHTML = '';

  const headerRow = document.createElement('tr');
  
  headerRow.insertCell().textContent = '';
  for (let i = startMultiplier; i <= endMultiplier; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = i;
    headerRow.appendChild(headerCell);
  }
  multiplicationTable.appendChild(headerRow);

  for (let i = startMultiplicand; i <= endMultiplicand; i++) {
    const row = document.createElement('tr');
    const firstCell = document.createElement('td');
    firstCell.textContent = i;
    row.appendChild(firstCell);

    for (let j = startMultiplier; j <= endMultiplier; j++) {
      const cell = document.createElement('td');
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    multiplicationTable.appendChild(row);
  }
});
