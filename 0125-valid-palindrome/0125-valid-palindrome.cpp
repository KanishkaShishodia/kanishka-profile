class Solution {
public:
    bool isPalindrome(string s) {
        string st1;
        if(s==" ")
        return true;
        else
        {
            for(char &i:s)
                i=tolower(i);
            for(int i=0;i<s.size();i++){
                if((s[i]>='a'&&s[i]<='z')||(s[i]>='0'&&s[i]<='9')){
                    st1.push_back(s[i]);
                }
            }
            string st=st1;
            reverse(st1.begin(),st1.end());
            string st2=st1;
            if(st==st2)
            return true;
            else
            return false;
        }
    }
};