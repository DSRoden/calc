'use strict';

function Calc() {}

Calc.add = function(x, y) {
    return x + y;
};

Calc.subtract = function(x, y) {
    return x - y;
};

/*function Point(x,y) {
  this.x = x;
  this.y =y;
}*/

Calc.distance2pts = function (Point1, Point2) {
  var length = Math.abs(Point1.x - Point2.x);
  var height = Math.abs(Point1.y - Point2.y);

  return Math.sqrt(Math.pow(length,2) +Math.pow(height,2));  
};

Calc.line = function (Point1, Point2) {
  var m = (Point2.y - Point1.y)/(Point2.x - Point1.x);
  var b = (Point1.y) -  m*(Point1.x);

  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);
  return m.toFixed(1) + 'x ' + '+ ' +sign +  b.toFixed(1);

};

Calc.trip = function (stops) {
    var totalLength = 0;

    for (var stop = 0; stop < stops.length - 1; stop++) {
        // console.log(stops[stop]);
        totalLength += Calc.distance2pts(stops[stop], stops[stop + 1]);

        // console.log(totalLength);
    }

    return totalLength;

};

Calc.mean = function (nums) {
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total/nums.length;
};

module.exports = Calc;


