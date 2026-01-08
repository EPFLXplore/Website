---
rover: "Phoenyx"
drone: "Bumblebee"
year: "2025"
heroImage: "team.jpg"
roverImage: "phoenyx.jpg"
droneImage: "7.jpg"
videoId: "OPM6HM0tbqo"
teamImage: "team_2.jpg"
show_drone: true
show_rover_model: true
show_techincal_section: true

results:
    - title: "1st Place Overall"
      text: "EPFL Xplore won the ERC 2025 for the first time in history!"
      gradient: "from-yellow-400 via-orange-400 to-red-400"

    - title: "Navigation Droning Excellency"
      text: "Special award for outstanding drone-assisted navigation."
      gradient: "from-blue-500 via-indigo-500 to-purple-600"

technical:
    - title: "Control Station"
      text: "This year, the Control Station was redesigned into a streamlined, web-based platform that centralizes activation, shutdown, and monitoring of all rover subsystems. Hosted on a Raspberry Pi at the Ground Station rather than onboard the rover, the system is easier to restart in case of errors and avoids duplicating heavy data streams across the wireless link. Multiple operators can connect simultaneously, and we successfully displayed eight camera feeds on three stations at under 60 Mbit/s. The architecture was simplified by removing Django and custom websockets: all communication now runs through rosbridge_suite and roslibjs, ensuring maintainability and performance. The interface was restructured into focused tabs—control, cameras, simulation, and logs—balancing visibility with usability. Gamepad support was made robust through a flexible binding system that normalizes inputs across hardware and browsers. Finally, a major new feature was added: direct Docker container control from the Control Station, enabling operators to start and stop rover subsystems dynamically, replacing fragile systemd boot scripts."
      image: "technics/cs.jpg"
      design: wide"

    - title: "Robustness in the Robotic Arm"
      text: "One of the key mechanical improvements this year concerns the robotic arm. It is an iterative development of the previous arm designed for the ERC2024 competition. The arm provides six degrees of freedom (DOF), allowing full motion within its working area. This year’s efforts focused on improving the arm’s performance in several areas: ease of assembly, structural rigidity, backlash mitigation, and actuation selection. The parts were redesigned to increase stiffness compared to the previous version, and the use of dowel pins ensured precise positioning. Standardising screw types simplified both assembly and maintenance, while extensive work was carried out to eliminate joint backlash. Replaceable bronze bushings were implemented to control backlash within the transmission stage, enabling zero backlash after assembly. A refined actuator selection increased joint speed by a factor of 3 to 10 while maintaining the same output torque required to perform for the ERC2025 competition."

      image: "technics/arm.jpg"
      design: "split"

    - title: "New Wheels"
      text: "The wheel design was also improved compared to the previous version. As the Rover’s first point of contact with the ground, it is the primary element responsible for reducing terrain-induced vibrations. These vibrations result from the uneven surfaces and various rock sizes present at the ERC competition. Deformable yet sufficiently rigid wheels are required to support the Rover’s weight and ensure robust performance. To achieve this, the wheels were 3D printed using bi-material printing technology, allowing two materials to be printed simultaneously. A rigid PETG rim was combined with a flexible TPU tire to provide both the stiffness and deformation properties necessary for the wheel’s function. The TPU tire features 16 thin, S-shaped blades that bend inward upon ground contact, enabling the wheel to adapt its shape according to the obstacles encountered. This continuous deformation allows the Rover to traverse various terrains while significantly reducing the vibrations transmitted to the Structure."

      image: "technics/wheels.jpg"
      design: "split"

    - title: "Autonomy in Navigation"
      text: "Over the past year, the Navigation Subsystem of our rover has undergone major improvements that brought it to a new level of reliability and precision. At the core of the system, we now fuse three complementary localization sources through a custom Extended Kalman Filter: wheel odometry from a double-Ackermann kinematic model, a new high-grade 9-axis OlixSense X1 IMU, and LiDAR-inertial odometry computed with the GPU-accelerated GLIM package. This combination greatly reduced drift and offloaded CPU resources, enabling smoother autonomous navigation. We also significantly reinforced our vision-based global localization. The system was expanded from two to seven synchronized cameras, increasing the likelihood of detecting ArUco tags distributed across the Mars Yard. A refined triangulation pipeline filters unstable measurements based on geometric dilution of precision, ensuring that only consistent corrections are integrated into the global pose estimate. Together with the improved IMU and LiDAR odometry, this allowed us to reach a remarkable accuracy of about 10 cm for each waypoint reached during testing. Manual and autonomous control modes were unified under a multiplexing system that dynamically switches between manual driving, double-Ackermann, and “Omni-Drive” motion strategies. Deadzone filtering and dynamic speed scaling increased safety and driver comfort. On the autonomous side, the Nav2 stack was optimized with terrain-aware costmaps, GPU-accelerated path planning (Smac Hybrid A*), and a Regulated Pure Pursuit controller that adapts speed and lookahead to obstacles in real time. Looking ahead, we are preparing further enhancements: integrating visual-inertial odometry sources such as NVIDIA Isaac ROS VSLAM, unifying the motion model, rewriting critical nodes in C++ for efficiency, adopting more robust triangulation algorithms, and increasing sensor update rates. These upgrades will make the rover’s navigation even more precise, efficient, and competition-ready."

      image: "technics/nav_phoenyx.jpg"
      design: "wide"

---