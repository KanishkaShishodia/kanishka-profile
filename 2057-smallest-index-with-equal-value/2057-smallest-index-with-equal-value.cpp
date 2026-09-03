class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        int cnt=0;
        vector<int> ans;
        for(int i=0;i<nums.size();i++){
            if(i%10==nums[i]){
               cnt++;
               ans.push_back(i);
            }
        }
        if(cnt==nums.size())
        return 0;
        else if(cnt>0&&cnt<nums.size())
        return *min_element(ans.begin(),ans.end());
        else 
        return -1;
    }
};