class Solution {
public:
    int smallestIndex(vector<int>& nums) {
        for(int i=0;i<nums.size();i++){
            int a=nums[i];
            int sum=0;
            while(a>0){
                int d=a%10;
                sum+=d;
                a=a/10;
            }
            if(sum==i)
            return i;
        }
        return -1;
    }
};