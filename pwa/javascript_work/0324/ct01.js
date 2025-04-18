/*
빈병 a 개를 가져다주면 콜라 b 병을 주는 마트에서
빈병 n 개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제.

보유중인 빈병 개수가 a 개 미만이면 추가적인 빈 병을 받을 수 없음.

ex)
빈병 a = 2 개를 가져다주면 콜라 b = 1 개를 주는 마트에서
빈병 n = 20 개를 가져다주면 콜라 return 19 개를 받을 수 있음
19 개 => 20 개를 2개로 나눠서 10개, 10개를 2개로 나눠서 5개, 5개를 2개로 나눠서 2개 (나머지 1) ,
2개를 2개로 나눠서 1개 , 1개를 나머지 1개랑 더해서 2개를 2개로 나눠서 1개
10개 + 5개 + 2개 + 1개 + 1개 = 19개

빈병 a = 3개를 가져다주면 콜라 b = 1 개를 주는 마트
빈병 n = 20 개를 가져다주면 콜라 return 9개를 받을 수 있음
9개 => 20개를 3으로 나눠서 6개 ( 나머지 2), 6개를 3개로 나눠서 2개, 2개 + 나머지 2개 4개를 3으로
나눠서 1개(나머지1)  2는 a 보다 작으므로 return.
6 + 2 + 1 = 9개
20/3 6..2
6/3 2..0
2+2=4 4/3 1..1


빈병 a 4개를 가져다주면 콜라 b = 3 개를 주는 마트
빈병 n = 40 개를 가져다주면
나누기 4개 몫 5*3(b) 15 받음 , 15 나누기 4 몫 4*3 12 받음 (나머지 1)
총 6개 return
40/4

원래 병 수에서
더하고
빼고





 */


/*
a 개 가져다주면 b 개 받을 수 있음
총 n개 병을 가지고 있으면 받을 수 있는 총 병의 개수를 리턴

20 => 10
10 => 5
5 => 2 +1
3 => 1 +1
1+1 => 1
10+5+3+1
 */

function solution(a, b, n){
    let sum = 0;
    while(true){
        sum += Math.floor(n / a) * b ;
        n = Math.floor(n /a)*b + n % a ;
        if(n < a)
            break;
    }
    return sum;
}
console.log(solution(2,1,20));
console.log(solution(3,2,40));