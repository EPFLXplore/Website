---
rover: "Kerby"
drone: ""
year: "2023"
heroImage: "team.jpg"
roverImage: "kerby.jpg"
droneImage: ""
videoId: "IFt732b9MKc"
teamImage: "team_2.jpg"
show_drone: false
show_rover_model: false
show_techincal_section: true

results:
    - title: "🥉 3rd Place Overall"
      text: "EPFL Xplore 2023 ends its journey with a podium for the third time"
      gradient: "from-yellow-400 via-orange-400 to-red-400"

    - title: "Maintenance Excellency"
      text: "Special award Maintenance Task, achieved with its new Robotic Arm"
      gradient: "from-blue-500 via-indigo-500 to-purple-600"

technical:
    - title: "Upgrading from ROS1 to ROS2"
      text: "During its first 2 years, the rovers’ code stack was entirely built over ROS. However, with increasing reminders of ROS reaching its end-of-life in 2025, the association made the decision to start to transition to ROS 2 as soon as possible. This was done to avoid building more unmaintainable legacy code, and ensure we stay on top of new technologies. After a complicated year upgrading our stack, finding ROS 2 equivalents of previous packages, and even upgrading certain open source packages manually without waiting for original authors’ updates, we built the ROS 2 foundation which contributed to our 3rd place and on which future Xplore teams continue developing."

      image: "technics/ros2.jpg"
      design: split"

    - title: "Modular and redundant Electronics System"
      text: "Kerby's electronics uses multiple nodes, all of which can communicate in a plug-and-play manner with multiple sensors. All nodes share the same firmware and automatically detect and configure a sensor when connected and up to 3 sensor can be connected to a single node. A redundant CAN-FD bus is used for all sensors (which is also often used in real space missions) to ensure no single point of failure. A custom CLI (Command Line Interface) has also been developed for monitoring, calibration, profiling and debugging. All sensor parameters (e.g. calibration) can also be changed on the fly and are saved on the OBC (Jetson Xavier). Additionally, the board is powered by a custom module providing over/undervoltage, short-circuit and reverse-input protection."


      image: "technics/orion_2.jpg"
      design: "hero"
---