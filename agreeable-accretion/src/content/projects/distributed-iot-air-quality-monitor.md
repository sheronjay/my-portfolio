---
title: Distributed IoT Air Quality Monitor
summary: A campus-wide air quality monitoring network using 6 ESP32 nodes with MQ-135, DHT22, and PM2.5 sensors. Data is published over MQTT, stored in InfluxDB, and visualised in real-time via a Grafana dashboard.
category: Engineering & Robotics
status: complete
order: 2
techStack:
  - C++
  - ESP32
  - MQTT
  - InfluxDB
  - Grafana
imgAlt: IoT air quality node on breadboard
---

I designed this system as a low-cost sensor network that could be deployed across multiple campus locations without relying on expensive hardware or a managed cloud stack.

## Architecture

- ESP32-based sensor nodes for local sampling
- MQTT for lightweight message delivery
- InfluxDB for time-series storage
- Grafana for real-time dashboards

## Outcome

The project produced useful trend data while also serving as a practical exercise in distributed embedded systems, observability, and low-budget deployment design.
