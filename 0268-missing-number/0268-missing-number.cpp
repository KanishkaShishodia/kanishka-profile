class Solution {
public:
    int missingNumber(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int k=0;
        bool flag=false;
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=i){
                flag=true;
                k=i;
                break;
            }
        }
        if(flag==true)
        return k;
        else
        return nums.size();
    }
};