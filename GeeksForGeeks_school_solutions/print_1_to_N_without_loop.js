/*Print numbers from 1 to N without the help of loops.*/

class Solution{
    printNos(N){
        //code here
        
        let result = ""
        
        function recur(v){
            if(v == 0){
                return null;
            }
            
            result = v + ` ${result}`
            
            recur(v - 1 )
        }
        
        recur(N)
        
        console.log(result)
    }
}