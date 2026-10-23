```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: visit https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: server returns html,css,js and data.json files
    deactivate server

     Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server and redraws notes

```   

