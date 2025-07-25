---
title: "Comparative Analysis of MoveIt Planners on a 6-DoF Robotic Arm"
major: "Computer Science, Robotics"
pole: "European Rover Challenge"
contact: "Arno Laurie (arno.laurie@epfl-xplore.ch)"
applyLink: "https://apply.example.com/moveit"
---

# Motivation

EPFL Xplore is a student-led swiss robotics association, part of the MAKE Initiative at EPFL. It primary builds a
Martian-like Rover each year to compete in the European Rover Challenge (ERC) in Krakow, against other univer-
sities. The team is composed of around 50 students (management & engineering). In its rank, the software team
of EPFL Xplore is composed of navigation, robotic arm and control station teams, each one developing efficient
solutions to bring the Rover alive.

The Rover is composed of a 6-DoF robotic arm communicating over EtherCAT using 3-axis Maxon controllers. To
manipulate objects and perform autonomous trajectories, EPFL Xplore uses the MoveIt path planner framework,
widely maintained and used in industry for complex autonomous tasks, implementing many inverse kinematics
frameworks and providing C++ APIs. MoveIt allows the developer to choose from a variety of planners, each with
its own strengths and trade-offs. Selecting the optimal planner for our 6DOF arm therefore requires a systematic
benchmarking process, comparing metrics such as path smoothness, computation time, collision-avoidance reliabil-
ity, and real-time responsiveness under representative payloads and motion profiles. By rigorously evaluating and
tuning these planners in both simulation and on the physical hardware, we can ensure that the chosen algorithm
delivers the fastest, safest, and most predictable trajectories for our Rover’s manipulation tasks.

Today, EPFL Xplore uses the default planner and inverse kinematics solver from MoveIt, limiting our performance.

# Objectives

he goal of this project is to systematically benchmark, tune and validate different MoveIt motion planners (and
inverse-kinematics solvers) for our 6DOF robotic arm, and then integrate the best-performing solution into the
Rover’s control pipeline. To achieve this, the student will:

1. Survey the available MoveIt planners and IK solvers, and select a representative subset for testing.
2. Build a reproducible benchmarking environment in Gazebo (and/or a simple custom simulator) that mimics
the physical arm’s kinematics and payload, and define quantitative metrics (path smoothness, computation
time, collision-avoidance reliability).
3. Analyze the collected data to identify the planner(s) offering the best trade-off between speed, safety and
reproducibility.
4. Validate the top candidate in the physical testbench with the real arm, measure any performance gaps, and
adjust planner parameters as needed.
5. Deliver a set of configuration files, sample launch scripts, and a concise report with recommendations for the
Rover software team’s final integration.

# Requirements

EPFL Xplore is looking for a motivated student that wants to tackle real software challenges in a well-established
association, all working with the goal of learning new things. For this project, we are particularly interested in
someone with the following qualifications:
- Enrollment in a Bachelor’s or Master’s program in Robotics, Computer Science, Engineering or a related
field.
- Basic familiarity with ROS2 and MoveIt.
- Good programming experience in C++.
- Comfortable using Linux command line
- Elementary understanding of kinematics concepts and performance metrics (time, smoothness).
- Good analytical mindset, attention to detail, and the ability to communicate results clearly.
- Clear written & verbal communication skills, ready to document your design decisions.
- Ability to work both independently and collaboratively within a student team.