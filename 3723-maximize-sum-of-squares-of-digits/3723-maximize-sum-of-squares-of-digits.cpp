class Solution {
public:
    string maxSumOfSquares(int num, int sum) {
        if (sum>9*num||sum<0) {
            return "";
        }
        int d=sum/9;
        int r=sum%9;
        string ans(d,'9');
        if(r>0)
        ans.push_back(r+'0');
        ans.append(num-ans.size(),'0');
        return ans;
    }
};