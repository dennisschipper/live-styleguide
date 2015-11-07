//= require_tree .

// Wait until the content is loaded
document.addEventListener("DOMContentLoaded", function(event) {

  // Set some generic variables for resizing later
  var window_height = window.innerHeight;
  var sidebar = document.getElementsByTagName("aside")[0];
  sidebar.style.height = window_height + "px";


  // Lets set the sidebar at the same height as the window
  function resize_sidebar() {
    var window_height = window.innerHeight;
    sidebar.style.height = window_height + "px";
    return "done!"
  }
  resize_sidebar();

  // On resize, do things
  window.addEventListener('resize', function(event){
    resize_sidebar();
  })
})
