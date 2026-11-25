---
rover: "Polaris"
drone: "Nox"
year: "2026"
heroImage: "team.jpg"
roverImage: "polaris.jpg"
droneImage: "7.png"
videoId: "D9VdHIfbMV8"
teamImage: "team_2.jpg"
show_drone: false
show_rover_model: true
show_techincal_section: true

results:
    - title: "1st Place Overall"
      text: "EPFL Xplore won the ERC 2026, completing the back 2 back!"
      gradient: "from-yellow-400 via-orange-400 to-red-400"

    - title: "Navigation Droning Excellency"
      text: "Special award for outstanding drone-assisted navigation."
      gradient: "from-blue-500 via-indigo-500 to-purple-600"

    - title: "Honda Innovation Award, 2nd place"
      text: "Special award to recognize innovative engineering solutions helping towards mission performance."
      gradient: "from-emerald-400 via-teal-500 to-cyan-500"

technical:
    - title: "Tool Changer"
      text: "One of the key mechanical improvements this year is the tool changer. During ERC 2025 with our rover Phoenyx, we encountered issues during the sampling task: the arm’s gripper, fitted with a clamshell extension for surface sand collection, lacked the torque needed to gather samples. This was mainly because the gripper was designed to grab rocks rather than scoop sand, even with the extension. To solve this, we implemented a tool changer this year: a simple, spring-loaded system that enables the arm to mechanically swap its end effector autonomously during the task. With this new feature, the rover can smoothly switch from the rock-grabbing gripper to a dedicated clamshell, allowing it to collect sand samples effectively."

      image: "technics/tool_changer.png"
      design: "split"

    - title: "Service Module"
      text: "To use the tool changer, we needed a larger storage compartment for both the gripper and the clamshell. This is one of the reasons we replaced the old service module, previously built with aluminium profiles, with a welded aluminium sheet structure. This redesign enabled us to significantly reduce the module’s mass and increase its storage volume, while keeping the same footprint as last year. We also used this storage area to hold the sand and rock samples, whose mass was measured with a load cell."

      image: "technics/service_module.png"
      design: "split"

    - title: "Drill"
      text: "Finally, we made a major improvement to the drill. Last year during ERC 2025, the drill lacked sufficient torque and was unable to collect any sand from the ground. By integrating a new gear train, we multiplied the output torque by 30, allowing us to reach a sampling depth of 35 cm during the competition. With all these improvements, we scored almost full points on the sampling task, thanks to both the upgraded drill and the tool changer."

      image: "technics/drill.png"
      design: "split"

---