const sketch1 = (p) => {
  let c = "blue";

  p.setup = () => {
    let cnv = p.createCanvas(400, 400);
    cnv.mousePressed(() => {
      c = p.color(p.random(255), p.random(255), p.random(255));
    });
  };

  p.draw = () => {
    p.background(c);
  };
};

new p5(sketch1, "sketch1-container");
