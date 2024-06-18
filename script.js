/*
  Jonathan Kang
  Wenjin Zhou
  COMP4610
  Homework 4

  This is the JavaScript file for handling all of the calculations, table generation, and the slider components.
  As a bonus, errors are included in here as well but unfortunately do not work because of some mistake.

*/

$(document).ready(function() {
  function syncSlidersWithInputs() {
      $("#startMultiplier").on("input", function() {
          $("#startMultiplierSlider").slider("value", this.value);
      });
      $("#endMultiplier").on("input", function() {
          $("#endMultiplierSlider").slider("value", this.value);
      });
      $("#startMultiplicand").on("input", function() {
          $("#startMultiplicandSlider").slider("value", this.value);
      });
      $("#endMultiplicand").on("input", function() {
          $("#endMultiplicandSlider").slider("value", this.value);
      });
  }

  $("#startMultiplierSlider").slider({
      min: -50,
      max: 50,
      value: 0,
      step: 1,
      slide: function(event, ui) {
          $("#startMultiplier").val(ui.value);
      }
  });

  $("#endMultiplierSlider").slider({
      min: -50,
      max: 50,
      value: 0,
      step: 1,
      slide: function(event, ui) {
          $("#endMultiplier").val(ui.value);
      }
  });

  $("#startMultiplicandSlider").slider({
      min: -50,
      max: 50,
      value: 0,
      step: 1,
      slide: function(event, ui) {
          $("#startMultiplicand").val(ui.value);
      }
  });

  $("#endMultiplicandSlider").slider({
      min: -50,
      max: 50,
      value: 0,
      step: 1,
      slide: function(event, ui) {
          $("#endMultiplicand").val(ui.value);
      }
  });

  syncSlidersWithInputs();

  const form = document.getElementById('inputForm');
  const tableContainer = document.getElementById('tableContainer');
  const multiplicationTable = document.getElementById('multiplicationTable');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;

      $(".error").text("");

      const startMultiplier = document.getElementById('startMultiplier').value;
      const endMultiplier = document.getElementById('endMultiplier').value;
      const startMultiplicand = document.getElementById('startMultiplicand').value;
      const endMultiplicand = document.getElementById('endMultiplicand').value;

      function validateInput(value, errorElement) {
          if (isNaN(value) || value === '') {
              $(errorElement).text("Cannot enter text as input. Please enter a number.");
              return false;
          } else if (value < -50 || value > 50) {
              $(errorElement).text("Number must be between -50 and 50.");
              return false;
          }
          return true;
      }

      isValid &= validateInput(startMultiplier, "#startMultiplierError");
      isValid &= validateInput(endMultiplier, "#endMultiplierError");
      isValid &= validateInput(startMultiplicand, "#startMultiplicandError");
      isValid &= validateInput(endMultiplicand, "#endMultiplicandError");

      if (!isValid) return;

      const startMultiplierNum = parseInt(startMultiplier);
      const endMultiplierNum = parseInt(endMultiplier);
      const startMultiplicandNum = parseInt(startMultiplicand);
      const endMultiplicandNum = parseInt(endMultiplicand);

      if (startMultiplierNum > endMultiplierNum || startMultiplicandNum > endMultiplicandNum) {
          alert('Starting numbers cannot be greater than ending numbers.');
          return;
      }

      multiplicationTable.innerHTML = '';

      const headerRow = document.createElement('tr');
      
      headerRow.insertCell().textContent = '';
      for (let i = startMultiplierNum; i <= endMultiplierNum; i++) {
          const headerCell = document.createElement('th');
          headerCell.textContent = i;
          headerRow.appendChild(headerCell);
      }
      multiplicationTable.appendChild(headerRow);

      for (let i = startMultiplicandNum; i <= endMultiplicandNum; i++) {
          const row = document.createElement('tr');
          const firstCell = document.createElement('td');
          firstCell.textContent = i;
          row.appendChild(firstCell);

          for (let j = startMultiplierNum; j <= endMultiplierNum; j++) {
              const cell = document.createElement('td');
              cell.textContent = i * j;
              row.appendChild(cell);
          }
          multiplicationTable.appendChild(row);
      }
  });
});
