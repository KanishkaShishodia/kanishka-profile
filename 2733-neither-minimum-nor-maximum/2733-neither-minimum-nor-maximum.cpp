class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        if(nums.size()==0||nums.size()==1)
        return -1;
        sort(nums.begin(),nums.end());
        nums.erase(nums.begin()+nums.size()-1);
        nums.erase(nums.begin()+0);
        if(nums.size()==0)
        return -1;
        else
        return nums[0];
    }
};