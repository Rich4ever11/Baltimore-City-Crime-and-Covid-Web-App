# Baltimore-City-Crime-and-Covid-Web-App

Download all the files and data in this repository (I WOULD JUST DOWNLOAD A ZIP AND EXTRACT THE FILES)
To run this program you will need to have downloaded all the appropriate files and data in this repository. Make sure you have successfully downloaded node.js and python on to your computer. Once that is finished you must first install all the node module packages. To do this you would need to run inside the CLIENT folder
  
    1.) INSTALL ALL NODE MODULES
    npm install --force (installs all the node module packages *You may have to add --force*)
  
Once that is done you must run both the client and server at the same time.
To run the server you must ensure you are in (ven) mode. Download python virtual enviroment on your machine first
(create this in the server folder) And then you must make sure you have access to the database and the backend services.

(if steps 3-4 dont work or are unclear use this link - https://flask.palletsprojects.com/en/2.2.x/installation/)

    2.) INSTALL VIRTUAL ENVIORMENT 
    python3 -m venv env : (LINUX COMMAND) 
    py -m venv . : (WINDOWS COMMAND) 
    (make sure you have the virtual enviroment installed on your machine using venv)
    
    3.) ENTER VIRTUAL ENVIORMENT
    source ven/bin/activate : (LINUX COMMAND) (places you in ven mode)
    ./Scripts/activate : (WINDOWS COMMAND) (places you in venv mode)
    
        *install the needed packages : these being both flask and flask_sqlalchemy*
        pip install flask
        pip install flask_sqlalchemy
        
    4.) CREATE THE DATABASE
    *you may have to change the path to the two json files in this program*
    python3 create_database.py (creates the .db file, creating a database for our data on covid and crime in baltimore city to live)

    5.) BEGIN RUNNING THE SERVER.PY
    python3 server.py (activates the API service to recieve data from the database) *running the server.py like any other python code*
  
Once the server is running then you just need to run the client.
This will open a react webservice, allowing you to interact with the website

    6.) MAKE SURE THE PROXY MATCHES
    inside your package.json the proxy should match 
    the proxy that is running on the flask server
    "proxy": "your-location-your-flask-server-is-running-on",
    ex: "http://127.0.0.1:5000" or "http://localhost:5000"
    
    7.) RUN REACT WEBSITE
    npm run start (starts the front end)
  
Here is a link to how the program should look and work

https://drive.google.com/file/d/1YVrW3Ka5hssv7LOW6V4QM_XrmaAY0FL-/view?usp=sharing (WINDOWS RECORDING)

https://drive.google.com/file/d/1yjVDoeANx9PRPTEBs6nNRvvEcFjKBSZW/view?usp=sharing (LINUX RECORDING)
