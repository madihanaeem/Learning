/*
Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing of the array. */

class Solution{
    valueEqualToIndex(arr,n){
        let res = [];
        for(let i=0; i<n; i++){
            if(arr[i] === i+1){
                res.push(i+1);
            }
        }
        return res;
    }
}