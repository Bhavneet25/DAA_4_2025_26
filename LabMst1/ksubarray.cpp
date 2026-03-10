class  Solution {
  public:
    vector<int> maxOfSubarrays(vector<int>& arr, int k) {
        // code here
        int n=arr.size();
        vector<int> result;
        int i=0;
        int a=INT_MIN;
        while(i<k){
             i++;
        }
        int left=0;
        int right=i;
        while(right<=n){
            int a=INT_MIN;
            for(int i=left; i<right; i++){
                a = max(a, arr[i]);
            }
            result.push_back(a);
            left++;
            right++;
        }
        return result;
    }
};
