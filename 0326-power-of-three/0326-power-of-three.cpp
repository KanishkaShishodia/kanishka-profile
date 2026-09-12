class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n==9||n==3||n==27||n==81||n==243||n==729||n==2187||n==6561||n==19683||n==59049)
        return true;
        long long x=n/6561;
        for(long long i=0;i<=x;i++)
        {
            if(pow(3,i)==n)
            return true;
        }
        return false;
    }
};