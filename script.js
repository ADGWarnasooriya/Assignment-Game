function credits() {
    window.location = "credits.html";

}

var menu = document.getElementById("menu");


var viking = document.createElement("div");
var troll = document.createElement("div");
var vikingHealth = document.createElement("div");
var trollHealth = document.createElement("div");
var vikingHealth1 = document.createElement("div");
var trollHealth1 = document.createElement("div");


function play() {
    trollHealth.className = "trollHealth";
    trollHealth1.className = "trollHealth1";
    document.body.appendChild(trollHealth1);
    document.body.appendChild(trollHealth);

    vikingHealth.className = "vikingHealth";
    vikingHealth1.className = "vikingHealth1";
    document.body.appendChild(vikingHealth1);
    document.body.appendChild(vikingHealth);

    var options = document.getElementById("options");
    var name = document.getElementById("name");
    options.remove();
    name.remove();

    viking.className = "viking";
    document.body.appendChild(viking);

    troll.className = "troll";
    document.body.appendChild(troll);


    vikingIdleId = setInterval(vikingIdleAnimation, 150);
    trollIdleId = setInterval(trollIdleAnimation, 150);

}
var vikingIdleId = 0;
var vikingPositionX = 0;

function vikingIdleAnimation() {

    vikingPositionX = vikingPositionX - 512.1;

    viking.style.backgroundPositionX = vikingPositionX + "px";
    if (trollMarginLeft - vikingMarginLeft < 270) {
        if (vikingAttackStatus == true) {
            trollDeadAnimation();
        }

    }

}

var trollIdleId = 0;
var trollPositionX = 0;

function trollIdleAnimation() {
    trollPositionX = trollPositionX - 420;

    troll.style.backgroundPositionX = trollPositionX + "px";
    if (trollMarginLeft - vikingMarginLeft < 270) {
        if (trollAttackStatus == true) {
            vikingDeadAnimation();
        }

    }
}

function keypress(event) {
    var key = event.which;
    //alert(key);
    if (key == 68) {

        if (vikingWalkStatus == false) {
            if (vikingStopStatus == false) {
                vikingWalkAnimation();
                vikingWalkId = setInterval(vikingWalkMarginLeft, 150);
                vikingWalkStatus = true;
                vikingAttackStatus = false;
                trollAttackStatus = false;
            }

        }

    }
    if (key == 37) {

        if (trollWalkStatus == false) {
            if (trollStopStatus == false) {
                trollWalkAnimation();
                trollWalkId = setInterval(trollWalkMarginLeft, 150);
                trollWalkStatus = true;
                vikingAttackStatus = false;
                trollAttackStatus = false;
            }

        }

    }
    if (key == 87) {
        vikingWalkAnimationStop();
        vikingAttackStatus = false;
        trollAttackStatus = false;
    }
    if (key == 38) {
        trollWalkAnimationStop();
        vikingAttackStatus = false;
        trollAttackStatus = false;

    }
    if (key == 65) {
        vikingBackAnimation();
        vikingAttackStatus = false;
        trollAttackStatus = false;

    }
    if (key == 39) {
        trollBackAnimation();
        vikingAttackStatus = false;
        trollAttackStatus = false;
    }
    if (key == 70) {
        vikingAttackAnimation();
        vikingAttackStatus = true;
        //trollAttackStatus = false;
    }
    if (key == 96) {
        trollAttackAnimation();
        trollAttackStatus = true;
        //vikingAttackStatus = false;
    }
}
var vikingPositionY = 0;
var vikingMarginLeft = 0;
var vikingWalkId;
var vikingWalkStatus = false;
var vikingStopStatus = false;
var vikingAttackStatus = false;
var vikingDeadStatus = false;


function vikingWalkAnimation() {
    vikingPositionY = -512;
    viking.style.backgroundPositionY = vikingPositionY + "px";


}

function vikingWalkMarginLeft() {
    vikingMarginLeft = vikingMarginLeft + 10;
    viking.style.marginLeft = vikingMarginLeft + "px";
    //alert(trollMarginLeft - vikingMarginLeft);
    if (trollMarginLeft - vikingMarginLeft < 270) {
        clearInterval(vikingWalkId);
        vikingPositionY = 0;
        viking.style.backgroundPositionY = vikingPositionY + "px";
        vikingStopStatus = true;


    }

}

var trollPositionY = 0;
var trollMarginLeft = 950;
var trollWalkId;
var trollWalkStatus = false;
var trollStopStatus = false;
var trollAttackStatus = false;
var trollDeadStatus = false;

function trollWalkAnimation() {
    trollPositionY = -262.8;
    troll.style.backgroundPositionY = trollPositionY + "px";


}

function trollWalkMarginLeft() {
    trollMarginLeft = trollMarginLeft - 10;
    troll.style.marginLeft = trollMarginLeft + "px";
    if (trollMarginLeft - vikingMarginLeft < 270) {
        clearInterval(trollWalkId);
        trollPositionY = 0;
        troll.style.backgroundPositionY = trollPositionY + "px";
        trollStopStatus = true;


    }

}


function vikingWalkAnimationStop() {
    clearInterval(vikingWalkId);
    vikingPositionY = 0;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    vikingWalkStatus = false;

}

function trollWalkAnimationStop() {
    clearInterval(trollWalkId);
    trollPositionY = 0;
    troll.style.backgroundPositionY = trollPositionY + "px";
    trollWalkStatus = false;
}

function vikingBackAnimation() {
    clearInterval(vikingWalkId);
    vikingPositionY = 0;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    vikingWalkStatus = false;
    vikingPositionY = -512;
    viking.style.backgroundPositionY = vikingPositionY + "px";

    setTimeout(function() {
        vikingMarginLeft = vikingMarginLeft - 10;
        viking.style.marginLeft = vikingMarginLeft + "px";
        clearInterval(vikingWalkId);
        vikingPositionY = 0;
        viking.style.backgroundPositionY = vikingPositionY + "px";
        vikingStopStatus = false;
    }, 500);


}

function trollBackAnimation() {
    clearInterval(trollWalkId);
    trollPositionY = 0;
    troll.style.backgroundPositionY = trollPositionY + "px";
    trollWalkStatus = false;
    trollPositionY = -262.8;
    troll.style.backgroundPositionY = trollPositionY + "px";

    setTimeout(function() {
        trollMarginLeft = trollMarginLeft + 10;
        troll.style.marginLeft = trollMarginLeft + "px";
        clearInterval(trollWalkId);
        trollPositionY = 0;
        troll.style.backgroundPositionY = trollPositionY + "px";
        trollStopStatus = false;
    }, 500);

}


function vikingAttackAnimation() {
    clearInterval(vikingWalkId);
    vikingPositionY = 0;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    vikingPositionY = -1024;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    vikingWalkStatus = false;

}

function trollAttackAnimation() {
    clearInterval(trollWalkId);
    trollPositionY = 0;
    troll.style.backgroundPositionY = trollPositionY + "px";
    trollPositionY = -525.6;
    troll.style.backgroundPositionY = trollPositionY + "px";
    trollWalkStatus = false;

}
var trollHealthWidth = 400;

function trollDeadAnimation() {
    trollHealthWidth = trollHealthWidth - 5;
    trollHealth.style.width = trollHealthWidth + "px";
    if (trollHealthWidth == 0) {
        trollDown();
    }

}
var vikingHealthWidth = 400;

function vikingDeadAnimation() {
    vikingHealthWidth = vikingHealthWidth - 5;
    vikingHealth.style.width = vikingHealthWidth + "px";
    if (vikingHealthWidth == 0) {
        vikingDown();
    }
}

function vikingDown() {
    clearInterval(vikingIdleId);
    clearInterval(vikingWalkId);
    trollPositionY = 0;
    troll.style.backgroundPositionY = trollPositionY + "px";
    vikingPositionY = -2048;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    vikingDeadStatus = true;
    vikingPositionX = 0;
    for (var i = 0; i < 9; i++) {
        vikingPositionX = vikingPositionX - 512.1;

        viking.style.backgroundPositionX = vikingPositionX + "px";

    }
    setTimeout(function() {
            viking.remove();
            troll.remove();
            trollHealth.remove();
            trollHealth1.remove();
            vikingHealth.remove();
            vikingHealth1.remove();
            window.location = "index2.html";
        }

        , 1000)


}

function trollDown() {
    clearInterval(trollIdleId);
    clearInterval(trollWalkId);
    vikingPositionY = 0;
    viking.style.backgroundPositionY = vikingPositionY + "px";
    trollPositionY = -1051.2;
    troll.style.backgroundPositionY = trollPositionY + "px";
    trollDeadStatus = true;
    trollPositionX = 0;
    troll.style.marginLeft = (trollMarginLeft + 150) + "px";
    for (var i = 0; i < 9; i++) {
        trollPositionX = trollPositionX - 420;

        troll.style.backgroundPositionX = trollPositionX + "px";

    }
    setTimeout(function() {
            viking.remove();
            troll.remove();
            trollHealth.remove();
            trollHealth1.remove();
            vikingHealth.remove();
            vikingHealth1.remove();
            window.location = "index2.html";
        }

        , 1000)



}