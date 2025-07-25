---
title: "Modular 6D Pose Estimation for Real-Time Rover Manipulation"
major: "Computer Science, Robotics, Data Science"
pole: "European Rover Challenge"
contact: "Arno Laurie (arno.laurie@epfl-xplore.ch)"
applyLink: "https://apply.example.com/yolov8"
---

# Motivation

EPFL Xplore is a student-led swiss robotics association, part of the MAKE Initiative at EPFL. It primary builds a
Martian-like Rover each year to compete in the European Rover Challenge (ERC) in Krakow, against other universities. The team is composed of around 50 students (management & engineering). In its rank, the software team
of EPFL Xplore is composed of navigation, robotic arm and control station teams, each one developing efficient
solutions to bring the Rover alive.


The ERC imposes autonomous manipulation of different objects, for example cables and rocks. This autonomous
processes always incorporate a 6D pose estimation to be able to first locate the object in a reference frame, and
then move our manipulator to grab it. The manipulator is a gripper located at the end of a 6-DoF custom robotic
arm.


EPFL Xplore has successfully been able to identify and grab rocks, switches, probes, but lacks of modularity.
We are actually using YoloV8 for enhacing our models. The computations that are done after to compute the
6D pose estimation is redundant in many systems. In addition, we are not sure our method is the best, and
improvements in terms of pose accuracy would not be a plus, but a huge help to increase the speed of detection
and selection by our gripper.

# Objectives

The goal of this project is to design, implement and validate a modular 6D pose-estimation pipeline that improves
both the accuracy and speed of object localization for our 6DOF robotic arm. This will enable faster, more reliable
autonomous manipulation during the ERC. To achieve this, the student will:

1. Analyze the current YOLOv8-based detection and downstream 6D pose estimation workflow to identify the
improvements that could be made.
2. Refactor the pipeline into modular components, separating the detection, feature extraction and pose solver,
so that each stage can be independently optimized or replaced.
3. Research and integrate at least one alternative 6D pose estimation method (e.g. ZebraPose) alongside the
existing approach.
4. Implement benchmark scripts to compare accuracy (pose error) across different methods on a representative
dataset.
5. Deliver a concise report summarizing the benchmarking results, optimizations applied, and recommended
default pipeline for integration into the Rover’s software stack.

# Requirements

EPFL Xplore is looking for a motivated student that wants to tackle real software challenges in a well-established
association, all working with the goal of learning new things. For this project, we are particularly interested in
someone with the following qualifications:

- Enrollment in a Bachelor’s or Master’s program in Engineering, Computer Science, Robotics or a related
field.
- Basic programming skills in Python (and/or C++) with an eagerness to write clean, modular code.
- Good knowledge with computer vision concepts (e.g. image filtering, feature detection) and deep-learning
frameworks (e.g. PyTorch, TensorFlow) for pose estimation.
- Comfortable using Linux and common command-line tools (e.g. bash, ssh, git).
- Interest in basic data analysis (e.g. using Python libraries like NumPy or pandas).
- Good problem-solving attitude, attention to detail, and ability to iterate on experimental setups.
- Strong attention to detail, good organizational skills and a hands-on mindset for running experiments.
- Ability to work both independently and collaboratively within a student team.

# Resources

- ZebraPose, Coarse to Fine Surface Encoding for 6DoF Object Pose Estimation: https://arxiv.org/abs/2203.09418