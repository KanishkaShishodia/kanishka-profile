class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int cnt=0;
        for(int i=0;i<ransomNote.size();i++){
            for(int j=0;j<magazine.size();j++){
                if(ransomNote[i]==magazine[j]){
                    cnt++;
                    magazine.erase(magazine.begin()+j);
                    break;
                }
            }
        }
        if(cnt==ransomNote.size())
        return true;
        else
        return false;
    }
};