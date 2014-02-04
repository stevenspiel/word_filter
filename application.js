$(document).ready(function(){
  var replaced = $("body").html().replace(/([A-Z][a-z]+\s)/g,'Kevin ').replace(/(\s[a-z]+)/g, ' kevin').replace(/(\s[A-Z]+[a-z]+)/g, " Kevin")//.replace(/([a-z]+)/g, 'kevin');
  // var replaced = $("body").html().replace(/([a-z]+)/g, 'kevin');
  $("body").html(replaced);
})

  // var replaced = $("body").html().replace(/([A-Z]+[a-z]+\s)/g,'Kevin ').replace(/([a-z]+\s)/g, ' kevin').replace(/(\s[A-Z]+[a-z]+)/g, " Kevin");



// $("p").each(function(){
//     $this = $(this);
//     $this.html($this.html().replace('tomato','art nu.'));
// });


// $("p").html(function(i,t){
//     return t.replace('tomato','art nu.')
// });


