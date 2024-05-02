/* Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms)  */


class Solution {
    seriesSum(n) {
        // code here
        let ans;
        ans = n*(n+1)/2;
        return ans;
    }
} 