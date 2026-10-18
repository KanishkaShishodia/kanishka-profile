class Solution {
public:
    int maximum69Number (int num) {
        string st=to_string(num);
        int flag=0;
        for(int i=0;i<st.size();i++){
            if(st[i]=='6'){
                st[i]='9';
                flag=1;
            }
            if(flag==1)
            break;
        }
        return stoi(st);
    }
};