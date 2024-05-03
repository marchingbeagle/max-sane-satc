### Send this json to the route *http://localhost:8080/auth/register*
```json
{
    "id": "123e4567-e89b-12d3-a456-426614174001",
    "user_name": "admin",
    "role": "ADMIN",
    "password": "admin",
    "email": "admin",
    "cpf": "123.456.789-00",
    "phonenumber": "+55 11 99999-9999"
}
```

### You also need to write the .env file
```.env
DB_URL=jdbc:postgresql://localhost:5432/postgres
DB_USERNAME=postgres
DB_PASSWORD=postgres
JWT_TOKEN=tokensupersecret
```
