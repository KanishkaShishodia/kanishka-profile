class Solution {
public:
    int peakValleyDifference(vector<int>& nums) {
        int sum1=0;
        int sum2=0;
        for(int i=1;i<nums.size()-1;i++){
            if(nums[i]>nums[i-1]&&nums[i]>nums[i+1])
            sum1+=nums[i];
            else if(nums[i]<nums[i-1]&&nums[i]<nums[i+1])
            sum2+=nums[i];
        }
        return sum1-sum2;
    }
};