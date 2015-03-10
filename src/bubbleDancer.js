var BubbleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.$node.addClass("bubbleDancer");

};

var makeBubbleDancer = function(top, left, timeBetweenSteps){
  var bubbleDancer = new BubbleDancer(top, left, timeBetweenSteps)
  return bubbleDancer;
};

BubbleDancer.prototype = Object.create(Dancer.prototype);
BubbleDancer.prototype.constructor = BubbleDancer;

BubbleDancer.prototype.step = function(){
  this.$node.animate({
  	opacity: .25
  }, 1000).animate({
  	opacity: 1.0
  }, 1000);
	// this.$node.toggle();
  Dancer.prototype.step.apply(this); // Call Dancer's step();
};

