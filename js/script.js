// JavaScript File
/*global $*/

/*characters page JS*/
$(".alrest").hide();
$("#goback").hide();
$("#name").hide();
$("#info").hide();
$(".lorainfo").hide();
$(".jininfo").hide();
$(".hazeinfo").hide();
$(".addaminfo").hide();
$(".mythrainfo").hide();
$(".minothinfo").hide();
$(".hugoinfo").hide();
$(".brighidinfo").hide();
$(".aegaeoninfo").hide();
$(".malosinfo").hide();

function color(backgroundcolor, textcolor){
    $("#buttons").css("background-color", backgroundcolor);
    $("#name").css("color", textcolor);   
}

function changeimg(source){
    $(".alrest").attr("src", source);
}

function text(txt){
    $("#name").html(txt);
}

function font(font){
    $("#name").css("font-family", font);
}

$("button").click(function(){
    $("img").show();
    $("#name").show();
    $("#info").show();
});

$(".characters").click(function(){
    $("#goback").show();
});

$("#lora").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/5/59/Lora_Torna.png/revision/latest?cb=20180807075229");
    text("Lora");
    font("Lora");
    $(".lorainfo").show();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#jin").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/b/bb/Jin_Unmasked_artwork.png/revision/latest?cb=20180807075240");
    text("Jin");
    font("K2D");
    $(".lorainfo").hide();
    $(".jininfo").show();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#haze").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/d/d0/XC2-Haze_Portrait.png/revision/latest?cb=20180802071051");
    text("Haze");
    font("Glass Antiqua");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").show();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#addam").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/f/f5/Addam_Portrait.png/revision/latest/scale-to-width-down/350?cb=20180807080007");
    text("Addam");
    font("ABeeZee");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").show();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#mythra").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/5/56/Mythra-portrait.png/revision/latest/scale-to-width-down/350?cb=20171222071213");
    text("Mythra");
    font("Poiret One");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").show();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#minoth").click(function(){
   changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/8/8d/XC2_-_Minoth_Portrait.png/revision/latest/scale-to-width-down/350?cb=20180808074536");
   text("Minoth");
   font("Playfair Display");
   $(".lorainfo").hide();
   $(".jininfo").hide();
   $(".hazeinfo").hide();
   $(".addaminfo").hide();
   $(".mythrainfo").hide();
   $(".minothinfo").show();
   $(".hugoinfo").hide();
   $(".brighidinfo").hide();
   $(".aegaeoninfo").hide();
   $(".malosinfo").hide();
});

$("#hugo").click(function(){
   changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/a/a7/XC2_-_Hugo_Portrait.png/revision/latest?cb=20180809072904");
   text("Hugo");
   font("Hind");
   $(".lorainfo").hide();
   $(".jininfo").hide();
   $(".hazeinfo").hide();
   $(".addaminfo").hide();
   $(".mythrainfo").hide();
   $(".minothinfo").hide();
   $(".hugoinfo").show();
   $(".brighidinfo").hide();
   $(".aegaeoninfo").hide();
   $(".malosinfo").hide();
});

$("#brighid").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/6/6d/Brighid_Portrait.png/revision/latest/scale-to-width-down/350?cb=20180306220141");
    text("Brighid");
    font("Charmonman");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").show();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});

$("#aegaeon").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/9/9e/Aegaeon_Portrait.png/revision/latest/scale-to-width-down/350?cb=20180808075450");
    text("Aegaeon");
    font("EB Garamond");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").show();
    $(".malosinfo").hide();
});

$("#malos").click(function(){
    changeimg("https://vignette.wikia.nocookie.net/xenoblade/images/d/dc/Malos_Portrait.png/revision/latest/scale-to-width-down/350?cb=20180306223715");
    text("Malos");
    font("Yatra One");
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").show();
});

$("#goback").click(function(){
    $(".alrest").hide();
    $("#goback").hide();
    $("#name").hide();
    $("#info").hide();
    $(".lorainfo").hide();
    $(".jininfo").hide();
    $(".hazeinfo").hide();
    $(".addaminfo").hide();
    $(".mythrainfo").hide();
    $(".minothinfo").hide();
    $(".hugoinfo").hide();
    $(".brighidinfo").hide();
    $(".aegaeoninfo").hide();
    $(".malosinfo").hide();
});