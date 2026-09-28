class Solution {
public:
    int hammingWeight(int n) {
        int cnt=0;
        while(n>0){
            int dig=n%2;
            if(dig==1)
            cnt++;
            n=n/2;
        }
        return cnt;
    }
};