//check if the number is prime or not by using function
function  check_prime(num){
    let count=0;
    for(let i=2;i<=num**(1/2);i++){
      if(num%i==0){
        count++;
      }
    }
    if(count==0){
      console.log('prime');
    }else{
      console.log('composite');
    }
  }
check_prime(14);
check_prime(97);
check_prime(117);
check_prime(211);
check_prime(17);
