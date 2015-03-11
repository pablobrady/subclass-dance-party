var SpinDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.$node.addClass("spinDancer");
  this.rotationDegree = 0;
};

var makeSpinDancer = function(top, left, timeBetweenSteps){
  var spinDancer = new SpinDancer(top, left, timeBetweenSteps)
  return spinDancer;
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function(){
  var colors = ["red", "green", "yellow", "purple"];
  var color = colors[Math.floor(Math.random() * (colors.length -1))];
  this.$node.css("border-color", color);
  var w = Math.floor(Math.random() * 300);
  var h = Math.floor(Math.random() * 400);
  this.rotationDegree += .5;
  this.$node.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
  };
  this.$node.animate({
    width: w, 
    height: h
   }, 1000)
  this.$node.animate(
     this.$node.rotate(this.rotationDegree),
     500);



  Dancer.prototype.step.apply(this); // Call Dancer's step(); 
};

