# Single-Page Group Chat Web Application
## Brief Description
    This is a single-page group chat web application with asynchronous Javascript and a REST API written in Python with Flask. 

## Functionality
    It lets users start new private chats that work like group texts or Slack rooms. A user creates a new chat, which is assigned a unique identifier. They can invite up to 5 other users by sharing a unique link that will authenticate the bearer to the chat. Users  in a chat post messages which appear in a single conversation thread to all users. Unlike Slack or a group chat, Watch Party only saves or shows the last 30 messages.

## Single-Page
    We serve a static HTML page and never redirect or reload. Instead, the page interacts purely with the JSON API. 
