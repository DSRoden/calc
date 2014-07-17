/* global describe, it*/
'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc.js');

describe('Calc', function () {
  describe('.add', function () {
    it('should add two numbers', function (){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });
  
  describe('.subtract', function () {
    it('should subtract one number from another', function (){
      var remainder = Calc.subtract(5,3);
      expect(remainder).to.equal(2);
    });
  });
  
  describe('.distance2pts', function () {
    it('should find the distance between two points', function (){
      var distance = Calc.distance2pts({x:5,y:3}, {x:12,y:10});
      expect(distance).to.equal(Math.sqrt(98));
    });
  });
  
  describe('.line', function () {
    it('should find the slope of a line', function (){
      var y = Calc.line({x:1,y:-4},{x:-4,y:2});
      expect(y).to.equal('-1.2x + -2.8');
    });
  });

  describe('.trip', function () {
    it('should find the total distance of the trip', function () { 
      var total = Calc.trip([{x:1, y:4}, {x:4, y:2}, {x:8, y:10}]);
    expect(total).to.be.closeTo((Math.sqrt(13) + Math.sqrt(80)), 0.01);
    });
  });

  describe('.mean', function() {
    it('should find the mean of the numbers in an array', function () {
      var avg = Calc.mean([1, 3, 5, 7, 9]);
      expect(avg).to.be.closeTo(5, 0.001);
    });
  });


  describe('.stdev', function() {
    it('should calculate the standard deviation for the numbers in a array', function () {
      var dev = Calc.stdev([3, 7, 2, 4, 6, 8]);
      expect(dev).to.be.closeTo(2.366, 0.001);
    });
  });
  
  
});


