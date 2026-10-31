class Solution {
public:
    bool isPerfectSquare(int num) {
        if(num==1||num==4||num==9||num==16||num==25||num==36||num==49||num==64||num==81||num==100||num==121)
        return true;
        int n=num/10;
        for(long long i=1;i<=n;i++){
            if(i*i==num)
            return true;
        }
        return false;
    }
};