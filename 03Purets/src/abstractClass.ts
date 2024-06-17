abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
    
    abstract getSepia(): void; // if you want make coumplesery some methods then you can make abstract method
    
  getReelTime(): number {
    // some complex calculations
    return 5;
    }
    
}

class Instagrams extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log(`first`);
  }
}

const gp = new Instagrams("test", "also test", 5);

gp.getReelTime();

