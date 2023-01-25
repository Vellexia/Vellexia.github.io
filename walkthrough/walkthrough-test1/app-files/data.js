var APP_DATA = {
  "scenes": [
    {
      "id": "0-friends-house",
      "name": "Friends House",
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
        "yaw": 2.936994808597264,
        "pitch": 0.0989057145935206,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.2042587041134993,
          "pitch": 0.026169524950248046,
          "rotation": 2.356194490192345,
          "target": "1-crafting-in-workshop"
        },
        {
          "yaw": 1.220801942385613,
          "pitch": 0.04486706508100724,
          "rotation": 0,
          "target": "2-thanalan-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-crafting-in-workshop",
      "name": "Crafting in Workshop",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9456056223882907,
          "pitch": 0.2697465664407659,
          "rotation": 0,
          "target": "0-friends-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-thanalan-night",
      "name": "Thanalan Night",
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
        "yaw": -2.1746851692029345,
        "pitch": 0.13694637405256316,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.9231140684084025,
          "pitch": -0.12403938171320128,
          "rotation": 0,
          "target": "0-friends-house"
        },
        {
          "yaw": -0.0036375300871078764,
          "pitch": -0.16512201005986427,
          "rotation": 0,
          "target": "3-sleepy-time"
        },
        {
          "yaw": 0.767609678256111,
          "pitch": -0.1522907279162844,
          "rotation": 0,
          "target": "4-clubbing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sleepy-time",
      "name": "Sleepy Time",
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
        "yaw": 0.1193183519263421,
        "pitch": 0.2649096868778251,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.993013724554878,
          "pitch": 0.08530471907016235,
          "rotation": 0,
          "target": "2-thanalan-night"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-clubbing",
      "name": "Clubbing",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0501614368494607,
          "pitch": -0.048852495441774835,
          "rotation": 0,
          "target": "2-thanalan-night"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Walkthrough Test1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
