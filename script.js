/**
 * Employee representation.
 */
function Employee(firstName, lastName, employeeNum, employeeTitle, lastReview, employeeSalary){
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNum = employeeNum;
  this.employeeTitle = employeeTitle;
  this.lastReview = lastReview;
  this.employeeSalary = employeeSalary;
}

/**
 * Employee list no unique id number function
 */

 function EmployeeList(){
       list = [];
       /**
     	 * Get a copy of the list
       *splice duplicates the list array at 0 index
     	 */
       this.getList = function(){
         return list.splice(0);

       }
       /**
        * Add Employee
        * @param an employee if employee is a instanceOf Employee constructor
        */
        this.addEmployee = function(employee){
          if(numExists(employee.employeeNum)){
            console.log("already assigned to someone");
            return;
          }
          if(employee instanceof Employee){
            list.push(employee);
          }
        }

        /**
         * Delete Employee
         * @param employee number
         */
         this.removeEmployee = function(employeeNum){
           for (var i = 0; i < list.length; i++) {
             if (employeeNum == list[i].employeeNum) {
               list.splice([i],1);
               break;
             }
           }
         }

         /**
          * Check for employeeNum
          * @param employee number
          */
          numExists = function(employeeNum){
            return list.some(function(element, index, array){
              return employeeNum == element.employeeNum;
            });
          }


 }
 /* binds remove() to the button clicked & removes closest ul from the */
function delButton(){
  $('#content').on('click', 'button', function() {
            $(this).closest('ul').remove();
  });
}
$(document).ready(function(){
  var list = new EmployeeList();

/* add employees to the list with the addEmployee function*/
  list.addEmployee(new Employee('Manuel', 'Alvarez', 1 , 'Me', 4, 50000));
  list.addEmployee(new Employee('Andy', 'WIlson', 2 , 'Me', 5, 50000));
  list.addEmployee(new Employee('Andy', 'WIlson', 3 , 'Me', 5, 50000));

    // create template for displaying employees
 	  var employeeTemplate = $('#employee-list').html();
    // Compile the template
    var template = Handlebars.compile(employeeTemplate);
    // Pass our data to the template
    var compiledHtml = template({employees: list.getList()});
    // Add the compiled html to the page
    $('.employees').append(compiledHtml);
    // call the deletButton function
    delButton();

    /** ------------ FORM SUBMISSION --------------- **/
    $('form').on('submit', function(e){
      e.preventDefault();
        firstName = $('#fN').val();
        lastName = $('#lN').val();
        employeeNum = $('#eN').val();
        employeeTitle = $('#eT').val();
        lastReview = $('#lR').val();
        employeeSalary = $('#eS').val();

        list.addEmployee(new Employee(firstName, lastName, employeeNum, employeeTitle, lastReview, employeeSalary ));
        // clear existing data from the form
  		    $(this)[0].reset();
  		// Pass our data to the template
  		  compiledHtml = template({employees: list.getList()});
  		// Add the compiled html to the page
  		  $('.employees').append(compiledHtml);

    });

});








// $(function() {
//
//   $('form#newEmployee').on('submit', function(event) {
//
//     var data = $(this).serializeArray();
//
//     console.log(data);
//
//     /**Very long if statment to bring the object data into the DOM.
//      *The name data appends a ul to #content div.
//      *Then each data point of the array appends a li to the ul created
//      **/
//     for (var i = 0; i < data.length; i++) {
//       var elem = data[i];
//
//       if (elem.name === 'firstName') {
//         var $ul = $('<ul>');
//         $('#content').append($ul);
//         var $li = $('<li>');
//         $li.text('Name: ' + elem.value);
//         $('#content ul:last-child').append($li);
//
//       }
//       if (elem.name === 'lastName') {
//         var $li = $('<li>');
//         $li.text('Last Name: ' + elem.value);
//         $('#content ul:last-child').append($li);
//
//       }
//       if (elem.name === 'employeeNum') {
//         var $li = $('<li>');
//         $li.text('Employee #: ' + elem.value);
//         $('#content ul:last-child').append($li);
//
//       }
//       if (elem.name === 'employeeTitle') {
//         var $li = $('<li>');
//         $li.text('Title: ' + elem.value);
//         $('#content ul:last-child').append($li);
//
//       }
//       if (elem.name === 'lastReview') {
//         var $li = $('<li>');
//         var cNum = parseInt(elem.value);
//         $li.text('Latest Employee Review: ' + elem.value);
//         $('#content ul:last-child').append($li);
//         $li.addClass('review' + cNum);
//
//       }
//       /**
//       * added a delete button that is appended to the ul and deletes
//       * the entire ul its within
//       */
//       if (elem.name === 'employeeSalary') {
//         var $li = $('<li>');
//         var $delButton = $('<button type="button" class = "del" name="button">Delete</button>');
//         $li.text('Salary: ' + elem.value);
//         $('#content ul:last-child').append($li, $delButton);
//         $('#content').on('click', '.del', function() {
//           $(this).closest('ul').remove();
//         });
//
//       }
//
//       $(this)[0].reset();
//     }
//
//     $('#sM').on('click', function() {
//         $('#formWindow').prop('style','none');
//       });
//
//     event.preventDefault();
//   });
// });
