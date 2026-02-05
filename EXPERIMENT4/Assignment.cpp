#include <bits/stdc++.h>
using namespace std;

int main() {
    int K = 3;
    vector<int> scores = {10, 20, 5, 15, 25, 8};

    priority_queue<int, vector<int>, greater<int>> minHeap; 

    for (int s : scores) {
        if ((int)minHeap.size() < K) {
            minHeap.push(s);
        } else if (s > minHeap.top()) {
            minHeap.pop();
            minHeap.push(s);
        }

        if ((int)minHeap.size() < K) {
            cout << -1 << endl;
        } else {
            cout << minHeap.top() << endl; 
        }
    }
    return 0;
}
