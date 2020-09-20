# Dashcamx
## Explanation
- Created 3 microservices
    1. microservice_1 will handle all messages from Dashcam to backend such as login, alarm etc.
    2. microservice_2 will handle all get request from Dashcam UI to backend, get the data from the database
    3. microservice_3 will handle dashcam configuration from backend server

### Assumptions
1. All above operations would happen only when Dashcam is powered on.
2. Assuming we have all types of alarm and backend message to be send to Dashcam configuration stored in a config.
3. Database is also being handled by a different microservice_4 , running on port 8083, used to fetch data requested from UI.
4. For TCP stream, assuming it is handling on client as well.