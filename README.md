# Wevdev-project-bvur-innovations-

ok so first your have to download the project

then open the folder in vscode

node ,npm and mongodb should be installed in computer

then open terminal and run command "npm install" to have node_modules

then inside config->dev.env setup mongodb url

then run command "npm run dev" to run the server

then open postman and run the commands:-

first setup headers 
      key as Content-Type
      Value as application/json
second in body select raw

http://localhost:8000/POST/people
![image](https://user-images.githubusercontent.com/62240419/211562749-bd2a1e78-7d2e-4bba-9bd5-9fe775d9afd3.png)

http://localhost:8000/GET/people
![image](https://user-images.githubusercontent.com/62240419/211562400-726d77ca-c5b3-4405-ad8d-1203185f4245.png)

http://localhost:8000/GET/people/:id
![image](https://user-images.githubusercontent.com/62240419/211561473-a8495c8b-720a-4896-86a7-897aaf3f2a87.png)

http://localhost:8000/PUT/people/:id
![image](https://user-images.githubusercontent.com/62240419/211562254-fdd243e8-a2b3-4101-8d81-250d364b418a.png)

http://localhost:8000/DELETE/people/:id

![image](https://user-images.githubusercontent.com/62240419/211560803-1c680bc5-16f6-4225-a85c-0da5524294f1.png)
