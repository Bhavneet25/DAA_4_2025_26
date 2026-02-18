class Solution {
    public int minEatingSpeed(int[] piles, int h) 
    {
       int l=1;
       int r=Arrays.stream(piles).max().getAsInt();
       int ans=0;
       while(l<=r)
       {
        int mid=(l+r)/2;
        if(verify(piles,mid,h))
        {
            ans=mid;
            r=mid-1;
        }
        else
        {
            l=mid+1;
        }
       }
       return ans;
    }
    boolean verify(int[] piles,int mid,int h)
    {
        long count=0;
        for(int i=0;i<piles.length;i++)
        {
            if(piles[i]%mid!=0)
            {
                count++;
                 
            }
           count=count+(piles[i]/mid);
        }
        return count<=h;
    }
}