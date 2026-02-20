# Практична робота 12.2: W3C WoT Thing Description Generator

# 1. WoT Architecture Diagram
Проект реалізує архітектуру Web of Things, де OpenHAB виступає як Servient, що експонує опис пристрою (Thing Description) через HTTP API.


```mermaid
graph TD
    subgraph "OpenHAB Servient"
    A[OpenHAB Items + Metadata] --> B{JS Transformation}
    B --> C[Thing Description JSON-LD]
    end
    C --> D[HTTP REST Endpoint]
    D --> E[WoT Consumer / Directory]
