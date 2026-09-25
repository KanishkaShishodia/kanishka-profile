class Solution {
public:
    int titleToNumber(string columnTitle) {
        int n=columnTitle.size();
        vector<int> ans;
        for(int i=0;i<n;i++){
            int x=columnTitle[i]-64;
            ans.push_back(x);
        }
        int y=0;
        for(int i=0;i<n;i++){
            y+=ans[i]*pow(26,n-i-1);
        }
        return y;
    }
};