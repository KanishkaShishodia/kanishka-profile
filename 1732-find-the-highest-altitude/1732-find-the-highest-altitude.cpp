class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int n=gain.size();
        vector<int> arr(n+1);
        arr[0]=0;
        arr[1]=gain[0];
        for(int i=2;i<n+1;i++){
            arr[i]=arr[i-1]+gain[i-1];
        }
        int max=*max_element(arr.begin(),arr.end());
        return max;
    }
};