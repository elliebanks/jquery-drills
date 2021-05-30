document.addEventListener("DOMContentLoaded", function () {
    let $submitBtn = $('#btnSubmit');
    let $inputText = $("#textField");
    let myDiv = $('<div id="newDiv"></div>');
    let newUl = $('<ul id="new list"></ul>');

    //append the div to the body
    $('body').append(myDiv);

    //STEP 12: create and append unordered list to the body
    $('body').append(newUl)

    $(document).ready(function () {

        //STEP 6: create function to alert the value of text input field when clicked
        $submitBtn.click(function (event) {
            alert($("#textField").val());
        });

        //STEP 7: enable submit button when there is text in the input field, otherwise disable submit button
        $('#textField').on('input change', function () {
            if ($(this).val() != "") {
                $submitBtn.prop('disabled', false);
            }
            else {
                $submitBtn.prop('disabled', true);
            };
        });


        //STEP 9: when submit is clicked, append the input text in an h2 element to the div :
        $submitBtn.click(function (event) {
            event.preventDefault() // this will keep the input value div from disappearing after click 

            /*
            STEP 11: comment out the h2 and make a list :

            let h2 = $(`<h2>${$inputText.val()}</h2>`)
            myDiv.append(h2); 
            */

            //STEP 12: append the input text as a list item in the unordered list :
            let li = $(`<li>${$inputText.val()}</li>`)
            newUl.append(li);


            //STEP 10: use mouseover to assign a new bg color & border radius :
            $(li).mouseover(function (event) {
                $(this).css({
                    "background-color": "purple",
                    "border-radius": "2px"
                });
            });

            //STEP 14: when list item is clicked assign it a random color
            let randomColors = [
                "gold",
                "yellow",
                "lemonchiffon",
                "papayawhip",
                "tomato",
                "darksalmon",
                "peachpuff",
                "khaki",
                "rosybrown",
            ];

            $(li).click(function () {
                $(this).css('color', randomColors[Math.floor(Math.random() * randomColors.length)]);

            });


            //STEP 15: remove list item when it is double clicked
            $(li).dblclick(function (e) {
                $(e.target).remove();
            });

        });
    });

});

/* ANOTHER WAY TO DO THE ALERT STEP:
function notify() {
    alert("clicked");
}
$('#btnSubmit').on('click', notify); */