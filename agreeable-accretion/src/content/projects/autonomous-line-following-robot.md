---
title: Autonomous Line-Following Robot
summary: A PID-controlled line-following robot built around an ATmega328P. Features real-time sensor fusion from 8 IR sensors, adaptive speed control, and a Bluetooth interface for live tuning of PID constants.
category: Engineering & Robotics
status: complete
order: 1
techStack:
  - C
  - AVR
  - ATmega328P
  - PID control
  - IR sensors
imgAlt: Line-following robot prototype
---

This project focused on stable autonomous navigation on a high-contrast race track. The system combined a lightweight chassis, an IR sensor array, and a PID controller tuned for fast correction without excessive oscillation.

## Highlights

- weighted sensor fusion for line position estimation
- adaptive speed control on curves
- Bluetooth-based live parameter tuning

## Outcome

The robot became a reliable platform for experimentation with embedded control loops, calibration routines, and competition-style iteration under time constraints.
