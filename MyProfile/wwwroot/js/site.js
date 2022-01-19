// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Build a JavaScript program that calculates and displays both a final percentage and
// a letter grade using the "Grade Calculator" form entries based on the weights listed in the syllabus.
// Use jQuery selectors(i.e.the “$”) in your program.


$('#btnSend').click(function () {

    var grade = parseInt($('#txtAssignment').val(), 10) + parseInt($('#txtProject').val(), 10) +
        parseInt($('#txtQuizzes').val(), 10) + parseInt($('#txtExams').val(), 10) + parseInt($('#txtINTEX').val(), 10);

    var lettergrade = '';

    if (grade > 100) {
        alert('Invalid Value. Please Enter Again!');
        return;
    } else if (grade >= 94) {
        lettergrade = 'A';
    } else if (grade >= 90) {
        lettergrade = 'A-';
    } else if (grade >= 87) {
        lettergrade = 'B+';
    } else if (grade >= 84) {
        lettergrade = 'B';
    } else if (grade >= 80) {
        lettergrade = 'B-';
    } else if (grade >= 77) {
        lettergrade = 'C+';
    } else if (grade >= 74) {
        lettergrade = 'C';
    } else if (grade >= 70) {
        lettergrade = 'C-';
    } else if (grade >= 67) {
        lettergrade = 'D+';
    } else if (grade >= 64) {
        lettergrade = 'D';
    } else if (grade >= 60) {
        lettergrade = 'D-';
    } else if (grade < 60) {
        lettergrade = 'E';
    } else {
        lettergrade = 'Out of Range';
    }

    alert('Final Percentage Grade: ' + grade + '\n' + 'Letter Grade: ' + lettergrade);

})