/**
 * Created by sudiptomanna on 6/21/17.
 */
(function(){
    "use strict";

    function onPositionReceived(position){
        console.log(position);
    }

    function onPositionChanged(position) {
        console.log('New position is: ' + position.coords.latitude + ' , ' + position.coords.longitude);
    }

    function onPositionFailure(positionError) {
        console.log('Error position is', positionError);
    }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionFailure, {
            timeout: 0
        });

        let watch = navigator.geolocation.watchPosition(onPositionChanged, onPositionFailure);

        navigator.geolocation.clearWatch(watch);
    }

}());