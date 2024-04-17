# microservice-architecture-e-commerce-website

# running payment backend seperately
```
cd payment backend
docker build -t my-node-app .
docker run -d -p 5555:5555 my-node-app
```