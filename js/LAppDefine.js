var LAppDefine = {


    //DEBUG_LOG : true,
    //DEBUG_MOUSE_LOG : false, 
    // DEBUG_DRAW_HIT_AREA : false, 
    // DEBUG_DRAW_ALPHA_MODEL : false, 



    VIEW_MAX_SCALE: 2,
    VIEW_MIN_SCALE: 0.1,

    VIEW_LOGICAL_LEFT: -1,
    VIEW_LOGICAL_RIGHT: 1,

    VIEW_LOGICAL_MAX_LEFT: -2,
    VIEW_LOGICAL_MAX_RIGHT: 2,
    VIEW_LOGICAL_MAX_BOTTOM: -2,
    VIEW_LOGICAL_MAX_TOP: 2,


    PRIORITY_NONE: 0,
    PRIORITY_IDLE: 1,
    PRIORITY_NORMAL: 2,
    PRIORITY_FORCE: 3,


    BACK_IMAGE_NAME: "22.1024/closet.default/texture_03.png",


    MODEL_22: {
        type: "Live2D Model Setting",
        name: "22",
        model: "22.moc",
        modelHomeDir: "plugins/live2d_22/assets/live2d/22/",
        textures: [
            "22.1024/closet.default/texture_00.png",
            "22.1024/closet.default/texture_01.png",
            "22.1024/closet.default/texture_02.png",
            "22.1024/closet.default/texture_03.png"
        ],
        motions: {
            idle: [{
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }],
            thanking: [{
                file: "motions/22-idle-02.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-thanking.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }]
        }
    },
    MODEL_22_XMAS: {
        type: "Live2D Model Setting",
        name: "22",
        model: "22.moc",
        modelHomeDir: "plugins/live2d_22/assets/live2d/22/",
        textures: [
			"22.1024/closet.xmas/texture_00.png",
			"22.1024/closet.xmas/texture_01.png",
			"22.1024/closet.xmas/texture_02_1.png",
			"22.1024/closet.xmas/texture_03_3.png"
        ],
        motions: {
            idle: [{
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }],
            thanking: [{
                file: "motions/22-idle-02.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-thanking.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }]
        }
    },
	    MODEL_22_XMAS_1: {
        type: "Live2D Model Setting",
        name: "22",
        model: "22.moc",
        modelHomeDir: "plugins/live2d_22/assets/live2d/22/",
        textures: [
			"22.1024/closet.xmas/texture_00.png",
			"22.1024/closet.xmas/texture_01.png",
			"22.1024/closet.xmas/texture_02.png",
			"22.1024/closet.xmas/texture_03.png"
        ],
        motions: {
            idle: [{
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-idle-01.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }],
            thanking: [{
                file: "motions/22-idle-02.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }, {
                file: "motions/22-thanking.mtn",
                "fade_in": 2000,
                "fade_out": 2000
            }]
        }
    },

    MOTION_GROUP_IDLE: "idle",
    MOTION_GROUP_TAP_BODY: "thanking",
    MOTION_GROUP_FLICK_HEAD: "flick_head",
    MOTION_GROUP_PINCH_IN: "pinch_in",
    MOTION_GROUP_PINCH_OUT: "pinch_out",
    MOTION_GROUP_SHAKE: "shake",


    HIT_AREA_HEAD: "head",
    HIT_AREA_BODY: "body"

};