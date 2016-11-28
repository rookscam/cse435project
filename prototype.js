function startClick() {
    document.getElementById("sync-image").src="images/prezi/sync-active.png";
    document.getElementById("info-text").innerHTML="The vehicle is now moving 5MPH or less, so the button to activate it is no longer grayed out.";

    document.querySelector("#activate-btn").classList.remove("disable");
    document.getElementById("activate-btn").disabled = false;

    document.querySelector("#start-btn").classList.add("disable");
    document.getElementById("start-btn").disabled = true;
}

function stopClick() {
    document.getElementById("info-text").innerHTML="The system is aborted whenever the brakes are applied.";
    abortSystem();
}

function activateClick() {
    document.getElementById("sync-image").src="images/prezi/sync-parking-type.png";
    document.getElementById("info-text").innerHTML="Upon activation, the driver will be prompted to choose between parallel or perpendicular parking spots.";
    document.querySelector("#yes-btn").classList.remove("disable");
    document.getElementById("yes-btn").disabled = false;
    document.querySelector("#no-btn").classList.remove("disable");
    document.getElementById("no-btn").disabled = false;
    document.querySelector("#start-btn").classList.add("disable");
    document.getElementById("start-btn").disabled = true;
    //document.querySelector("#activate-btn").classList.add("disable");
    document.querySelector("#activate-btn").classList.remove("start");
    document.getElementById("activate-btn").innerHTML = "System Active";
    document.getElementById("activate-btn").disabled = true;
}

function parallelClick() {
    console.log(document.getElementById("yes-btn").innerHTML)
    if (document.getElementById("yes-btn").innerHTML == "Parallel") {
        document.getElementById("sync-image").src="images/prezi/sync-searching.png";
        document.getElementById("info-text").innerHTML="When the type of parking spot is selected, the Active Park Assist system will begin searching for parking spots.  The system will search for a parking spot for 2 minutes.  The user can stop the system from searching for parking spots at anytime by pressing the Cancel button.";

        document.getElementById("yes-btn").innerHTML = "What if a spot is found?";
        document.getElementById("no-btn").innerHTML = "What if no spots are found?";
    }
    else if (document.getElementById("yes-btn").innerHTML == "What if a spot is found?"){
        document.getElementById("sync-image").src="images/prezi/sync-validate-spot.png";
        document.getElementById("info-text").innerHTML="If a parking spot is found, a rendering is displayed to the user.  The driver must then validate the parking spot.  The system will cycle through spots one by one.";

        document.getElementById("yes-btn").innerHTML = "Yes";
        document.getElementById("no-btn").innerHTML = "No";
    }
    // continue searching yes
    else if (document.getElementById("yes-btn").innerHTML == "Yes, Continue"){
        document.getElementById("sync-image").src="images/prezi/sync-searching.png";
        document.getElementById("info-text").innerHTML="When the type of parking spot is selected, the Active Park Assist system will begin searching for parking spots.  The system will search for a parking spot for 2 minutes.  The user can stop the system from searching for parking spots at anytime by pressing the Cancel button.";

        document.getElementById("yes-btn").innerHTML = "What if a spot is found?";
        document.getElementById("no-btn").innerHTML = "What if no spots are found?";
    }
    else if (document.getElementById("yes-btn").innerHTML == "Yes"){
        document.getElementById("sync-image").src="images/prezi/sync-parking.png";
        document.getElementById("info-text").innerHTML="If the drive validates the parking spot, the vehicle will begin to maneuver into the parking spot.";

        document.getElementById("yes-btn").innerHTML = "What if an object is in the way?";
        document.getElementById("no-btn").innerHTML = "What happens if the parking process is completed?";
    }
    else if (document.getElementById("yes-btn").innerHTML == "What if an object is in the way?"){
        document.getElementById("info-text").innerHTML="If an object is detected in the path of the vehicle, the vehicle will stop and be shifted into park.  The system is then aborted.";
        abortSystem();
    }
    else if (document.getElementById("yes-btn").innerHTML == "Continue"){
        document.getElementById("info-text").innerHTML="To start, the vehicle must be moving 5MPH or less, otherwise the system is unavailable and the button is greyed out.";
        abortSystem();
    }
}

function perpClick() {
    console.log(document.getElementById("no-btn").innerHTML)
    if (document.getElementById("no-btn").innerHTML == "Perpendicular") {
        document.getElementById("sync-image").src="images/prezi/sync-searching.png";
        document.getElementById("info-text").innerHTML="When the type of parking spot is selected, the Active Park Assist system will begin searching for parking spots.  The system will search for a parking spot for 2 minutes.  The user can stop the system from searching for parking spots at anytime by pressing the Cancel button.";

        document.getElementById("yes-btn").innerHTML = "What if a spot is found?";
        document.getElementById("no-btn").innerHTML = "What if no spots are found?";
    }
    else if (document.getElementById("no-btn").innerHTML == "What if no spots are found?") {
        document.getElementById("sync-image").src="images/prezi/sync-continue-searching.png";
        document.getElementById("info-text").innerHTML="If the system cannot find a parking spot in 2 minutes, the system will prompt the driver to continue searching, or abort.";
        document.getElementById("yes-btn").innerHTML = "Yes, Continue";
        document.getElementById("no-btn").innerHTML = "No";
    }
    else if (document.getElementById("no-btn").innerHTML == "No") {
        document.getElementById("info-text").innerHTML="Active Park Assist has been aborted.";
        abortSystem();
    }
    else if (document.getElementById("no-btn").innerHTML == "What happens if the parking process is completed?"){
        document.getElementById("info-text").innerHTML="When the parking process is completed, a notification will appear on-screen, the vehicle will be shifted into park, and the system will abort.";
        document.getElementById("sync-image").src="images/prezi/sync-complete.png";
        
        document.querySelector("#activate-btn").classList.add("disable");
        document.querySelector("#activate-btn").classList.add("start");
        document.getElementById("activate-btn").innerHTML = "Activate";

        document.querySelector("#start-btn").classList.remove("disable");
        document.getElementById("start-btn").disabled = false;

        document.getElementById("yes-btn").innerHTML="Continue";
        document.querySelector("#no-btn").classList.add("disable");
        document.getElementById("no-btn").disabled = true;
        document.getElementById("no-btn").innerHTML="Perpendicular";
    }
}

function abortSystem() {
    document.getElementById("sync-image").src="images/prezi/sync-initial.png";  

    document.querySelector("#activate-btn").classList.add("disable");
    document.querySelector("#activate-btn").classList.add("start");
    document.getElementById("activate-btn").innerHTML = "Activate";

    document.querySelector("#start-btn").classList.remove("disable");
    document.getElementById("start-btn").disabled = false;

    document.querySelector("#yes-btn").classList.add("disable");
    document.getElementById("yes-btn").disabled = true;
    document.getElementById("yes-btn").innerHTML="Parallel";
    document.querySelector("#no-btn").classList.add("disable");
    document.getElementById("no-btn").disabled = true;
    document.getElementById("no-btn").innerHTML="Perpendicular";
}
