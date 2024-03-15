# Web Socket Server

## Overview

This Web Socket Server application allows multiple clients to connect and communicate with each other over a network using the telnet protocol. The server is built with Node.js, and it manages client connections, relaying messages between clients, and handling errors gracefully.

## How to Run

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/krishnaja-08/chat-app.git
    ```

2. Navigate to the project directory:

    ```
    cd chat-app
    ```

3. Start the server:

    ```
    node index.js
    ```

4. Clients can connect to the server using telnet:

    ```
    telnet <server_ip> <port>
    ```

## Architecture and Concurrency Handling

The server application is built using Node.js's `net` module, which provides a simple TCP-based networking API. When a client connects, the server creates a new socket for communication. Each client connection is handled in a separate event-driven manner, allowing multiple clients to interact with the server concurrently.

Concurrency is handled through event-driven programming and asynchronous I/O operations provided by Node.js. Each client connection is managed independently, and incoming data from clients is processed asynchronously, ensuring that the server remains responsive to multiple clients simultaneously.

## Assumptions and Design Choices

- **Telnet Protocol**: The application assumes that clients will connect using the telnet protocol. Telnet is a simple text-based communication protocol widely supported by various terminal emulation programs and operating systems.

- **Error Handling**: Error handling is implemented to gracefully handle errors such as client disconnections, socket errors, and other unexpected issues. Error messages are logged to the console for debugging purposes.

- **Simplicity**: The server application is designed to be simple and lightweight, focusing on core functionality such as handling client connections and relaying messages. Advanced features such as authentication, encryption, or user management are not implemented to keep the codebase clean and easy to understand.

## Accessing the Chat Application

Once the server is deployed and running, clients can access the chat application using telnet by providing the server's IP address and port number. For example:

```
telnet 127.0.0.1 3000
```

Clients can then interact with the chat server by sending and receiving messages in the telnet terminal.
