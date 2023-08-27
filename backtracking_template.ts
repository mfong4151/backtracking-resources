const backtracking =(arr: number[]): number[][] => {
    const res: number[][] = [];
  
    const dfs = (i: number, temp:number[]): void => {
  
      if (i === arr.length){
         res.push([...temp])
         return
  
      }
  
      temp.push(arr[i])
      dfs(i + 1, temp)
      temp.pop()
      dfs(i + 1, temp)
  
      return
  
    }
  
    dfs(0, [])
    return res;
  
  }


//General backtracking template

const backtrackingComments =(arr: number[]): number[][] => {
    const res: number[][] = []; 
    
    /*
    *Docstrings refer to inner dfs function
    *@param {i} we use a pointer i to keep track of the place we're looking at in the array
    *@param {temp} use an array to store the current value of the dfs attempt 
    * Accessing this via closure is the easiest way to get all of the values
    */
    const dfs = (i: number, temp:number[]): void => {
        

      if (i === arr.length){    //base case is when we exceed the length of the array,
         res.push([...temp])    // Here we want to copy the value of temp, this is effectively hitting a nullptr in the decision tree
         return                 //Do more backtracking
  
      }
  
      temp.push(arr[i]) //Think of each .push as visitng a node in the decision tree

      //Here is where the backtracking occurs, you might have a loop here,
      // You might have some sort of other weird operation
      dfs(i + 1, temp)   
      temp.pop()  //Here we're chosing "not" to include the current value in our result
      dfs(i + 1, temp)
  
      return
  
    }
  
    dfs(0, [])
    return res;
  
  }
  