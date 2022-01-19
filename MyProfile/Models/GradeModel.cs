using System;
using System.ComponentModel.DataAnnotations;

namespace MyProfile.Models
{
    public class GradeModel
    {
        //Get and Set Method that set up by asp.net
        [Range(0, 100, ErrorMessage = "Please enter correct value between 0 to 100")]
        public int Assignment { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter correct value between 0 to 100")]
        public int Project { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter correct value between 0 to 100")]
        public int Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter correct value between 0 to 100")]
        public int Exams { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter correct value between 0 to 100")]
        public int INTEX { get; set; }

    }
}
