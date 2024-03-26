const sketch2 = (p) => {
  let c = "red";

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

new p5(sketch2, "sketch2-container");
