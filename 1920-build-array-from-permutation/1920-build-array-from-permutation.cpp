class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> nums1;
        nums1=nums;
        for(int i=0;i<nums.size();i++){
            nums[i]=nums1[nums1[i]];
        }
        return nums;
    }
};