Hello , this website is deployed at Heroku and you can access it by going to the link : https://khoj-the-search.herokuapp.com/
======================================
To run this application
====================================
1. This application is built using Node js , MongoDb Atlas, Express .
 You need to have latest version of Node installed in your computer to run it. You can check weather you have Node by going to command prompt and typing: node -v
 you should see the Node js version if you have node js in your PC

If Node is not installed  you can go to this link and download and install it:https://nodejs.org/en/download/  

2.Once Nodejs is installed , Unzip the project folder, and open terminal
3. On terminal navigate to the root directory of this project which is named "Ami-Coding-Parina", and type : npm install
This will install all the required dependency of the project

4. After this you need to type: npm run start
you should see in terminal: server running successfully
5. After this go to your browser and type in the address :http://localhost:3000/
you should be able to access the website now


 //===========================================================
 //API endpoint access
 //==========================================================
1. After login you can  click on the Search option on Navigation Bar. There you will get  date pickers for start and end datetime you can select it and click the search button , this will hit the API .
2. In case you want to manually type the API address  ,the API is defined as:
/GetAllInputValues/?start_datetime=&end_datetime=&user_id=

you have to put value for three API query parameters : start_datetime, end_datetime and userId. You can access your user ID by going to the database directly or for the ease of access , I have included the user_id in the root directory's HTML page. Once you log in you can go to http://localhost:3000/ and you can access your user_id from there.

So lets say your user_id is 60aa533f and you want to find all the input values between 24/05/2021 4 pm to 25/05/2021 1am
you will type :
http://localhost:3000/GetAllInputValues/?start_datetime=2021-05-24 16:00:00&end_datetime=2021-05-25 01:00&user_id=60aa533f
******************************************************************************************
IMPORTANT: Please do not enclose any of the query parameters in single or double quote
********************************************************************************************

//========================================
//Database access
//=======================================
I have used mongodb's cloud platform and opened a account solely for this project. In case you want access the database directly follow the below steps:
1.go to : https://www.mongodb.com/cloud/atlas1 and sign in using the following credentials(do not choose sign in with google, use sign in with email instead):
       Email Address:amicodingparina@gmail.com
       password: test12345#
2. after sign in go to cluster>collection and you should find the database named Khoj
