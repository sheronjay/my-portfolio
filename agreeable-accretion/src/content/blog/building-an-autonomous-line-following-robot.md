---
title: Building an Autonomous Line-Following Robot
excerpt: Designing a PID-controlled line follower using an ATmega328P microcontroller, with real-time sensor fusion and adaptive speed control - lessons learned from the University Robotics Competition.
publishDate: 2026-04-01
author: Sheron Jayasinghe
tags:
  - robotics
  - embedded
  - AVR
  - PID
---

The goal was simple on paper: build a robot that can hold a line at speed without oscillating itself off the track. In practice, most of the work was about tuning tradeoffs between sensing, control, and mechanical constraints.

## Hardware setup

I used an ATmega328P as the controller and an array of eight IR sensors to estimate the line position. The sensor array gave enough resolution to measure error continuously instead of treating the track like a set of binary left-or-right decisions.

The chassis was kept light, but not so light that wheel slip became the dominant problem. A Bluetooth link made it possible to adjust PID constants without reflashing the board on every test run.

## Control loop

The main loop sampled the sensors, computed a weighted line position, and fed the resulting error into a PID controller. The derivative term helped damp sudden corrections, while the integral term had to be limited carefully to avoid overshoot after tight turns.

I also reduced top speed dynamically when the measured error rose above a threshold. That kept the robot stable entering curves and let it accelerate again once the line estimate settled.

## What mattered most

- Consistent sensor calibration mattered more than aggressive controller tuning.
- Mechanical alignment errors showed up immediately as "control" issues.
- Live tuning shortened iteration time more than any other improvement in the stack.

The final system was not the most complicated robot in the competition, but it was predictable. That mattered more than chasing peak speed with a fragile control loop.
