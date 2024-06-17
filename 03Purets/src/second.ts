interface Takephoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface story {
  createStory(): void;
}

class Instagram implements Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements Takephoto, story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("story was created");
  }
}
