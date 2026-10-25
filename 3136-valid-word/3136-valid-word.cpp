class Solution {
public:
    bool isValid(string word) {
        if(word.size()<3)
        return false;
        for (char &c : word) {
            c = tolower(c);
        }
        int vowel=0,other=0,dig=0;
        int cons=0;
        for(int i=0;i<word.size();i++){
            if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u')
            vowel++;
            else if(word[i]>='b'&&word[i]<='z'&&(word[i]!='a'||word[i]!='e'||word[i]!='i'||word[i]!='o'||word[i]!='u'))
            cons++;
            else if(word[i]=='$'||word[i]=='#'||word[i]=='@'||word[i]=='&')
            other++;
            else if(word[i]=='0'||word[i]=='1'||word[i]=='3'||word[i]=='2'||word[i]=='4'||word[i]=='5'||word[i]=='6'||word[i]=='7'||word[i]=='8'||word[i]=='9')
            dig++;
        }
        if(vowel>=1&&cons>=1&&(vowel+cons+dig)>=3&&other==0)
        return true;
        else
        return false;
    }
};