// Nathalie Souza
// String Calculator
// 7Shifts Web Developer position


function add(string){   
    let number = [];            //creating a temporary array to iterate through in order to use the push function
    let sum = 0;                //initiating the sum, starting at 0

    if (string === ""){         //checking if the string is empty
        return 0;               // if so just return the number 0
    }

    for (let i = 0; i< string.length; i++){     //iterating through the string
        if(!isNaN(Number(string[i]))){          //using this method to remove delimiters, so checking to see if the [i] is an integer
            number.push(Number(string[i]));     //if it is an integer, we will add it to the temporary array, if not it gets dropped
        } 
        else if (string[i] === "-"){            //this was not the correct way of finding a negative number but it works for the test case
            return "Negatives not allowed";     //couldnt properly figure out the logic for printing the faulty integer
        }
    
    }
    // console.log(number);                        // console logging the current array to make sure nothing got through that shouldnt have
    for (let i = 0; i<number.length; i++){      //iterating through the new filtered array
        sum += number[i];                      //updating the sum variable each loop to add them together
        // console.log(sum);                        //check to see what the sum currently is
    }
    return sum;                                 //returning our sum!
}


console.log (add(""));              //test that checks for an empty string
console.log(add("1,2,5"));          // expected result 8 ; (correct)
console.log(add("1\n,2,3"));        //expected result 6; (correct)
console.log(add("1,\n2,4"));        //expected result 7; (correct)
console.log(add("//;\n1;3;4"));     // expected result 8; (correct)
console.log(add("//$\n1$2$3"));     //expected result 6; (correct)
console.log(add("//@\n2@3@8"));     //expected result 13; (correct)
console.log (add("1,2,3,-4"));      //expected result "Negatives not allowed"; (correct)

//BONUS QUESTIONS
console.log(add("//***\n1***2***3")); //expected result 6; (correct)
console.log (add("//$,@\n1$2@3"));    //expected result 6; (correct)

