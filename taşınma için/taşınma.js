function handleTransportTypeChange() {
    var transportType = document.getElementById('transportType').value;
    var serviceOptions = document.getElementById('serviceOptions');
    var freightOptions = document.getElementById('freightOptions');

    if (transportType === 'service') {
        serviceOptions.classList.remove('hidden');
        freightOptions.classList.add('hidden');
    } else if (transportType === 'freight') {
        freightOptions.classList.remove('hidden');
        serviceOptions.classList.add('hidden');
    }  else if (transportType === 'location') {
        freightOptions.classList.remove('hidden');
        serviceOptions.classList.add('hidden');
    }
}

function showResults() {
    var transportType = document.getElementById('transportType').value;

    if (transportType === "service") {
        window.location.href ='services/service.html';
    } else if (transportType === "freight") {
        window.location.href ='freight/freight.html';
    } else if (transportType === "location") {
        window.location.href ='location/location.html';
    }
}