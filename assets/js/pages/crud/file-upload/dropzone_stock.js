"use strict";
// Class definition

var KTDropzoneDemo = function () {
    // Private functions
    var demo1 = function () {

        // var myDropzone = new Dropzone("#kt_dropzone_3", { 
        //     url: "stock_upload.php",
        //     paramName: "file",
        //     uploadMultiple: true
        // });

        // myDropzone.on('sendingmultiple', function(data, xhr, formData) {
            // console.log(formData);

            // formData.append('name', jQuery('#name').val());

            // var myForm = document.querySelector('form');
            // formData = new FormData(myForm);
        // });

        $('#kt_dropzone_3').dropzone({
            url: "stock_upload.php",
            paramName: "file",
            maxFiles: 10,
            maxFilesize: 10,
            uploadMultiple: true,
            addRemoveLinks: true,
            acceptedFiles: "image/*",
            success: function(file, response){
                console.log(response);
            }

            // accept: function(file, done) {
            //     if (file.status == "error") {
            //         done("Naha, you don't.");
            //     } else {
            //         done();
            //         // console.log(file.name);
            //     }
            // }
        });
    }

    return {
        // public functions
        init: function() {
            demo1();
        }
    };
}();

KTUtil.ready(function() {
    KTDropzoneDemo.init();
});
