class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int max_diff=-1;
        int diff=-1;
        for(int i=0;i<nums.size()-1;i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i]<nums[j]){
                    diff=nums[j]-nums[i];
                }
                max_diff=max(diff,max_diff);
            }
        }
        return max_diff;
    }
};