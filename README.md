# _Beep-Boop_

#### _Program turns numbers to words, 1/24/20_

#### By _**Patrick S. Delaney**_

## Description

_This program will take the user's inputted numbers, identify integers, and give a response that varies from integer to integer._

## Setup/Installation Requirements

* _Open Terminal_
* _Clone the respository in which this application is stored by following the next step_
* _type: "git clone" and insert this link after that phrase in your terminal: https://github.com/Prestwick97/beep-boop.git
* _Press enter_
* _Navigate to the folder from your desktop using your terminal ("cd beep-boop")_
* _Open the html file using "open index.html" in your terminal._
* _Enjoy!_

## Known Bugs

_So far, if you input multiple integers, the program just gives back a number of arrays equal to the index of the number inputted. _

## Specs

Program will take numbers as input.
* input: 1
* output: 1

Program will not take letters or special characters as input.
* inout: a^
* output: undefined

Program returns a range of numbers from 0 to the users inputted number
* input: 3
* output: 0, 1, 2, 3,

Program will identify all numbers containing the integer "1".
* input: 1
* output: "special number"

Program will identify all numbers containing the integer "2".
* input: 2 
* output: "special number"

Program will identify all numbers containing the integer "3".
* input: 3
* output: "special number"

Program will take any number containing the integer "1" and replace their output with "beep".
* input: 1
* output: "Beep!"

Program will take any number containing the integer "2" and replace them with "boop".
* input: 2
* output: "Boop!"

Program will take any number containing the integer: "3" and replace them with "I'm sorry, Dave. I'm afraid I can't do that."
* input: 3
* output: "I'm sorry, Dave. I'm afraid I can't do that."

If the user inputs a number containing the integers: "1" and "2", the program will only behave as if a "2" is being entered; ignoring its default response to integer "1"'.
* input: 12
* output: "Boop!"

If the user inputs a number containing the integer "3", the behavior programmed for the integer "3" will override the other behaviors programmed for integers "1" and "2".
* input: 123
* output: "I'm sorry, Dave. I'm afraid I can't do that."

## Support and contact details

_If you have any questions, comments, concerns, or suggestions, please contact me at: prestwick97@mail.com_

## Technologies Used

_In this program, I made a form using html and css (bootstrap styling) and the logic was made using JavaScript_

### License


Copyright (c) 2020 **_Patrick S. Delaney_** MIT
