const size = 40;
var arrlist = [];

function swap(arrlist, i, j) { 
    let temp = arrlist[i]; 
    arrlist[i]=arrlist[j]; 
    arrlist[j] = temp; 
} 

function BubbleSort(arrlist){
    const container = [];
	let n = arrlist.length; 
    for (let i = 0; i < n-1; i++){
        
        for (let j = 0; j < n-i-1; j++){
            const temparr = [];
            temparr.push(j);
            temparr.push(j+1);
            if (arrlist[j] > arrlist[j+1]) 
            { 
                swap(arrlist, j, j+1 )
                // let temp = arrlist[j]; 
                // arrlist[j] = arrlist[j+1]; 
                // arrlist[j+1] = temp; 
                temparr.push(j);
                temparr.push(j+1);
            }
            container.push(temparr);
        } 
    } 
    return container;
}


function animation(animate){
    let k = 0;
    for (let i = 0; i <= animate.length; i++) {

        if(animate[i] === undefined) continue;

        setTimeout(() => {
            $( `#bar${animate[i][0]}` ).css('background-color', '#af45d6');
            $( `#bar${animate[i][1]}` ).css('background-color', '#af45d6');
            // console.log(i);
        }, 50 * k);
        k+=1; 

        if (animate[i].length !== 2){

            setTimeout(() => {
                $( `#bar${animate[i][0]}` ).css('background-color', '#0eeb0e ');
                $( `#bar${animate[i][1]}` ).css('background-color', '#0eeb0e');
                h1 = $( `#bar${animate[i][0]}` ).height();
                h2 = $( `#bar${animate[i][1]}` ).height();
                $( `#bar${animate[i][0]}` ).height(h2);
                $( `#bar${animate[i][1]}` ).height(h1);
            }, 50 * k); 

            k++

            
        }
        setTimeout(() => {
                $( `#bar${animate[i][0]}` ).css('background-color', 'rgba(66, 134, 244, 0.8)');
             $( `#bar${animate[i][1]}` ).css('background-color', 'rgba(66, 134, 244, 0.8)');
        }, 50 * k); 
            k++;
    }
    
     
}  


function selection_sort (arrlist, n) {
    var container = [];
    var minimum;        

    for(let i = 0; i < n-1 ; i++)  {
         minimum = i ;


        for(let j = i+1; j < n ; j++ ) {
          container.push([ j , minimum ])
            if(arrlist[ j ] < arrlist[ minimum ])  {
            minimum = j ;
            }
         }
      container.push([ minimum, i, minimum, i ])
      swap(arrlist, minimum, i); 
    }

  return container;
}


function printarray(arrlist){

	for(let i=0;i<size;i++){
		console.log(arrlist[i]);
	}
}

function clickBubble(){

        animate = BubbleSort(arrlist);
        animation(animate);

}


function clickMerge(){

  function merge_animation(animate){
    let k = 0;
    for (let i = 0; i <= animate.length; i++) {

        if(animate[i] === undefined) continue;

        setTimeout(() => {
            $( `#bar${animate[i][0]}` ).css('background-color', '#af45d6');
            $( `#bar${animate[i][1]}` ).css('background-color', '#af45d6');
            // console.log(i);
        }, 50 * k);
        k+=1; 

        if (animate[i].length !== 2){

            setTimeout(() => {
                $( `#bar${animate[i][0]}` ).css('background-color', '#0eeb0e ');
                $( `#bar${animate[i][1]}` ).css('background-color', '#0eeb0e');
                // h1 = $( `#bar${animate[i][0]}` ).height();
                // h2 = $( `#bar${animate[i][1]}` ).height();
                $( `#bar${animate[i][0]}` ).height(animate[i][2]);
                // $( `#bar${animate[i][1]}` ).height(h1);
            }, 50 * k); 

            k++

            
        }
        setTimeout(() => {
                $( `#bar${animate[i][0]}` ).css('background-color', 'rgba(66, 134, 244, 0.8)');
             $( `#bar${animate[i][1]}` ).css('background-color', 'rgba(66, 134, 244, 0.8)');
        }, 50 * k); 
            k++;
    }
    
     
}

        animate = [];

        function merge(array, l, m, r) 
          { 
            console.log(l, m, r);
          var i, j, k; 
          var n1 = m - l + 1;
          // var n1 = m-l; 
          // console.log("n1="+n1);
          var n2 =  r - m; 
          // console.log("n2="+n2);
        
          /* create temp arrays */
          var L = [];
          var R = [];

          for (let i = 0; i < n1; i++)
              L.push(array[l + i]); 
          for (let j = 0; j < n2; j++) 
              R.push(array[m + 1+ j]); 

          // console.log(L);
          // console.log(R);
        
          /* Copy data to temp arrays L[] and R[] */
          // for (let i = 0; i < n1; i++) 
          //     L[i] = arrlist[l + i]; 
          // for (let j = 0; j < n2; j++) 
          //     R[j] = arrlist[m + 1+ j]; 
        
          /* Merge the temp arrays back into arr[l..r]*/
          i = 0; // Initial index of first subarray 
          j = 0; // Initial index of second subarray 
          k = l; // Initial index of merged subarray 
          while (i < n1 && j < n2) 
          { 
              animate.push( [ l+i, m+1+j ] );
              if (L[i] <= R[j]) 
              { 
                  animate.push( [k, l+i, L[i]] );
                  // console.log( k, l+i );
                  array[k] = L[i]; 
                  i++; 
              } 
              else
              { 
                  animate.push( [k , m + 1+ j, R[j]] );
                  // console.log( k , m + 1+ j );
                  array[k] = R[j]; 
                  j++; 
              } 
              k++; 
          } 
        
          /* Copy the remaining elements of L[], if there 
             are any */
          while (i < n1) 
          { 
            animate.push( [k, l+i] );
            animate.push( [k, l+i, L[i]] );
            // console.log( k, l+i );
              array[k] = L[i]; 
              i++; 
              k++; 
          } 
        
          /* Copy the remaining elements of R[], if there 
             are any */ 
          while (j < n2) 
          { 
            animate.push( [k, m + 1+ j] );
            animate.push( [k, m + 1+ j, R[j]] );
            // console.log( k , m + 1+ j );
              array[k] = R[j]; 
              j++; 
              k++; 
          } 
      } 

      const array = arrlist.slice();
          function merge_sort (array , start , end )
          {
            // console.log(start);
            // console.log(end);
               if( start < end ) {
               // let mid = (start + end ) / 2 ;
                const mid = Math.floor((start + end) / 2);           // defines the current array in 2 parts .
               merge_sort (array , start , mid ) ;                 // sort the 1st part of array .
               merge_sort (array , mid+1 , end ) ;              // sort the 2nd part of array.

             // merge the both parts by comparing elements of both the parts.
              merge(array, start , mid , end );   
             }    
             // return ;                
          }
          
          // arr = arrlist.slice();
          // console.log(array);
        merge_sort (array , 0 , size-1 );
        // console.log(array);
        merge_animation(animate);
        arrlist=array.slice();
        // console.log(arrlist);
        // console.log(animate);


}

function clickQuickSort(){
animate = [];
  function partition(arrlist, left, right) {
    var pivot   = arrlist[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (arrlist[i] < pivot) {
          animate.push( [ i, pivot ] );
            i++;
        }
        while (arrlist[j] > pivot) {
          animate.push( [ j, pivot ] );
            j--;
        }
        if (i <= j) {
          animate.push( [ i, j, i, j ] );
            swap(arrlist, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arrlist, left, right) {
    var index;
    if (arrlist.length > 1) {
        index = partition(arrlist, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(arrlist, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(arrlist, index, right);
        }
    }
    // return arrlist;
}
// console.log(arrlist);
quickSort(arrlist, 0, arrlist.length - 1);
// console.log(arrlist);
animation(animate);
}

function clickHeapSort(){
animate=[];
var array_length;
function heap_root(arrlist, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && arrlist[left] > arrlist[max]) {
      animate.push( [ left, max ] );
        max = left;
    }

    if (right < array_length && arrlist[right] > arrlist[max])     {
      animate.push( [ left, max ] );
        max = right;
    }

    if (max != i) {
      animate.push( [ i, max ] );
      animate.push( [ i, max, i, max ] );
        swap(arrlist, i, max);
        heap_root(arrlist, max);
    }
}


function heapSort(arrlist) {
    
    array_length = arrlist.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(arrlist, i);
      }

    for (i = arrlist.length - 1; i > 0; i--) {
      animate.push( [ 0, i ] );
      animate.push( [ 0, i, 0, i ] );
        swap(arrlist, 0, i);
        array_length--;
      
      
        heap_root(arrlist, 0);
    }
}
// console.log(arrlist);
heapSort(arrlist);
// console.log(arrlist);
animation(animate);
}

function clickSelectionSort(){

        // animate = BubbleSort(arrlist);
        animate = selection_sort(arrlist, size);
        animation(animate);

}
// addRow();

// function addRow() { 
// console.log('#');
// 	var div = document.createElement("div");
//     div.addClass('arrayElement');
//     document.getElementById("content").appendChild(div);
//  // document.getElementById("content").innerHTML +=  "<div id='bar1' class = 'arrayElement'></div>"; 
//             // $('<div>').attr({color: 'red'},{value : 'test'}).appendTo("content");

//     // $(".content").append('<div id = "newElement">A ' + 'Computer Science portal for geeks</div>'); 
// } 

$(document).ready(function(){

    min = 50;
    max = 500;
    for(let i=0;i<size;i++){
        // console.log(i);
        const val = Math.floor(Math.random() * (max - min + 1) ) + min;
        arrlist.push(val);
         $( `#bar${i}` ).height(val);
    }


    $("#GenerateArray").click(function(){
  // action goes here!!
  arrlist= [];
    min = 50;
    max = 500;
    for(let i=0;i<size;i++){
        // console.log(i);
        const val = Math.floor(Math.random() * (max - min + 1) ) + min;
        arrlist.push(val);
         $( `#bar${i}` ).height(val);
    }

   
}); 



// final closing
});

