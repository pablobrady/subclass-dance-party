var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps)
  return blinkyDancer;
};

BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.contructor = makeBlinkyDancer;

BlinkyDancer.prototype.step = function(){
    console.log("BlinkyDancer step!");
    // call the old version of step at the beginning of any call to this new version of step
    // this.oldStep();
    
    Dancer.prototype.step.apply(this); // Call Dancer's step();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  console.log("Toggling...");
  this.$node.toggle();
  console.log("Toggling... end.");
};

// var bd = makeBlinkyDancer(Math.random() * 200, Math.random() * 200, 1);
// console.log(bd);


// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


