class Solution {
public:
    string triangleType(vector<int>& nums) {
        string a="equilateral";
        string b="isosceles";
        string c="scalene";
        string d="none";
        if((nums[0]+nums[1])>nums[2]&&(nums[1]+nums[2])>nums[0]&&(nums[2]+nums[0])>nums[1]){
            if(nums[0]==nums[1]&&nums[1]==nums[2]&&nums[0]==nums[2])
            return a;
            else if(nums[0]==nums[1]||nums[1]==nums[2]||nums[0]==nums[2])
            return b;
            else
            return c;
        }
        else
        return d;
    }
};