var myPath = new Path();
myPath.strokeColor = '#3c0';
myPath.add(new Point(10, 20));
myPath.add(new Point(190, 60));
myPath.add(new Point(20, 40));
myPath.add(new Point(210, 80));

var randNum = Math.floor((Math.random() * 100) + 1);
var randNum2 = Math.floor((Math.random() * 100) + 1);

var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(100, 80), new Point(140, 500));

// insert a segment between the two existing
// segments in the path:
myPath.insert(1, new Point(randNum, randNum));
myPath.insert(2, new Point(200, randNum2));