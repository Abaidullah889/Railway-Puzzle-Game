// DATA



//EasyMaps

const EasyMaps = [
    [
        [{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"},{name:"oasis"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"oasis"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180}],
        [{name:"bridge" , angle:0},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"mountain" , angle:90}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"oasis"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]

]

//EasyMapsResults

const EasyMapsResults = [

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "oasis"
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,
    [
        [
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "oasis"
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,
    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 180
            }
        ]
    ]
    ,
    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "mountain_curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "oasis"
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,
    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "oasis"
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
]


// HardMaps
const HardMaps = [


    [
        [{name:"empty"},{name:"mountain" , angle:90},{name:"oasis"},{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"mountain" , angle:270},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"oasis"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]

    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0}],
        [{name:"oasis"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"oasis"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"}]
        
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"bridge" , angle:90},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:270},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]
    ,
    [
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"mountain" , angle:0},{name:"empty"}],
        [{name:"empty"},{name:"bridge" , angle:90},{name:"bridge" , angle:90},{name:"empty"},{name:"mountain" , angle:90},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"mountain" , angle:0},{name:"empty"},{name:"oasis"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"mountain" , angle:180},{name:"empty"},{name:"bridge" , angle:0},{name:"empty"},{name:"empty"},{name:"empty"}],
        [{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"},{name:"empty"}]
    ]

]

// HardMapsResults
const HardMapsResults = 
[

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "oasis"
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 0
            }
        ],
        [
            {
                "name": "mountain_curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 0
            }
        ],
        [
            {
                "name": "oasis"
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "oasis"
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "oasis"
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
    ,

    [
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "mountain_curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "bridge_track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 180
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "mountain_curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "oasis"
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 90
            }
        ],
        [
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "mountain_curve",
                "angle": 180
            },
            {
                "name": "track",
                "angle": 0
            },
            {
                "name": "bridge_track",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 0
            },
            {
                "name": "curve",
                "angle": 90
            },
            {
                "name": "track",
                "angle": 0
            }
        ],
        [
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "track",
                "angle": 90
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            },
            {
                "name": "curve",
                "angle": 270
            },
            {
                "name": "curve",
                "angle": 180
            }
        ]
    ]
]




const Button_Rules = document.querySelector(".action-btn");
const Container_Menu = document.querySelector(".container");
const Container_Rules = document.querySelector(".rules-container");
const Button_Back = document.querySelector(".back-btn");
const Button_Start = document.querySelector(".start-btn");
const Button_LeaderBoard = document.querySelector("#Leaderboard");
const leaderboardContainer = document.querySelector('.leaderboard-container');
const leaderboardList = document.querySelector('.leaderboard-list');

const Container_Game = document.querySelector(".game-screen");

const Easy_Button = document.querySelector("#easy-btn");
const Hard_Button = document.querySelector("#hard-btn");
const usernameInput = document.getElementById('username');
const Grid = document.querySelector(".grid");
const winScreen = document.querySelector('.win-screen');


const divRouteDesigner = document.querySelector(".designer-name");
const PlayAgain_Button = document.querySelector('.playagain-btn');
const Restart_Button = document.querySelector('.restart-btn');
const leaderboardBack_Button = document.querySelector('#leaderboard-back-btn');



let difficultySelected = false;
let difficulty = "";
let mapNumber = randomly(0,4);
let usernameFilled = false;
let routeDesigner = "";
let current_Map = null;
let startButtonClicked = false;
let resetButtonClicked = false;

/////////////////////////////////////////////////////////////////Time////////////////////////////////////////

let elapsedSeconds = 0; // in seconds
let timerInterval = null;



/////////////////////////////// Placement /////////////////////////////////////////



// Track the currently selected palette item
let selectedPaletteItem = null;
let selectedPaletteItemAngle = null;



////////////////////////////////////////////////////////////////////////////////////




// Functionality




//////////////////////////////////Placement///////////////////////////////////////





// Add event listeners to each palette item
document.querySelectorAll('.palette-item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove the 'selected' class from all items first
        document.querySelectorAll('.palette-item').forEach(el => el.classList.remove('selected'));
        
        // Add the 'selected' class to the clicked item
        item.classList.add('selected');
        
        // Set the selected item type based on the data-type attribute
        selectedPaletteItem = item.getAttribute('data-type');

        if(selectedPaletteItem === "track" || selectedPaletteItem === "bridge" || selectedPaletteItem === "curve" )
        {
            console.log("here");
            selectedPaletteItemAngle = parseInt(item.getAttribute('id'));
            console.log(selectedPaletteItemAngle);
        }

    });
});



Grid.addEventListener('click', function (e) 
{
    const target = e.target.closest("td");
    // Make sure the clicked element is a cell
    if (target && selectedPaletteItem) 
    {
        //console.log(e);
        const row = e.target.closest("tr").getAttribute("id");
        const col = e.target.closest("td").getAttribute("id");

        //console.log(row);
        //console.log(col);
        //console.log(selectedPaletteItem);

        // Create a new image element based on the selected palette item
        switch (current_Map[row][col].name) 
        {
            case "empty":
                if(selectedPaletteItem =="track")
                {
                    current_Map[row][col].name = selectedPaletteItem;
                    current_Map[row][col].angle = selectedPaletteItemAngle;
                }
                if(selectedPaletteItem == "curve")
                {
                    current_Map[row][col].name = selectedPaletteItem;
                    current_Map[row][col].angle = selectedPaletteItemAngle;
                }
                break;
            case "bridge":
                if(selectedPaletteItem == "bridge_track")
                {
                    current_Map[row][col].name = selectedPaletteItem;
                }
                break;
            case "mountain":
                if(selectedPaletteItem == "mountain_curve")
                {
                    current_Map[row][col].name = selectedPaletteItem;
                }
                break;
            case "track":
                current_Map[row][col].angle =  current_Map[row][col].angle==0 ? 90 : 0;
                break;
            case "curve":
                let angle = current_Map[row][col].angle += 90;
                angle = angle % 360;
                console.log(angle);
                current_Map[row][col].angle = angle;
                break;
            default:
                console.log("Invalid palette item selected");
                return;
        }
    }

    render(current_Map);
    saveGameState();

    if(difficulty === "easy")
    {
        if(isWin(EasyMapsResults[mapNumber],current_Map))
        {
            stopTimer();
            displayWinScreen();
            addWinner(routeDesigner,elapsedSeconds);
            console.log("wins");
            
        }

    }
    else
    {
        if(isWin(HardMapsResults[mapNumber],current_Map))
        {
            stopTimer();
            displayWinScreen();
            addWinner(routeDesigner,elapsedSeconds);
    
        }

    }

    

});

Grid.addEventListener('contextmenu',function(e)
{
    if(e.target.closest("td"))
    {
        e.preventDefault();
        const row = e.target.closest("tr").getAttribute("id");
        const col = e.target.closest("td").getAttribute("id");

        switch (current_Map[row][col].name)
        {
            case "track":
                if(difficulty ==="easy")
                {
                    current_Map[row][col] = JSON.parse(JSON.stringify(EasyMaps[mapNumber][row][col]));

                }
                else
                {
                    current_Map[row][col] = JSON.parse(JSON.stringify(HardMaps[mapNumber][row][col]));
                }
                break;
            case "curve":
                if(difficulty ==="easy")
                    {
                        current_Map[row][col] = JSON.parse(JSON.stringify(EasyMaps[mapNumber][row][col]));
    
                    }
                    else
                    {
                        current_Map[row][col] = JSON.parse(JSON.stringify(HardMaps[mapNumber][row][col]));
                    }
                break;
        }

        render(current_Map);
        saveGameState();
    }

});

////////////////////////////////////////////////////////


leaderboardBack_Button.addEventListener('click',function(){
    leaderboardContainer.classList.add('hidden');
    Container_Menu.classList.remove("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.add("hidden");

})

Button_LeaderBoard.addEventListener('click',function() {

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboardList.innerHTML = '';

    leaderboard.forEach((entry,index) => {

        const listItem = document.createElement('li');

        // Create leaderboard rank element
        const rankSpan = document.createElement('span');
        rankSpan.classList.add('leaderboard-rank');
        rankSpan.textContent = `#${index + 1}`;

        // Create leaderboard name element
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('leaderboard-name');
        nameSpan.textContent = entry.name;

        // Create leaderboard time element
        const timeSpan = document.createElement('span');
        timeSpan.classList.add('leaderboard-time');

        const time = entry.time;

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Format time as MM:SS (leading zero for seconds if needed)
        const ftime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        timeSpan.textContent = ftime;


        // Append rank, name, and time to the list item
        listItem.appendChild(rankSpan);
        listItem.appendChild(nameSpan);
        listItem.appendChild(timeSpan);

        leaderboardList.appendChild(listItem);
    });

    leaderboardContainer.classList.remove('hidden');
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.add("hidden");



});


Restart_Button.addEventListener('click', function() {
    resetButtonClicked = true;
    saveGameState();
    resetGame();

});


PlayAgain_Button.addEventListener('click', function() {
    winScreen.classList.add('hidden');
    // Reset the game or reload the page to start over
    resetGame(); // You can define your own resetGame function
});


Button_Rules.addEventListener("click",function(e)
{
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.remove("hidden");
})

Button_Back.addEventListener("click",function(e)
{
    Container_Rules.classList.add("hidden");
    Container_Menu.classList.remove("hidden");
})

Button_Start.addEventListener("click",function(e)
{
    Container_Menu.classList.add("hidden");
    Container_Rules.classList.add("hidden");
    Container_Game.classList.remove("hidden");
    //console.log(mapNumber);
    startButtonClicked = true;
    if(difficulty === "easy")
    {
        current_Map=JSON.parse(JSON.stringify(EasyMaps[mapNumber]));
    }
    else
    {
        current_Map=JSON.parse(JSON.stringify(HardMaps[mapNumber]));
    }

    //current_Map = EasyMapsResult3;
    divRouteDesigner.textContent = routeDesigner;
    render(current_Map);
    saveGameState();
    startTimer();
    
})

// Check if the username field is filled
usernameInput.addEventListener('input', function () {
    usernameFilled = usernameInput.value.trim() !== '';
    if(usernameFilled)
    {
        routeDesigner = usernameInput.value;
    }
    saveGameState();
    checkFormValidity();

});

Easy_Button.addEventListener('click', function () {
    difficultySelected = true;
    difficulty = "easy";
    Easy_Button.classList.add('selected');
    Hard_Button.classList.remove('selected');
    checkFormValidity();
    saveGameState();
});

Hard_Button.addEventListener('click', function () {
    difficultySelected = true;
    difficulty = "hard";
    Hard_Button.classList.add('selected');
    Easy_Button.classList.remove('selected');
    checkFormValidity();
    saveGameState();
});


function giveTile(obj)
{
    const image = document.createElement("img");

    switch(obj.name)
    {
        case "empty":
            image.src="empty.png";
            image.alt="empty";
            break;
        case "mountain":
            image.src="mountain.png";
            image.alt="mountain";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "bridge":
            image.src="bridge.png";
            image.alt="bridge";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "oasis":
            image.src="oasis.png";
            image.alt="oasis";
            break;
        case "track":
            image.src="straight_rail.png";
            image.alt="straight_rail";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }

            break;
        case "bridge_track":
            image.src="bridge_rail.png";
            image.alt="bridge_rail";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "mountain_curve":
            image.src="mountain_rail.png";
            image.alt="mountain_rail";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;
        case "curve":
            image.src="curve_rail.png";
            image.alt="curve_rail";
            if (obj.angle !== undefined) { // Ensure angle exists
                image.style.transform = `rotate(${obj.angle}deg)`;
            }
            break;




        default:
            console.log("Invalid name tag");
        
    }

    return image;
}

function render(map)
{
    console.log("Current Map : ",current_Map);
    saveGameState();
    //console.log("EasyMap : " , EasyMapsResult3);
    Grid.innerHTML="";
    for(let i=0;i<map.length;i++)
    {
        const tr = document.createElement('tr');
        for(let j=0;j<map[i].length;j++)
        {
            const td = document.createElement('td');
           td.classList.add("cell");
           const tileImage = giveTile(map[i][j]);
           td.appendChild(tileImage)
           td.setAttribute("id", j);      
           tr.appendChild(td);
        }
        tr.setAttribute("id", i);
        Grid.appendChild(tr);
    }

}

function checkFormValidity() 
{

    if (difficultySelected && usernameFilled) {
        Button_Start.disabled = false;
    } else {
        Button_Start.disabled = true;
    }
}


function randomly(a,b)
{
  return Math.floor(Math.random()*(b-a+1)+a);
}

function isWin(resultMap, currMap) {
    // Check if both arrays are of the same length

    if (resultMap.length !== currMap.length) {
        return false;
    }

    // Compare each row (sub-array) in both arrays
    for (let i = 0; i < resultMap.length; i++) {
        if (resultMap[i].length !== currMap[i].length) {
            return false; // If rows are not the same length
        }

        // Compare each element in the row
        for (let j = 0; j < resultMap[i].length; j++) {
            // Check if the objects or values are the same
            if (resultMap[i][j].name === currMap[i][j].name) 
            {
                if(current_Map.angle !== null)
                {
                    if(resultMap[i][j].angle !== currMap[i][j].angle)
                        return false; // If any element doesn't match
                }
            }
            else
            {
                return false;
            }

        }
    }

    // If all elements match, return true
    return true;
}

function displayWinScreen() {

    winScreen.classList.remove('hidden');
    startAnimations();
    
}

function resetGame() {

    localStorage.removeItem('gameState');
    // Reset difficulty-related variables
    difficultySelected = false;
    difficulty = "";
    mapNumber = randomly(0, 4);
    usernameFilled = false;
    routeDesigner = "";
    current_Map = null;
    elapsedSeconds = 0;
    startButtonClicked = false;
    stopTimer();
    

    // Clear username input
    usernameInput.value = "";

    // Reset the difficulty button styles
    Easy_Button.classList.remove('selected');
    Hard_Button.classList.remove('selected');

    // Disable the start button until both conditions are met
    Button_Start.disabled = true;

    // Hide game screen and win screen
    Container_Game.classList.add('hidden');
    winScreen.classList.add('hidden');

    // Show the main menu screen
    Container_Menu.classList.remove('hidden');
    document.querySelector('.elapsed-time').textContent = '00:00';
    localStorage.removeItem('gameState'); 
}

// Function to start rocket and firework animations
function startAnimations() {
    const rockets = document.querySelectorAll('.rocket');
    const fireworks = document.querySelectorAll('.firework');

    stopTimer();

    // Animate rockets and fireworks with randomized timings for variety
    rockets.forEach((rocket, index) => {
        rocket.style.animationPlayState = 'running';
        rocket.style.animationDelay = `${Math.random() * 1.5}s`;
    });

    fireworks.forEach((firework, index) => {
        firework.style.animationPlayState = 'running';
        firework.style.animationDelay = `${index * 0.7 + Math.random()}s`;
    });
}


function saveGameState() {
    const gameState = 
    {
        difficultySelected: difficultySelected,
        difficulty: difficulty,
        mapNumber: mapNumber,
        usernameFilled: usernameFilled,
        routeDesigner: routeDesigner,
        current_Map: current_Map,
        selectedPaletteItem: selectedPaletteItem,
        selectedPaletteItemAngle: selectedPaletteItemAngle,
        elapsedSeconds: elapsedSeconds,
        startButtonClicked:startButtonClicked,
        resetButtonClicked:resetButtonClicked
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));


}

function loadGameState() {
    // Get the saved game state from localStorage
    const savedState = localStorage.getItem('gameState');
    const gameState = JSON.parse(savedState);
    console.log("here");

    if (gameState && !gameState.resetButtonClicked) {
        console.log("there");
        // Parse the saved state back into an object
        

        // Restore the game's state using the loaded data
        difficultySelected = gameState.difficultySelected;
        difficulty = gameState.difficulty;
        mapNumber = gameState.mapNumber;
        usernameFilled = gameState.usernameFilled;
        routeDesigner = gameState.routeDesigner;
        current_Map = gameState.current_Map;
        selectedPaletteItem = gameState.selectedPaletteItem;
        selectedPaletteItemAngle = gameState.selectedPaletteItemAngle;
        elapsedSeconds = gameState.elapsedSeconds || 0;
        startButtonClicked = gameState.startButtonClicked;


        // Restore the username and difficulty on the UI
        usernameInput.value = routeDesigner;
        if (difficulty === "easy") {
            Easy_Button.classList.add('selected');
        } else if (difficulty === "hard") {
            Hard_Button.classList.add('selected');
        }
        divRouteDesigner.textContent = routeDesigner;
        // If both username and difficulty are set, enable the start button
        checkFormValidity();

        // Render the restored map on the grid
        if(startButtonClicked === true)
        {
            console.log("here I am");
            Container_Menu.classList.add('hidden');
            Container_Rules.classList.add('hidden');
            Container_Game.classList.remove('hidden');
            render(current_Map);
            startTimer();

            if(difficulty === "easy")
                {
                    if(isWin(EasyMapsResults[mapNumber],current_Map))
                    {
                        stopTimer();
                        displayWinScreen();
                        console.log("wins");
                        
                    }
            
                }
                else
                {
                    if(isWin(HardMapsResults[mapNumber],current_Map))
                    {
                        stopTimer();
                        displayWinScreen();
                
                    }
            
                }
    
             // Show the game screen since the state has been restored
    
        } 
        else 
        {
            // If no saved state is found, show the main menu
            
            
            resetGame();
        }

    }

}


function startTimer() 
{
    const timeDisplay = document.querySelector('.elapsed-time');

    if(timerInterval)
    {
        clearInterval(timerInterval);
    }
    
    // Use setInterval to update every second (1000ms)
    timerInterval = setInterval(() => {
        elapsedSeconds++;

        // Calculate minutes and seconds
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        // Format time as MM:SS (leading zero for seconds if needed)
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Update the display
        timeDisplay.textContent = formattedTime;
        console.log(elapsedSeconds);
        saveGameState();

    }, 1000); // 1 second interval
} 

function stopTimer() {
    clearInterval(timerInterval);
}

function addWinner(winnerName , time){

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: winnerName, time: time});
    leaderboard.sort((a,b) => a.time - b.time);

    if(leaderboard.length > 5)
    {
        leaderboard = leaderboard.slice(0,5);
    }
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}


//
loadGameState();