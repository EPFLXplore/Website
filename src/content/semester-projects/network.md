---
title: "Evaluating and Optimizing Rover–Control Station Wireless Links"
major: "Communication Systems, Computer Science"
pole: "European Rover Challenge"
contact: "Arno Laurie (arno.laurie@epfl-xplore.ch)"
applyLink: ""
---

# Motivation

Martian-like Rover each year to compete in the European Rover Challenge (ERC) in Krakow, against other univer-
sities. The team is composed of around 50 students (management & engineering). In its rank, the software team
of EPFL Xplore is composed of navigation, robotic arm and control station teams, each one developing efficient
solutions to bring the Rover alive.

The ERC imposes a remote control of the Rover using a Control Station (CS). Antennas on the Rover trans-
mit the state of the Rover to the CS, and ground antennas transmit commands to the Rover. To comply with the
european rules, only a few wireless communication systems are available, but the range required by the competition
is around 100 meters.

EPFL Xplore is actually using Wi-Fi 5GHz with 2 modules Mikrotik Netmetal Ax, each using 2 HGO-ANTENNA-
OUT 7dbi antennas. Wi-Fi has been selected because of the message-passing system used internally to the Rover:
ROS2 (Robot Operating System 2). The module of the Rover is the access point and creates a bridge with the
other module to have a peer-to-peer communication between the ground team and the Rover. The LAN of the
Rover is managed by ethernet communication over a 8 1Gbit/s-ports ethernet HUB, which is connected directly
to the Rover module. The competition imposes a specific Wi-Fi channel during each task, which can be set using
RouterOS, the operating system running on each module. The majority of the data passing through the WLAN is
the feed of our cameras that are displayed at the CS. Many communication issues happened during the past few
years. Limited data rate, connection problems and latency are just a few. While testing a communication system
and simulate it in a similar environment than the competition is difficult, EPFL Xplore has to evaluate its network
performance (LAN and WLAN).

Here is a list of our main concerns with our actual setup:
- No detection and clear vision on network congestion.
- No real strategies and solutions when communication issues arise.
- No network simulation setup (testbench, simulator).
- No evaluation and comparison of the network performance with other communication systems.

# Objectives

The goal of the project is to evaluate the current Rover–CS communication setup, identify its limitations under
ERC-like conditions, and propose robust improvements. More specifically, the student will:

1. Characterize the existing network by measuring throughput, latency, packet loss and congestion under various
ranges and traffic loads (camera feeds, telemetry, control commands).
2. Design and build a testbench, both physical (using Mikrotik modules and a configurable LAN/WLAN lab
setup) and simulated (using e.g. ns-3 or Mininet), to reproduce ERC-style wireless constraints and channel
assignments.
3. Evaluate alternative communication technologies (e.g. different Wi-Fi standards, sub-GHz radios, directional
antennas)
4. Propose and validate a final communication architecture, backed by quantitative results, configuration scripts
(RouterOS), and best-practice guidelines for on-site deployment during ERC.

# Requirements

EPFL Xplore is looking for a motivated student that wants to tackle real software challenges in a well-established
association, all working with the goal of learning new things. For this project, we are particularly interested in
someone with the following qualifications:

- Enrollment in a Bachelor’s or Master’s program in Engineering, Computer Science, Robotics or a related
field.
- Basic understanding of computer networks (OSI layers, throughput, latency) and wireless concepts (Wi-Fi
channels, signal strength).
- Comfortable using Linux and command-line tools (e.g. iperf).
- Experience with a scripting or programming language (Python, Bash, MATLAB) for simple data collection
and analysis.
- Willingness to learn to set up a hardware testbench and/or network simulator (e.g. ns-3, Mininet).
- Strong attention to detail, good organizational skills and a hands-on mindset for running experiments.
- Effective verbal and written communication skills for presenting results.
- Ability to work both independently and collaboratively within a student team.