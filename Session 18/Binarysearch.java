import java.util.*;

class Binarysearch {
    int[] arr = new int[5];
    int middle, right, left, target;
    Scanner sc = new Scanner(System.in);

    void input() {
        System.out.println("Enter 5 elements of the array:");
        for (int i = 0; i < 5; i++) {
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr); 

        System.out.println("Enter the target value:");
        target = sc.nextInt();

        left = 0;
        right = arr.length - 1;
    }

    void process() {
        while (left <= right) {
            middle = (left + right) / 2;

            if (arr[middle] == target) {
                System.out.println("Target found at index: " + middle);
                return; 
            } else if (arr[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        System.out.println("Target not found in the array.");
    }

    int lowerBound(int arr[], int target) {
        int l = 0, r = arr.length;
        while (l < r) {
            int m = (l + r) / 2;
            if (arr[m] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l; 
    }

    int upperBound(int arr[],int target)
    {
        
    }

    public static void main(String[] args) {
        Binarysearch bs = new Binarysearch();
        bs.input();
        bs.process();

        int[] arr1 = {10, 20, 40, 80};
        int lb = bs.lowerBound(arr1, 20);
        System.out.println("Lower bound index: " + lb);
    }
}

