## Assets Server
The assets provider, will run by default on port 3000

#### build
```build:assets-server```  
builds the assets server code (transpilation) and the modules code  

#### output
build/assets-server  
the entry file is entry.js

#### start
```start:assets-server```  
starts the server; executes build/assets-server/entry.js  

#### monitor
```mon:assets-server```  
uses [nodemon](https://github.com/remy/nodemon) to track changes and restart server when a changes is detected  

## Web Client
A web client for instances  

#### build
```build:web-client```  
builds the web client code (webpack) and the modules code  

#### output
The output is at build/web-client  
index.html is the main page (currently contains tests and examples)