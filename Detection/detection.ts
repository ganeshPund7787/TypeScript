function detectVal(val: number | string): number | string {
  if (typeof val === "string") {
    return val.toLocaleLowerCase();
  }
  return val.toFixed();
}

function provideId(id: string | null) {
  if (!id) {
    console.log(`Please provide valid id`);
    return;
  }
  return id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
