class Solution {
public:
    bool isValid(string s) {
        long long int top=-1;
        vector<long long int> vec(s.size());
        for(long long int i=0;i<s.size();i++)
        {
            if(s[i]=='('||s[i]=='['||s[i]=='{')
            {
                top++;
                vec[top]=s[i];
            }
            if(s[i]==')'||s[i]==']'||s[i]=='}')
            {
                if(top==-1)
                return false;
                else if((s[i]==')'&&vec[top]=='(')||(s[i]==']'&&vec[top]=='[')||(s[i]=='}'&&vec[top]=='{'))
                {
                    top--;
                }
                else 
                return false;
            }
        }
        if(top==-1)
        return true;
        else
        return false;
    }
};