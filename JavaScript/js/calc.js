var numField1J = document.getElementById("numField1");
var numField2J = document.getElementById("numField2");
var calcResultJ = document.getElementById("calcResult");
var formJ = document.getElementById("xIsWhatPercentageOfY");

formJ.addEventListener("submit", function (formSubmitDefault) {

                      if(!numField1J.value || !numField2J.value)
                        {
                            alert("Please enter proper numbers in the fields");
                        }
                        else
                            {
                                var x = parseFloat(numField1J.value);
                                var y = parseFloat(numField2J.value);

                                var percentage = (x/y)*100;

                                calcResultJ.innerText = "Answer: " + percentage + "%";
                                formSubmitDefault.preventDefault();
                            }

                      });
