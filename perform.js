//Node JS function to autonomously control AR Drone.
//TODO: Gather altitude and camera data from demo and droneState.


var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.on('navdata', console.log);

client.takeoff();

client
   .after(5000, function() {
      this.clockwise(0.5);
   })
   .after(10000, function() {
      this.up(0.5);
   })
   .after(20000, function() {
      this.down(0.5);
   })      
   .after(30000, function() {
      this.stop();
      this.land();
   });
