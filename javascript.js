
function main() {
	$("#begin").on("click",function(event) {
	    		$(".instructions").hide();
	    	});
	    	$(".won").hide();
	    	$(".lost").hide();
	    	$(".lvl-finished").hide();
	        $(".restart").hide();
	        $(".invasion").hide();
	        $(".safety").hide();
	        $(".timer").hide();
	        $(".score").hide();
	        var clickCount = 0;
	        var hideCount = 0;
	        var option;
	        var source = {
	            src: "https://www.kasandbox.org/programming-images/avatars/leafers-sapling.png"
			};
	        var hideChild = true;

	//LvL-changing variables
			var frequency = 6;
			var totalHideCount = 0;
			var time = 20;
			var quantity = 20;
			var lvl = 0;

	//Produce children, check clickCount
	        var callChild = function() {
	            var randomizerY = Math.random() * 320;
	            var randomizerX = Math.random() * 520;
	            var $img = $("<img>")
	                .addClass("leaflets")
	                .attr("src", source.src)
	                .attr("width", 50)
	                .css("position", "absolute")
	                .css("top", randomizerY + "px")
	                .css("left", randomizerX + "px")
	                .on("click", function(event) {
	                    if (hideChild) {
	                    $(this).hide();
	                    hideCount += 1;
	                     return hideCount;
	                     }
	                })
	                .appendTo("body");
	            
	        };
	        $("#leafers").on("click", function(event) {
	            clickCount += 1;

	            if(hideChild === true) {
	            callChild();

	        }
	            safeCall === false;
	            if ($(".safety").is(":visible") ) {
	                console.log("No more surprise attacks!");
	            } else if(clickCount >= 5 ) {

	                $(".safety").hide();
	                $(".invasion").show();
	            }
	        return clickCount;
	        });

	//Win 

			var newSpecies = function () {
				var $options = option = $("#species > option");
				option[Math.floor(Math.random() * option.length)].selected = true;
			};
	        var win = function (func) {
	        	landscapes.push(checker);
	        	scenery();
	            console.log("I am running now");
	            $(".bubble p").text("We will be back...");
	            $("#leafers").fadeOut(2000);
	            $(".bubble").fadeOut(3000);
	            $(".spot").fadeOut(3000);
	            $(".small-spot").fadeOut(3000);
	            $(".leaflets").remove();
	            $(".safety").hide();
	            $(".restart").hide();
	            $("#species").show();
	            $(".score").show();
	            totalHideCount += (counter*10) + hideCount;
	            time += 1;
	            frequency -=1;
	            quantity += 3;
	            hideCount = 0;
	            clickCount = 0;
	            option = 0;
	            lvl +=1;
	            $(".total").text(totalHideCount);
	            $("#lvl-finished").text(lvl);
	            $("#species").find(":selected").prop("disabled", true);
	            $(".lvl-finished").show();
	           
	            if (lvl === 6) {
	            	$(".won").show();
	            	landscapes = [];
	            }
	            if(lvl === 5) {
	            	$(".scenery").hide();
	            } else {
	            	$(".scenery").show();
	            }
	            newSpecies();
	        };
	        

	        var invasion = function() {
	            for (var i = 0; i < quantity; i++) {
	                callChild();
	            }
	        };

	//Invasion begins! Show hidden leaflets + add "quantity" more, change to s"ave me"
	        var counter;
	        $(".invasion").on("click", function(event) {
	        	hideCount = 0;
	            $(".leaflets").show();
	            $(".timer").show();
	            $("#species").hide();
	            $(".scenery").hide();
	            counter = time;
	            safeCall = false;
	            var invade = clickCount + quantity;
	                var interval = setInterval(function() {
	                    counter--;
	                    if(safeCall === true) {
	                        clearInterval(interval);
	                    }
	                    if (counter % frequency === 0) {
	                        callChild();
	                        invade++;
	                	}                    
	                    $(".timer").text(counter);

	                    if(hideCount >= invade ) {
	                        console.log("You have won!");
	                        win(newSpecies);
	                        clearInterval(interval);
	                        }
	                    if(counter === 5) {
	                        $(".timer").css("color", "rgb(207, 35, 35)");        
	                        console.log("Almost done");

	                    } 
	                    else if (counter === 0) {
	                        if(hideCount <= invade - 3) {
	                            hideChild = false;
			                    lose();
			                    invasion();
			                    invasion();
			                    invasion();
	                        $(".restart").show();
	                    } else {
	                        win(newSpecies);
	                    }
	                        
	                        console.log("The Final Countdown");
	                        clearInterval(interval);
	                    }
	                }, 1000);
	            
	            invasion();
	            $(".bubble p").text("Your world will be ours!");
	            $(".invasion").hide();
	            $(".safety").show();
	        });
	       var safeCall = false;
	// Safe, remove all .leaflets and #leafer
	        var safe = function() {
	            $(".safety").hide();
	            $(".leaflets").remove();
	            $(".bubble p").text("Run away, coward!");
	           /* $("#leafers").slideUp(3000);
	            $(".bubble").slideUp(3000);
	            $(".spot").slideUp(3000);
	            $(".small-spot").slideUp(3000);*/
	            clickCount = 0;
	            hideCount = 0;
	            option = 1;
	            
	        };

	        $(".safety").on("click", function(event) {
	        	$(".timer").css("color", "black"); 
	            safeCall = true;
	           safe();
	           $(".timer").hide();
	           counter = 30;
	           $("#species").show();
	           $(".scenery").show();
	           if (lvl === 5) {            	
	            	$(".scenery").hide();
	            } else {
	            	$(".scenery").show();
	            }
	        });
	 //Game lost      
	        var lose = function() {
	        	$(".safety").hide();
	            $(".bubble p").text("Bow to the Mother of ALL!");
	            $(".bubble").css("z-index", "10");
	            $(".restart").show();
	            $(".timer").hide()
	                        .css("color", "black");
	            $(".total").text((totalHideCount + hideCount));
	    		$(".lost").show();
	        };
	 //restart      
	        $(".restart").on("click", function(event) {
	           $(".restart").hide();
	           $(".leaflets").remove();
	           $(".bubble p").text("Poke me to call my children.");
	           $(".bubble").css("z-index", "1");
	           hideChild = true;
	           lvl = 0;
	           frequency = 6;
				totalHideCount = 0;
				time = 20;
				quantity = 20;
				clickCount = 0;
	            hideCount = 0;
	           $("#species").show();
	           $(".scenery").show();
	           $("#species").children().prop("disabled", false);
	           $(".lost").hide();
	           landscapes = [];
	        });

	       var find = function() {
	            $(".bubble p").text("Peek - A - Boo!!");
	            $(".bubble").show();
	            $(".spot").show();
	            $(".small-spot").show();
	            $("#leafers").show();
	            $(".timer").hide()
	                       .css("color", "black");
	       };
	       
	       var recovery = function() {
	            $(".bubble p").text("Our victory is inevitable!");
	                    $(".bubble").show();
	                    $(".spot").show();
	                    $(".small-spot").show();
	                $("#leafers").show();
	                $(".timer").hide()
	                            .css("color", "black");
	       };
	       var text= $(".bubble p").text();
	       


	// choose species
	       $("#species").change(function() {
	            var $species = $(this).find(":selected").val();
	            	$(".lvl-finished").hide();
	            	$(".score").hide();
	            if ($species === "starky") {
	            	$("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/starky-ultimate.png");
	                if (option === 1) {
	                    find();
	            	} else if(option === 0) {
	                   recovery();
	            	}  else {
		                console.log("Nothing happens");
		                $(".bubble").show();
		                    $(".spot").show();
		                    $(".small-spot").show();
		                $("#leafers").show();
		            }
	//change saplings
		            source.src="https://www.kasandbox.org/programming-images/avatars/starky-sapling.png";
		            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/starky-sapling.png");
		            console.log("you chose starky!");
		        } else  if ($species === "aqualine") {
		             $("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/aqualine-ultimate.png");
		             if($(".safety").is(":visible")) {
		                console.log("Run");
		                } else if (option === 1) {
		                    find();
		            } else if(option === 0) {
		                    recovery();
		            }  else {
		                console.log("Nothing happens");
		                $(".bubble").show();
		                    $(".spot").show();
		                    $(".small-spot").show();
		                $("#leafers").show();
		            }
	            //change saplings
		            source.src="https://www.kasandbox.org/programming-images/avatars/aqualine-sapling.png";
		            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/aqualine-sapling.png");
		            console.log("you chose aqualine!");
		        } else if ($species === "piceratops") {
		            $("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/piceratops-ultimate.png");
		            if($(".safety").is(":visible")) {
		                console.log("Run");
		                } else if (option === 1) {
		                    find();
		            } else if(option === 0) {
		                    recovery();
		            }  else {
		                console.log("Nothing happens");
		                $(".bubble").show();
		                    $(".spot").show();
		                    $(".small-spot").show();
		                $("#leafers").show();
		            }
	            //change saplings
	            source.src="https://www.kasandbox.org/programming-images/avatars/piceratops-sapling.png";
	            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/piceratops-sapling.png");
	            console.log("you chose piceratops!");
	        } else if ($species === "leafers"){
	            $("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/leafers-ultimate.png");
	            if($(".safety").is(":visible")) {
	                console.log("Run");
	                } else if (option === 1) {
	                    find();
	            } else if(option === 0) {
	                   recovery();
	            } else {
	                console.log("Nothing happens");
	                $(".bubble").show();
	                    $(".spot").show();
	                    $(".small-spot").show();
	                $("#leafers").show();
	            }
	                //change saplings
	                source.src="https://www.kasandbox.org/programming-images/avatars/leafers-sapling.png";
	            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/leafers-sapling.png");
	             console.log("you chose leafers!");
	        } else if ($species === "duskpin"){
	            $("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/duskpin-ultimate.png");
	            if($(".safety").is(":visible")) {
	                console.log("Run");
	                } else if (option === 1) {
	                    find();
	            } else if(option === 0) {
	                    recovery();
	            }  else {
	                console.log("Nothing happens");
	                $(".bubble").show();
	                    $(".spot").show();
	                    $(".small-spot").show();
	                $("#leafers").show();
	            }
	                //change saplings
	                source.src="https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png";
	            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png");
	             console.log("you chose duskpin!");

	        } else if ($species === "primosaur"){
	            $("#leafers").attr("src","https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png");
	            if($(".safety").is(":visible")) {
	                } else if (option === 1) {
	                    find();
	            } else if(option === 0) {
	                    recovery();
	            } else {
	                console.log("Nothing happens");
	                $(".bubble").show();
	                    $(".spot").show();
	                    $(".small-spot").show();
	                $("#leafers").show();
	            }
	                //change saplings
	                source.src="https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png";
	            $(".leaflets").attr("src","https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png");
	             console.log("you chose primosaur!");
	        }
	       });
	        
	//change scenery

			var landscapes = [];
			var conqueredLand;

			var panorama = function() {
				for (var i =  0; i < landscapes.length; i++) {
					if (random === landscapes[i]) {
							conqueredLand = true;
							break;
					} else {
						conqueredLand = false;
					}
				}
			};
		var random;
	    var checker = 4;
	    var scenery = function () {
            random = Math.floor(Math.random()*6);
            panorama();  
            if (random === checker || conqueredLand === true) {
            	scenery();
                console.log("no change! "+ random + " " + checker);
            } else if (random === 0) {
            $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/lava.png");
            console.log("area change! " + random + " " + checker);
            checker = 0;
            
            } else if(random === 1) {
                $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/fields-of-wine.png"); 
                console.log("area change! "+ random + " " + checker);
                checker = 1;
                
            } else if(random === 2) {
                $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/beach-in-hawaii.png");
                console.log("area change! "+ random + " " + checker);
                checker = 2;
                
            } else if(random === 3){
                $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/mountains-sunset.png"); 
                console.log("area change! "+ random + " " + checker);
                checker =  3;
                
            } else if(random === 4){
                $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/sand-dunes.png"); 
                console.log("area change! "+ random + " " + checker);
                checker = 4;
                
            }  else {
                $("#scenery").attr("src","https://www.kasandbox.org/programming-images/landscapes/clouds-from-plane.png"); 
                console.log("area change! "+ random + " " + checker);
                checker = 5;
            } 
        };

        $(".scenery").on("click", function(event) {   
            scenery();
        });
	    
}


$(document).ready(main);