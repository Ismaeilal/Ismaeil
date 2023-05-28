<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
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
