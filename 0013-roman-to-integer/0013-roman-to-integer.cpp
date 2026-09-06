class Solution {
public:
    int romanToInt(string s) {
        int digit=0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='I'&&s[i+1]=='V'){
            digit+=4;
            i++;}
            else if(s[i]=='I'&&s[i+1]=='X'){
            digit+=9;
            i++;}
            else if((s[i]=='I'&&s[i+1]!='X')||(s[i]=='I'&&s[i+1]!='V'))
            digit+=1;
            else if(s[i]=='V')
            digit+=5;
            else if(s[i]=='X'&&s[i+1]=='L'){
            digit+=40;
            i++;}
            else if(s[i]=='X'&&s[i+1]=='C'){
            digit+=90;
            i++;}
            else if((s[i]=='X'&&s[i+1]!='L')||(s[i]=='X'&&s[i+1]!='C'))
            digit+=10;
            else if(s[i]=='L')
            digit+=50;
            else if(s[i]=='C'&&s[i+1]=='D'){
            digit+=400;
            i++;}
            else if(s[i]=='C'&&s[i+1]=='M'){
            digit+=900;
            i++;}
            else if((s[i]=='C'&&s[i+1]!='D')||(s[i]=='C'&&s[i+1]=='M'))
            digit+=100;
            else if(s[i]=='D')
            digit+=500;
            else 
            digit+=1000;
        }
        return digit;
    }
};