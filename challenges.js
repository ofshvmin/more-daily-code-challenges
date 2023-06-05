/*-----------------------------------------------------------------------------
Challenge: 01 - twoSum

Difficulty - Easy

Prompt:

- Write a function called twoSum that takes an array of numbers and a target number
  and returns the indeces of the two numbers in the array that add up to the target. 
- Indeces must be returned in the same relative order they appear within the array
- You may not use the same element twice, and if no two numbers add up to the 
  target, return the string 'No Sum'

Examples:

twoSum([2,7,11,15], 9) //=> [0,1]
twoSum([3,2,4], 6) //=> [1,2]
twoSum([8,7], 16) //=> 'No Sum'

-----------------------------------------------------------------------------*/
// Your solution for 01- here:



/*-----------------------------------------------------------------------------
Challenge: 02 - compareTriplets

Difficulty - Easy

Prompt:

Alice and Bob each created one problem for HackerRank. A reviewer rates the two
challenges, awarding points on a scale from 1 to 100 for three categories:
problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = [a[0], a[1], a[2]], 
and the rating for Bob's challenge is the triplet b = [b[0], b[1], b[2]].

Your task is to find their comparison points by comparing a[0] with b[0], 
a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

- Write a function called compareTriplets that accepts two arrays and returns
  an array of the respective comparison points of those two arrays.
- The returned array should return in the order of [Alice's points, Bob's points]

Examples:

compareTriplets([1, 2, 3], [3, 2, 1]) //=> [1, 1]
compareTriplets([5, 6, 7], [3, 6, 10]) //=> [1, 1]
compareTriplets([17, 28, 30], [99, 16, 8]) //=> [2, 1]


-----------------------------------------------------------------------------*/
// Your solution for 02- here:



/*-----------------------------------------------------------------------------

Challenge: 03 - diagonalDifference

Difficulty - Easy

Prompt:

- Write a function called diagonalDifference that accepts an array of 
  three arrays (a square 2D matrix) and returns the absolute difference 
  between the sum of its diagonals. 

Given the square matrix below:

[[1,2,3],
[4,5,6],
[9,8,9]]

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15-17| = 2.

Example:

diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]) // => 15

-----------------------------------------------------------------------------*/
// Your solution for 03- here:


/*-----------------------------------------------------------------------------
Challenge: 04 - plusMinus

Difficulty - Easy

Prompt:

- Write a function called plusMinus that accepts an array of numbers and returns an array of
  the ratios of its elements that are positive, negative, and zero (as strings).
- The ratios should be represented as the decimal value of each fraction, accurate to 6 places
  after the decimal. 

Example:

plusMinus([1,1,0,-1,-1]) //=> ['0.400000', '0.400000', '0.200000']

There are 5 elements, two positive, two negative and one zero. 
Their ratios are 2/5 (0.400000), 2/5 (0.400000), and 1/5 (0.200000).

-----------------------------------------------------------------------------*/
// Your solution for 04- here:


/*-----------------------------------------------------------------------------
Challenge: 05 - staircase

Difficulty - Easy

Prompt:

This is a staircase of size n = 4:

[
'   #',
'  ##',
' ###',
'####',
]

Its base and height are both equal to n. It is drawn using # symbols and spaces. 

- Write a function called staircase that accepts a number (n) and returns a staircase of size n.
- The starcase will be an array of strings.
- The last line must have 0 spaces in it.

Example: 

staircase(6) // =>  
[
'     #',
'    ##',
'   ###',
'  ####',
' #####',
'######'
]

-----------------------------------------------------------------------------*/
// Your solution for 05- here:


/*-----------------------------------------------------------------------------
Challenge: 06 - miniMaxSum

Difficulty - Easy

Prompt:

- Write a function called miniMaxSum that accepts an array of positive numbers and returns
  the minimum and maximum values that can be calculated by summing exactly four of the five numbers
- Return the minimum and maximum within an array

Examples:
miniMaxSum([1,3,5,7,9]) //=> [16,24]
miniMaxSum([1,2,3,4,5]) //=> [10,14]


-----------------------------------------------------------------------------*/
// Your solution for 06- here:



/*-----------------------------------------------------------------------------
Challenge: 07 - timeConversion

Difficulty - Easy

Prompt:

- Write a function called timeConversion that accepts a string (a time in 12-hour AM/PM format)
  and returns the same time converted to military (24-hour) time. 
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


Examples:
timeConversion('12:01:00PM') //=> '12:01:00'
timeConversion('12:01:00AM') //=> '00:01:00'
timeConversion('07:05:45PM') //=> '19:05:45'

-----------------------------------------------------------------------------*/
// Your solution for 07- here:


/*-----------------------------------------------------------------------------
Challenge: 08 - gradingStudents

Difficulty - Easy

Prompt: 

HackerLand University has the following grading policy:

- Write a function named gradingStudents that accepts an array of scores and returns the rounded grades.
- Every student receives a grade in the inclusive range of 1 to 100.
- A score of 40 or lower is a failing grade.
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples:

A grade of 84 rounds to 85 (85 - 84 is less than 3)
A grade of 29 does not round (result is less than 38)
A grade of 57 does not round (60 - 57 is 3 or higher)

gradingStudents([73,67,38,33]) //=> [75,67,40,33]


-----------------------------------------------------------------------------*/
// Your solution for 08- here:


/*-----------------------------------------------------------------------------
Challenge: 09 - kangaroo

Difficulty - Easy

Prompt: 

You are choreographing a circus show with various animals. For one act, you are given two kangaroos
on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time 
as part of the show. If it is possible, return YES, otherwise return NO.

Examples:

kangaroo(0,3,4,2) //=> 'YES'
The two kangaroos jump through the following sequence of locations:
k1 (0, 3, 6, 9, 12)
k2 (4, 6, 8, 10, 12)
It is clear that the kangaroos meet at the same location (number 12 on the number line) 
after same number of jumps (4 jumps), so we print YES.

kangaroo(0,2,5,3) //=> 'NO
The second kangaroo has a starting location that is ahead (further along the number line) 
of the first kangaroo's starting location (i.e., x2 > x1). 
Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already ahead 
of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

-----------------------------------------------------------------------------*/
// Your solution for 09- here:


/*-----------------------------------------------------------------------------
Challenge: 10 - breakingRecords

Difficulty - Medium

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, write a function named breakingRecords to determine the number of times Maria breaks her records for most and least points scored during the season.  

Sample Input 0
[10,5,20,20,4,5,2,25,1]

Sample Output 0
[2,4]

Explanation 0

She broke her best record twice and her worst record four times, so we return [2,4] as our answer. Note that she did not break her record for best score when she tied her current record, as her score during that game was not strictly greater than her best record at the time.

Sample Input 1
[3,4,21,36,10,28,35,5,24,42]

Sample Output 1
[4,0]

Explanation 1

She broke her best record four times and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we return [4,0] as our answer.

-----------------------------------------------------------------------------*/
// Your solution for 10- here:

