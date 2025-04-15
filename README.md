# Simple Web Service with Supabase and External Integration

This project is a simple **web service** built using **Node.js**, **Express**, and **Supabase**. It also integrates with an external service for demonstrating API calls.

## Features

- **SQL Database (Supabase)**: Stores and retrieves messages via the `/api/messages` endpoint.
- **External Service Integration**: Calls an external service using the `/api/external` endpoint.
- **Health Check**: Verifies if the service is running via the `/api/status` endpoint.
- **RPS of 1000/s**: Designed to handle 1000 requests per second under optimized conditions.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Endpoints](#endpoints)
- [External Service Integration](#external-service-integration)
- [Deployment](#deployment)
- [Notes](#notes)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **External Service**: Webhook Integration (used Webhook.site for testing)
- **Deployment**: Render (Free tier)

## Endpoints

1. **GET `/api/status`**  
   Returns a status message indicating that the service is running.
   - Response:  
     ```json
     { "message": "Service running ✅" }
     ```

2. **GET `/api/external`**  
   Makes a call to an external service and returns the result.
   - Example response:
     ```json
     { "message": "External service data" }
     ```

3. **GET `/api/messages`**  
   Fetches all stored messages from Supabase.
   - Response:  
     ```json
     [
       {
         "id": 1,
         "text": "Hello from Supabase!",
         "created_at": "2025-04-15T15:13:24.948634+00:00"
       }
     ]
     ```

4. **POST `/api/message`**  
   Adds a new message to the database.
   - Request Body:  
     ```json
     {
       "text": "Hello from Supabase!"
     }
     ```

   - Response:  
     ```json
     { "id": 1, "text": "Hello from Supabase!", "created_at": "2025-04-15T15:13:24.948634+00:00" }
     ```

## External Service Integration

The `/api/external` endpoint integrates with a service using Webhook.site for testing purposes. It makes a **GET request** to a predefined Webhook URL and returns the response from the service.

- Current Webhook URL:  
  [https://webhook.site/e3d1ab14-c68c-4282-856e-13fe2c86e444](https://webhook.site/e3d1ab14-c68c-4282-856e-13fe2c86e444)

## Deployment

This web service is deployed on **Render**. It is free and automatically redeploys when changes are pushed to GitHub.

### Steps to Deploy:

1. **Create a Render account**: [https://render.com](https://render.com)
2. **Create a new Web Service** and link it to your GitHub repository.
3. **Set up environment variables** (SUPABASE_URL, SUPABASE_KEY) in Render’s dashboard.
4. **Deploy the service**.

Once deployed, your service will be available at:  
[https://simple-web-service-4c65.onrender.com](https://simple-web-service-4c65.onrender.com)

## Notes

- **RLS (Row-Level Security)**: To allow data insertions in Supabase, you may need to configure your policies. By default, Supabase restricts data access unless explicitly allowed.
- **External Service**: The external service endpoint currently points to Webhook.site for demonstration purposes. You can update the URL for integration with your actual service.
