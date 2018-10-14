$(document).ready(function() {
    $("#soccer").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#soccer-desc").css("opacity", "1");
    });
    $("#soccer").mouseout(function() {
        $("#soccer-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
    $("#bball").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#bball-desc").css("opacity", "1");
    });
    $("#bball").mouseout(function() {
        $("#bball-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
    $("#music").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#music-desc").css("opacity", "1");
    });
    $("#music").mouseout(function() {
        $("#music-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
    $("#RL").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#RL-desc").css("opacity", "1");
    });
    $("#RL").mouseout(function() {
        $("#RL-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
    $("#ger").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#ger-desc").css("opacity", "1");
    });
    $("#ger").mouseout(function() {
        $("#ger-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
    $("#spa").hover(function() {
        $("#hover-inst").css("opacity", "0");
        $("#spa-desc").css("opacity", "1");
    });
    $("#spa").mouseout(function() {
        $("#spa-desc").css("opacity", "0");
        $("#hover-inst").css("opacity", "1");
    });
});