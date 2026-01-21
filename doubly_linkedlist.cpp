#include <iostream>
using namespace std;
struct node 
{
    int data;
    node* prev;
    node* next;
    node(int val) 
    {
        data = val;
        prev = nullptr;
        next = nullptr;
    }
};

class doublylist 
{
node* head;
public:
doublylist() 
{ 
    head = nullptr; 
}
 void insert_begin(int val) {
        node* newnode = new node(val);
        if (head == nullptr) 
        {
            head = newnode;
            return;
        }
        newnode->next = head;
        head->prev = newnode;
        head = newnode;
    }

    void insert_end(int val)
     {
        node* newnode = new node(val);
        if (head == nullptr)
         {
            head = newnode;
            return;
        }
        node* temp = head;
        while (temp->next != nullptr) temp = temp->next;
        temp->next = newnode;
        newnode->prev = temp;
    }

    void insert_pos(int val, int pos) 
    {
        if (pos == 1)
         {
            insert_begin(val);
            return;
        }
        node* newnode = new node(val);
        node* temp = head;
        for (int i = 1; temp != nullptr && i < pos - 1; i++) 
        {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "position out of range\n";
            return;
        }
        newnode->next = temp->next;
        if (temp->next != nullptr) temp->next->prev = newnode;
        temp->next = newnode;
        newnode->prev = temp;
    }

    void delete_pos(int pos) 
    {
        if (head == nullptr) return;
        node* temp = head;
        if (pos == 1) {
            head = head->next;
            if (head != nullptr) head->prev = nullptr;
            delete temp;
            return;
        }
        for (int i = 1; temp != nullptr && i < pos; i++) {
            temp = temp->next;
        }
        if (temp == nullptr) {
            cout << "position out of range\n";
            return;
        }
        if (temp->prev != nullptr)
         temp->prev->next = temp->next;
        if (temp->next != nullptr) 
        temp->next->prev = temp->prev;
        delete temp;
    }

    void print_list() {
        node* temp = head;
        cout << "list";
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

int main() {
    doublylist dl;
    dl.insert_begin(10);
    dl.insert_end(20);
    dl.insert_end(30);
    dl.insert_pos(25, 3);
    dl.print_list();
    dl.delete_pos(2);
    dl.print_list();
    return 0;
}
