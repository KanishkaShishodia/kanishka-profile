class Solution {
public:
    char findTheDifference(string s, string t) {
        int k=0;
        for(char ch:s){
            k^=ch;
        }
        for(char ch:t){
            k^=ch;
        }
        return (char)k;
    }
};