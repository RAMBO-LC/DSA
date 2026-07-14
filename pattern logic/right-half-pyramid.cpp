#include<iostream>
using namespace std;

int n = 5;

int main(){
    for ( int r = 1; r <= n; r++){
        for( int c = 1; c <= n-r ; c++)
        { //blanks space(rightside)
            cout << "  " ;    
        }
        for (int c =1; c <= r; c++)
        { //triangle(leftside)
            cout << " *" ;
        }
        cout << endl;
    }

    return 0;
}