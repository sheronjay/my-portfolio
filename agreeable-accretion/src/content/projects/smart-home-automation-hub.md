---
title: Smart Home Automation Hub
summary: A local-first smart home controller running on a Raspberry Pi 4. Integrates Z-Wave, Zigbee, and Wi-Fi devices through a unified API, with a web dashboard and voice command support via Whisper.
category: Software & Web
status: wip
order: 2
techStack:
  - Python
  - FastAPI
  - Raspberry Pi
  - Zigbee
  - SQLite
imgAlt: Smart home hub prototype
---

This is an ongoing attempt to build a home automation stack that remains useful even when cloud integrations are unavailable.

## Current direction

- unify multiple device protocols behind one API
- keep automation rules local to the hub
- expose a web dashboard for configuration and monitoring

## Why it matters

The project is a good test bed for systems integration, local-first design, and practical service orchestration on constrained hardware.
