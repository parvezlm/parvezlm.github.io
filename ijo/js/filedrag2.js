/*
 filedrag.js - HTML5 File Drag & Drop demonstration
 Featured on SitePoint.com
 Developed by Craig Buckler (@craigbuckler) of OptimalWorks.net
 */
(function() {
  // getElementById
  function $id(id) {
    return document.getElementById(id);
  }

  // output information
  function Output(msg) {
    var m = $id("messages2");
    m.innerHTML = msg + m.innerHTML;
  }

  // file drag hover
  function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = e.type == "dragover" ? "hover" : "";
  }

  // file selection
  function FileSelectHandler(e) {
    // cancel event and hover styling
    FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // process all File objects
    for (var i = 0, f; (f = files[i]); i++) {
      ParseFile(f);
    }
  }

  // output file information
  function ParseFile(file) {
    Output(
      // "<p><img src='img/form_jpg.svg' alt='form_jpg' class='img-responsive fileimgD'><strong>" +
      //   file.name +
      //   "</strong> <a href='javascript:void(0)'><img src='img/formtrash.svg' alt='formtrash' class='img-responsive trashimgD'></a></p>"
      '<h4><a href="javascript:void(0)"><img src="img/form_uploadcopy.svg" alt="form_uploadcopy" class="img-responsive"></a><span>30-11-2018 Wendy Jansen</span>' +
        file.name +
        '<a href="javascript:void(0)" class="trash" data-target="#inventorydelete" data-toggle="modal"><img src="img/formtrash.svg" alt="formtrash" class="img-responsive"></a></h4>'
    );
  }

  // initialize
  function Init() {
    var fileselect = $id("fileselect2"),
      filedrag = $id("filedrag2"),
      submitbutton = $id("submitbutton");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // file drop
      filedrag.addEventListener("dragover", FileDragHover, false);
      filedrag.addEventListener("dragleave", FileDragHover, false);
      filedrag.addEventListener("drop", FileSelectHandler, false);
      filedrag.style.display = "block";

      // remove submit button
      submitbutton.style.display = "none";
    }
  }

  // call initialization file
  if (window.File && window.FileList && window.FileReader) {
    Init();
  }
})();
