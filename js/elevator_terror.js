var my_timeout;

function step1() {
    $("html, body").animate({scrollTop: $(".stage1").offset().top}, 2000, 'easeOutSine', step2);
}

function step2() {
    my_timeout = setTimeout(step3, 2000);
    my_timeout
}

function step3() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage2").offset().top}, 2000, 'easeOutSine', step4);
}

function step4() {
    my_timeout = setTimeout(step5, 2000);
    my_timeout
}

function step5() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage3").offset().top}, 2000, 'easeOutSine', step6);
}

function step6() {
    my_timeout = setTimeout(step7, 2000);
    my_timeout
}

function step7() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage10").offset().top}, 12000, 'easeOutSine', step8);
}

function step8() {
    my_timeout = setTimeout(step9, 2000);
    my_timeout
}

function step9() {
    clearTimeout(my_timeout);
    $(".stage10").effect("bounce", "slow",  step10);
}

function step10() {
    my_timeout = setTimeout(step11, 1000);
    my_timeout
}

function step11() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage0").offset().top}, 1000, 'easeInBounce', step12);
}

function step12() {
    $("html, body").animate({scrollTop: $(".stage10").offset().top}, 2000, 'easeInOutBack', step13);
}

function step13() {
    $("html, body").animate({scrollTop: $(".stage-1").offset().top}, 1000, 'easeInElastic', step14);
}

function step14() {
    my_timeout = setTimeout(step15, 2000);
    my_timeout
}

function step15() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage-2").offset().top}, 1000, 'easeOutBounce', step16);
}

function step16() {
    my_timeout = setTimeout(step17, 2000);
    my_timeout
}

function step17() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".heaven").offset().top}, 3000, 'easeInOutBack', step18);
}

function step18() {
    my_timeout = setTimeout(step19, 5000);
    my_timeout
}

function step19() {
    clearTimeout(my_timeout);
    $("html, body").animate({scrollTop: $(".stage-3").offset().top}, 1000, 'easeInElastic', step20);
}

function step20() {
    my_timeout = setTimeout(step21, 5000);
    my_timeout
}

function step21() {
    clearTimeout(my_timeout);
    $(".stage-3").effect("bounce", "slow",  step22);
}

function step22() {
    $("html, body").animate({scrollTop: $(".hell").offset().top}, 1000, 'easeInOutBack', step23);
}

function step23() {
}

function elevatorTerror() {
    step1();
}