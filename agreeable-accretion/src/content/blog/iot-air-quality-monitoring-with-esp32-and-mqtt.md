---
title: IoT Air Quality Monitoring with ESP32 and MQTT
excerpt: How I built a distributed air quality monitoring network across the UoM campus using ESP32 nodes, MQ-135 sensors, an MQTT broker, and a Grafana dashboard - all on a near-zero budget.
publishDate: 2026-03-01
author: Sheron Jayasinghe
tags:
  - IoT
  - ESP32
  - MQTT
  - sensors
---

This project started as an attempt to measure environmental conditions cheaply enough that deployment across several locations was still realistic. The design objective was not laboratory accuracy. It was useful trend visibility at low cost.

## Network design

Each node used an ESP32 to collect readings from the sensor package and publish them over MQTT. MQTT was a good fit because the payloads were small, the delivery model was simple, and it made the backend easy to extend later.

Six nodes were placed at different points around campus. A central broker received readings and pushed them into time-series storage for later visualization.

## Dashboard pipeline

InfluxDB stored the measurements, while Grafana handled visualization. That combination made it easy to compare readings by location, time window, and sensor type without building a custom dashboard from scratch.

The most useful views were:

- rolling averages for noisy gas-sensor data
- side-by-side comparisons between locations
- alert thresholds for sustained spikes rather than single samples

## Lessons learned

Low-cost sensors drift, and that drift becomes obvious once you compare multiple nodes over time. Calibration and enclosure design ended up being as important as firmware quality.

Even with those limitations, the system produced data that was actionable enough to reason about patterns in ventilation, occupancy, and time-of-day variation.
