var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene1",
      "name": "Scene1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2944,
      "initialViewParameters": {
        "yaw": 2.9371666203090507,
        "pitch": 0.219010997671516,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.167719971658153,
          "pitch": 0.055319125211113374,
          "rotation": 2.356194490192345,
          "target": "1-scene2"
        },
        {
          "yaw": 1.2596171132111404,
          "pitch": -0.021059459393711677,
          "rotation": 0,
          "target": "2-scene3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene2",
      "name": "Scene2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0.007981740944465798,
        "pitch": 0.3987637208142658,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.796104886301091,
          "pitch": 0.01651726476559645,
          "rotation": 0,
          "target": "0-scene1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene3",
      "name": "scene3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2944,
      "initialViewParameters": {
        "yaw": -2.1469409250930784,
        "pitch": -0.024008178434808514,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.9127592259712394,
          "pitch": 0.21762924377647686,
          "rotation": 0,
          "target": "0-scene1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "image-test-1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
