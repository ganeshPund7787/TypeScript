"use strict";
class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculations
        return 5;
    }
}
class Instagrams extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log(`first`);
    }
}
const gp = new Instagrams("test", "also test", 5);
gp.getReelTime();
