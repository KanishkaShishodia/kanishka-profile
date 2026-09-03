class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int pivot) {
        vector<int> ans1;
        vector<int> ans2;
        vector<int> ans3;
        for(int i=0;i<nums.size();i++){
            if(nums[i]<pivot)
            ans1.push_back(nums[i]);
            else if(nums[i]==pivot)
            ans2.push_back(nums[i]);
            else
            ans3.push_back(nums[i]);
        }
        ans1.insert(ans1.end(),ans2.begin(),ans2.end());
        ans1.insert(ans1.end(),ans3.begin(),ans3.end());
        return ans1;
    }
};