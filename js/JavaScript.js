﻿$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#myBtn').fadeIn();
        }
        else {
            $('#myBtn').fadeOut();
        }
    });
    $('#myBtn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// design Tooltip of scroll button
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// design image functionality

        $(document).ready(function (){
            $("#imageBrowes").change(function(){
                var File=this.files;
                if(File && File[0]){
                    ReadImage(File[0]);
                }
            })
        })
var ReadImage = function (file) {
    var reader = new FileReader;
    var image = new Image;
    reader.readAsDataURL(file);
    reader.onload=function (_file) {

        image.src = _file.target.result;
        image.onload=function(){

            var height = this.height;
            var width=this.width;
            var type=file.type;
            var size=~~(file.size / 1024)+ "KB";
            $("#targetImg").attr('src', _file.target.result);
            $("#description").text("Size:" + size + "," + height + "X" + width + "");
            $("#imgPreview").show();
            //$("#ClearPreview").show();
        }
    }
}
var ClearPreview = function () {
    //$("#imageBrowes").val('');
    //$("#description").text('');
    $("#imgPreview").show();
    //$("#targetImg").hide();
    //$("#imageBrowes").hide();
}


