class Solution {
public:
    int reverse(int x) {
        long long n=x;
        long long sum=0;
        if(n<0){
            while(n!=0)
            {
                long long dig=n%10;
                sum=sum*10+dig;
                n=n/10;
            }
        }
        else {
            while(n>0)
            {
                long long dig=n%10;
                sum=sum*10+dig;
                n=n/10;
            }
        }
        if(sum>INT_MAX || sum< INT_MIN)
        return 0;
        else 
        return sum;
    }
};