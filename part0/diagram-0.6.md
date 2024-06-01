``` mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser: The user writes a note and clicks the Save button in the SPA version

    Note right of browser: The browser adds the new note to the notes list and re-renders the notes list on the page

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: The browser sends the new note in the body of the request
    activate server
    server-->>browser: Status 201 (Created)
    deactivate server
```