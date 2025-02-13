const ctx = document.getElementById('wasteChart').getContext('2d');
let wasteData = [];
const labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

document.getElementById('waste-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const wasteValue = parseFloat(document.getElementById('waste').value);
    if (!isNaN(wasteValue)) {
        wasteData.push(wasteValue);
        if (wasteData.length > 7) {
            wasteData.shift(); // Keep the data for only the last 7 days
        }

        const avgWaste = wasteData.reduce((a, b) => a + b, 0) / wasteData.length;

        const wasteChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.slice(0, wasteData.length),
                datasets: [{
                    label: 'Waste (kg)',
                    data: wasteData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        alert(`Your average waste for the week: ${avgWaste.toFixed(2)} kg/day`);
    }
});

// Quiz interaction
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedWaste = document.querySelector('input[name="waste-type"]:checked');
    const resultText = document.getElementById('quiz-result');

    if (selectedWaste) {
        if (selectedWaste.value === 'paper') {
            resultText.textContent = "Correct! Paper is recyclable.";
        } else {
            resultText.textContent = "Oops! That’s not right. Paper should go in the recycling bin.";
        }
    } else {
        resultText.textContent = "Please select an option.";
    }
});