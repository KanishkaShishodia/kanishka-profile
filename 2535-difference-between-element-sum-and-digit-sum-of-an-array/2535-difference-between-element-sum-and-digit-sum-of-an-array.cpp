class Solution {
public:
    int differenceOfSum(vector<int>& nums) {
        int ele_sum=0;
        for(int i=0;i<nums.size();i++)
            ele_sum=ele_sum+nums[i];
        int dig_sum=0;
        for(int i=0;i<nums.size();i++)
        {
            if(nums[i]<10)
            dig_sum=dig_sum+nums[i];
            else{
                while(nums[i]>0){
                    int dig=nums[i]%10;
                    dig_sum=dig_sum+dig;
                    nums[i]=nums[i]/10;
                }
            }
        }
        int diff=ele_sum-dig_sum;
        if(diff>=0)
        return diff;
        else 
        return -diff;
    }
};