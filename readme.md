#NODE.js CHALLENGE

» Open folder in your code editor or CMD
If you open this folder in Visual Studio Code, use the shortcut CTRL + SHIFT + Ñ for create a new terminal at CMD

» Make sure you are not using port 4000 to run another application (required port)
» Run the command «npm i» for install the necessary dependencies
» This project has «nodemon» for the automatic updates. Run the command «nodemon» in cmd when the dependencies has been installed
» You can read the message in console: "¡App listening on port 4000!

Endpoints availables: 
endpoint: http://localhost:4000/api/today
type: GET
description: will can view the date to the request

endpoint: http://localhost:4000/api/reading
type: GET
description: will can view the information saved in a text file

endpoint: http://localhost:4000/api/your-name
type: POST
description: you will be able to submit a request with a property called "name". It is recommended to use Postman or Insomnia for a JSON body request