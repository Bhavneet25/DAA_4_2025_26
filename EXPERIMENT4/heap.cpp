#include <bits/stdc++.h>
using namespace std;
#define MAX 100

int heap[MAX];
int heapSize = 0;

void heapifyDown(int i) {
    int smallest = i;
    int left = 2*i+1;
    int right = 2*i+2;
    if(left < heapSize && heap[left] < heap[smallest]) smallest = left;
    if(right < heapSize && heap[right] < heap[smallest]) smallest = right;

    if(i != smallest) {
        swap(heap[i], heap[smallest]);
        heapifyDown(smallest);
    }
}

void heapifyUp(int i) {
    while(i > 0 && heap[(i-1)/2] > heap[i]) {
        swap(heap[(i-1)/2], heap[i]);
        i = (i-1)/2;
    }
}

void insert(int val) {
    if(heapSize == MAX) {
        cout << "Heap is full\n";
        return;
    }
 heap[heapSize] = val;
    heapSize++;
    heapifyUp(heapSize-1);
}

int searchNode(int val) {
    for(int i = 0; i < heapSize; i++) {
        if(heap[i] == val) return i;
    }
    return -1;
}

void deleteAtIndex(int r) {
    if(heapSize == 0) {
        cout << "Underflow\n";
        return;
    }
    if(r < 0 || r >= heapSize) {
        cout << "Invalid index\n";
        return;
    }
    heap[r] = heap[heapSize-1];
    heapSize--;
    if(r > 0 && heap[r] < heap[(r-1)/2]) {
        heapifyUp(r);
} else {
        heapifyDown(r);
    }
}

int main() {
    insert(3);
    insert(12);
    insert(9);
    insert(2);

    cout << "Heap before deletion: ";
    for(int i = 0; i < heapSize; i++) cout << heap[i] << " ";
    cout << endl;

    int pos = searchNode(9);
    if(pos != -1) {
        cout << "Deleting value 9 at index " << pos << endl;
        deleteAtIndex(pos);
    } else {
cout << "Value not found\n";
    }

    cout << "Heap after deletion: ";
    for(int i = 0; i < heapSize; i++) cout << heap[i] << " ";
    cout << endl;
}
