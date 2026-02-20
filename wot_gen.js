(function(i) {
    var td = {
        "@context": "https://www.w3.org/2019/wot/td/v1",
        "id": "urn:dev:ops:openhab-sensor-01",
        "title": "OpenHAB CoAP Sensor Gateway",
        "description": "Семантично анотований термометр через OpenHAB",
        "securityDefinitions": { "nosec_sc": { "scheme": "nosec" }},
        "security": "nosec_sc",
        "properties": {
            "temperature": {
                "type": "number",
                "unit": "degree celsius",
                "observable": true,
                "readOnly": true,
                "forms": [{
                    "href": "http://localhost:8080/rest/items/CoAP_Sensor_Value/state",
                    "contentType": "application/json"
                }]
            }
        }
    };
    return JSON.stringify(td, null, 4);
})(input)