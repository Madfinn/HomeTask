$(document).ready(function() {
//Scrollspy    
     $('body').scrollspy({target: ".nav-bar", offset: 75});
     $("#nav-menu").find('a').on('click', function(event) {
        if (this.hash !== "") {
           event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 1000, function(){
            window.location.hash = hash;
        });
      } // End if
    });
       
// Progress bar (section four)
    $(".my-progress-bar-1").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
    }).circularProgress('animate', 90, 2000);
    $(".my-progress-bar-2").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
    }).circularProgress('animate', 70, 2000);
    $(".my-progress-bar-3").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
    }).circularProgress('animate', 85, 2000);
    $(".my-progress-bar-4").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
    }).circularProgress('animate', 90, 2000);
    $(".my-progress-bar-5").circularProgress({
        line_width: 2,
        color: "#fff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
    }).circularProgress('animate', 69, 2000);
});

