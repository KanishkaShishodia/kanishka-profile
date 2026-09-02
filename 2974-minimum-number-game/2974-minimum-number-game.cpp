class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        for(int i=0;i<nums.size();i++)
        {
            for(int j=i+1;j<nums.size();j++)
            {
                if(nums[j]<nums[i])
                {
                    int temp=nums[i];
                    nums[i]=nums[j];
                    nums[j]=temp;
                }
            }
        }
        int s=nums.size();
        vector<int> arr(s);
        for(int i=0;i<s;i+=2)
        {
            int temp=nums[i];
            nums[i]=nums[i+1];
            nums[i+1]=temp;
        }
        for(int i=0;i<s;i++)
        {
            arr[i]=nums[i];
        }
         return arr;
    }
};