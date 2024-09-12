/**
 * Sends custom metrics to a Pushgateway server using a POST request.
 * The metrics include the current path and a timestamp.
 *
 * The gateway URL is obtained from environment variables.
 * This function is triggered when the window loads.
 *
 * @function sendMetrics
 * @returns {void}
 */
function sendMetrics() {
    // const gatewayUrl = import.meta.env.VITE_PUSHGATEWAY_URL;
    // const metricsData = {
    //     path: window.location.pathname,
    //     timestamp: new Date().toISOString(),
    // }; // TODO: Add custom metric details as needed
    //
    // fetch(`${gatewayUrl}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(metricsData)
    // })
    //     .then(response => {
    //         if (!response.ok) {
    //             console.error('Error sending metrics:', response.statusText);
    //         } else {
    //             // console.log('Metrics sent successfully:', metricsData);
    //         }
    //     })
    //     .catch(error => console.error('Error sending metrics:', error));
}

window.addEventListener('load', sendMetrics);

export default sendMetrics;
