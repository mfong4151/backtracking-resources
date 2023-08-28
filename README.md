# backtracking-resources

## Prerequisite topics

- Trees
- Recursion
- DFS

## Abstract/High Level
Recognizing a backtracking problem:

1. Number of choices
2. Constraints on those choices
3. A need to exhaust those choices to get to the goal

## Leetcode

Look at the constraints, small array size is usually indicative of a backtracking problem. This of course is not super useful on a technical interview.

"Return all the x, you may return the answer in any order."

## Decision Trees

Creating a proper decision tree representation can be helpful to understanding if the problem is a backtrakcing problem or not. You should be doing this basically for any problem in which you have "choices".

## DP/Backtracking

Decision trees are also important for determining if the problem your working with is a DP problem instead of a backtracking problem. In an interview this makes the difference between you recongize the correct solution and a wrong one.

https://leetcode.com/problems/climbing-stairs/

## 1D vs 2D Backtracking



## Time/space complexity

Much of the time and space complexity can be understood through probability. Below chapter 1 by Blitztein and Hwang makes for a good supplemental reading if you want to know more.

The only one you have to hard commit to memory is premutations, because theres usually not enough time to formally prove it, and you'll likely never run into other problems with factorial time complexity, and you'll likely not be able to generate enough test cases to prove it under duress.

The general formula for computing time complexity goes as follows:

- How many choices is there at every node in the decision tree (c)
- What is the input space that you need to exhaust (n)
- How many times do you need to do this (k). Usually once, but do your homework.

So it will look like this:

O(k * c ^ n)

Or more commonly O(c ^ n)

So for the problem "subsets," it is O(2^n) because at every step, you have two choices, and N items


## Interviewing

I can speak from experience that the most important thing when getting a backtracking problem is coming up with the correct answer, because optimizations do not change the worst case time complexity. If you know optimizations, do them after the fact.

## Resources

- https://www.youtube.com/watch?v=Zq4upTEaQyM
- https://www.youtube.com/watch?v=REOH22Xwdkk
- https://github.com/Honei/bookshelf/blob/master/Math/Blitzstein%20J.K.%2C%20Hwang%20J.-Introduction%20to%20Probability-CRC%20(2015).pdf
- https://en.wikipedia.org/wiki/Decision_tree
- https://www.youtube.com/watch?v=xFv_Hl4B83A