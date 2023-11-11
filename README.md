# Text Summarizer Using Chat-GPT Turbo 3.5

## Overview

This project consists of a backend API built using Django and Python, which utilizes the Chat-GPT Turbo 3.5 model to summarize text inputs. The backend API receives text inputs through HTTP requests and responds with a summary of the given text. The frontend part of the application is built using Next.js and TypeScript, allowing users to input text and display the resulting summary.

## Backend

The backend API is built using Django and Python. It uses the `chatGPT` library to interact with the Chat-GPT Turbo 3.5 model. The API endpoint is `api/summarize/`, which accepts a JSON payload containing the text to be summarized. The API returns a JSON response with the summary of the text.

# Text Summarizer API Documentation

## API Endpoint

The API endpoint for the text summarizer is `https://text-summarizer-backend.onrender.com/api/summarize/`. It supports POST requests.

## Request Format

The request format is JSON. The payload must contain a single key-value pair, where the key is `text` and the value is the text to be summarized. For example:

```json
{
  "text": "This is a sample text to summarize."
}
```

## Testing the API

### Using Curl

You can test the API using `curl` as follows:

```bash
curl -X POST \
  https://text-summarizer-backend.onrender.com/api/summarize/ \
  -H 'Content-Type: application/json' \
  -d '{
        "text": "This is a sample text to summarize."
      }'

```

# Frontend

The frontend of this project is developed using Next.js and TypeScript. It provides a user-friendly interface for interacting with the Text Summarizer API.

Frontend URL: [https://brief-io.vercel.app/](https://brief-io.vercel.app/)

### How to Use the Frontend

1. Clone this repository to your local machine.

2. Navigate to the `frontend` directory.

3. Install the required dependencies using npm or yarn:

```bash
   npm install
   # or
   yarn install
```

# Contributing

Contributions are welcome! If you would like to contribute to the project, please open a pull request with your proposed changes.

# License

This project is licensed under the MIT License.
