
$(document).ready(function() {
  // إنشاء العنصر الذي سيتم تخصيصه
  $('<div id="profile" style="width: 200px; height: 200px; background-color: #ffffff;"></div>');
  
  // إضافة العنصر إلى صفحة الشات
  $('.chat-container').append(profileElement);
  
  // إضافة زر في الإعدادات
  $('<button id="changeProfileButton">تغيير الخلفية</button>');
  $('.settings').append(settingsButton);
  
  // فتح نافذة اختيار الصورة
  $('#changeProfileButton').click(function() {
    $('#imagePicker').click();
  });

  // تغيير لون الخلفية
  $('.chat-container').on('change', '#colorPicker', function() {
    var color = $(this).val();
    $('#profile').css('background-color', color);
  });

  // تغيير صورة الخلفية
  $('.chat-container').on('change', '#imagePicker', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var imageUrl = e.target.result;
      $('#profile').css('background-image', 'url(' + imageUrl + ')');
    };

    reader.readAsDataURL(file);
  });
});
</script>
.profile-background {
  width: 100%;
  height: 200px;
  background-color: #e1e1e1;
  background-image: url('default-background.jpg');
  background-size: cover;
  background-position: center;
}

.profile-content {
  padding: 20px;
  /* أنماط تنسيق المحتوى في الملف الشخصي */
}

.settings {
  margin-top: 20px;
}

.settings label {
  display: block;
  margin-bottom: 5px;
}

.settings input[type="color"],
.settings input[type="file"] {
  margin-bottom: 10px;
}
$(document).ready(function() {
  // تغيير لون الخلفية
  $('#background-color').change(function() {
    var color = $(this).val();
    $('.profile-background').css('background-color', color);
  });

  // تغيير صورة الخلفية
  $('#background-image').change(function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var imageUrl = e.target.result;
      $('.profile-background').css('background-image', 'url(' + imageUrl + ')');
    };

    reader.readAsDataURL(file);
  });
});

