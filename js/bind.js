this.distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    console.log(this.distance + unit + caption)
    return this.distance + unit + caption;
  }
};

const roadTrip2 = {
  distance: 5000
};

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');

getTripDistance(' in total');

// this.distance = 10000;
// const roadTrip1 = {
//   distance: 3000,
//   getDistance: function() {
// 		console.log('this.distance', this.distance)
//     return this.distance;
//   }
// };

// const getTripDistance = roadTrip1.getDistance;

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip1);

// getTripDistance();