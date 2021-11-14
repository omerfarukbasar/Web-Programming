/*
    Author: Omer Basar
    Assignemnt: 5
    FileName: assignment5.js
    Version: 11/1/21
    Course: CSC-350-001
*/

/*
    4.1
    Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.
*/
function displayTable()
{
    // Set up variable to save table for prompt message
    var table = "Original\t\tSquared\t\tCubed\n";

    // Create table and save to to a variable
    for (i = 5; i < 16; i++)
    {
        table += i + "\t\t\t" + (i*i) + "\t\t\t" + (i*i*i) +"\n";
    }
    
    // Display table through prompt message
    alert(table);

    // Do the same thing but write it to the web page instead
    document.write("<table border = \'1\'>")
    document.write("<tr><th>Original</th><th>Squared</th><th>Cubed</th>")
    for (i = 5; i < 16; i++)
    {
        document.write("<tr><td>"+ i +"</td><td>"+ (i*i) +"</td><td>"+ (i*i*i) +"</td></tr>");
    }
    document.write("<br />");
}

/*
    4.3
    Input: Three numbers, using prompt to get each.
    Output: The largest of the three input numbers.
    Hint: use the predefine function Math.max()
*/
function getMax()
{
    // Ask for 3 numbers as input
    var a = prompt("Please input your first number.\n","");
    var b = prompt("Please input your second number.\n","");
    var c = prompt("Please input your third number.\n","");

    // Use the function from the math library to determine the largest integer
    var largestNum = Math.max(a,b,c);

    // Store result in prompt message
    var messagePrompt = "The largest of the three given numbers is: " + largestNum;

    // Display prompt message
    alert(messagePrompt);

    // Write the output to the web page
    document.write(messagePrompt, "<br />");
}

/*
    4.6
    Input: A line of text, using prompt.
    Output: The words of the input text, in alphabetical order.
*/
function orderText()
{
    // Ask for 3 numbers as input
    var textInput = prompt("Please write some text here.\n");

    // Force all words in text to be lowercase because uppercase gets priority over lowercase in the default scenario of sorting
    textInput = textInput.toLowerCase()

    // Separate each word and store them in different indexes in an array
    var wordList = textInput.split(" ");

    // Sort the elements of the array by alphabetical order of the words
    wordList = wordList.sort();

    // Store result in prompt message
    var messagePrompt = "The line of text sorted alphabetically is:\n" + wordList;

    // Display prompt message
    alert(messagePrompt);

    // Write the output to the web page
    document.write(messagePrompt, "<br />");

}
