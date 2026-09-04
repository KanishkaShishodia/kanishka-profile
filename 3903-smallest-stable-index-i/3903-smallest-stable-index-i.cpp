class Solution {
public:
    int firstStableIndex(vector<int>& nums, int k) {
        int x=-1;
        for(int i=0;i<nums.size();i++){
            int max=nums[0];
            int min=nums[i];
            for(int j=0;j<=i;j++){
                if(nums[j]>=max)
                    max=nums[j];
            }
            for(int a=i;a<nums.size();a++){
                if(nums[a]<=min)
                    min=nums[a];
            }
            int diff=max-min;
            if(diff<=k){
                x=i;
                break;
            }
        }
        if(x>-1)
        return x;
        else 
        return -1;
    }
};