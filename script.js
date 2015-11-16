$(function(){

  $('form#newEmployee').on('submit', function(event){

    try {
      var data = $(this).serializeArray();

      console.log(data);



/**Very long if statment to bring the object data into the DOM.
*The name data appends a ul to #content div.
*Than each data point of the array append a li to the ul created
**/
          for (var i = 0; i < data.length; i++){
            var elem = data[i];

             if (elem.name === "firstName" ){
              var $ul = $('<ul>');
              $('#content').append($ul);
              var $li = $('<li>');
              $li.text("Name: " + elem.value);
              $('#content ul:last-child').append($li);

            } if (elem.name === "lastName" ) {
              var $li = $('<li>');
              $li.text( "Last Name: " + elem.value);
              $('#content ul:last-child').append($li);

            } if (elem.name === "employeeNum" ) {
              var $li = $('<li>');
              $li.text("Employee #: " + elem.value);
              $('#content ul:last-child').append($li);

            } if (elem.name === "employeeTitle" ) {
              var $li = $('<li>');
              $li.text("Title: " + elem.value);
              $('#content ul:last-child').append($li);

            } if (elem.name === "lastReview" ) {
              var $li = $('<li>');
              var cNum = parseInt(elem.value);
              $li.text("Latest Employee Review: " + elem.value);
              $('#content ul:last-child').append($li);
              $li.addClass('review' + cNum);



            } if (elem.name === "employeeSalary" ) {
              var $li = $('<li>');
              var $delButton = $('<button type="button" class = "del" name="button">Delete</button>');
              $li.text("Salary: " + elem.value);
              $('#content ul:last-child').append($li, $delButton);
              $('#content').on("click",".del",function() {
                  $(this).closest('ul').remove();

              });
            }

      }
      $('a button').on('click',function() {
    $('this').closest('li').remove()
});


      $(this)[0].reset();

    } catch (exception){
      console.log('Exception:', exception);
    } finally {
        event.preventDefault();
    }
  })

});
