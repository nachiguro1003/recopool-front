# description
this is the application built by Deno and React. 

# Setup

1. create directory to put on bundled js
`mkdir public`

2. bundle js
`deno bundle ./app/index.tsx > ./public/app.js`
 
3. start server
`deno run --allow-net --allow-read --unstable ./app/server.tsx`
