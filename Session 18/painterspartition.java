class Solution {
    public int minTime(int[] arr, int k) {
        int low = 0, high = 0;
        for (int len : arr) {
            low = Math.max(low, len);
            high += len;
        }
        int result = high;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (isPossible(arr, k, mid)) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    private boolean isPossible(int[] arr, int k, int maxTime) {
        int painters = 1;
        int currTime = 0;
        for (int len : arr) {
            currTime += len;
            if (currTime > maxTime) {
                painters++;
                currTime = len;
                if (painters > k) return false;
            }
        }
        return true;
    }
}
class Solution {
    public int minTime(int[] arr, int k) {
        int low = 0, high = 0;
        for (int len : arr) {
            low = Math.max(low, len);
            high += len;
        }
        int result = high;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (isPossible(arr, k, mid)) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    private boolean isPossible(int[] arr, int k, int maxTime) {
        int painters = 1;
        int currTime = 0;
        for (int len : arr) {
            currTime += len;
            if (currTime > maxTime) {
                painters++;
                currTime = len;
                if (painters > k) return false;
            }
        }
        return true;
    }
}

