sequenceDiagram
	participant browser
	participant server 

	...

	browser ->>server> POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	server -->> browser: [ { "note": "anything" } ]
	deactivate server

	browser->>server: GET https://studies.css.helsinki.fi/exampleapp/data.json
	activate server
	server-->>browser: [{ "content": "anything", "date": "2023-1-1" }, 
...]
	deactivate server

	browser ->>server> POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	server -->> browser: [ { "note": "" } ]
	deactivate server

	browser->>server: GET https://studies.css.helsinki.fi/exampleapp/data.json
	activate server
	server-->>browser: [{ "content": "", "date": "2023-1-1" }, 
...]
	deactivate server

