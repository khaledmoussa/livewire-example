export default function chartComponent(data) {
    return {
        renderChart() {
            const ctx = document.getElementById('chartCanvas').getContext('2d');
            const labels = data.map(item => item.month);
            const counts = data.map(item => item.counts);

            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Users Registered',
                        data: counts,
                        backgroundColor: '#952f2d',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, // Allow resizing
                }
            });
        }
    }
}
