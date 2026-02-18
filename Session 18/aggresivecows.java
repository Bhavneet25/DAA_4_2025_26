import java.util.Arrays;

class Solution {
    public int aggressiveCows(int[] stalls, int k) {
        Arrays.sort(stalls);
        int n = stalls.length;
        int low = 1;
        int high = stalls[n - 1] - stalls[0];
        int ans = 0;
        
        while (low <= high) {
            int mid = (low + high) / 2;
            if (isPossible(stalls, mid, k)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
    
    private boolean isPossible(int[] stalls, int mid, int k) {
        int count = 1;
        int lastPos = stalls[0];
        
        for (int i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastPos >= mid) {
                count++;
                lastPos = stalls[i];
            }
            if (count >= k) return true;
        }
        return false;
    }
}
