/*You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0). */

class Solution {
    print(arr,n){
      //code here
      var res = "";
      for(let i=0;i<n;i+=2){
          res += arr[i] + " ";
          
      }
      console.log(res);
    }
  }