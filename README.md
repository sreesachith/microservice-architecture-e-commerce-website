# microservice-architecture-e-commerce-website

# running payment backend seperately
```
cd payment backend
docker build -t my-node-app .
docker run -d -p 5555:5555 my-node-app
```
# running proucts backend seperately
Before doing this,run backend first to check if it's working by : python app.py
If it doesn't work,make sure to create a python virtual environment and run flask in that
```
cd product_backend
docker build -t flask-app .
docker run -p 8080:5000 flask-app
```
