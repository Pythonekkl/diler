
#3.eğer sayi çift ise bu sayiyi bir toplam degişkenine ekle 
#4.eğer sayi tek ise, bu sayıyı atla işlem yapma 
#5.eğer sayi negatif ise, döngüyü tamamen durdur (indi yeç bir sana karama )
#6.dönğü bittiginde veya durduğunda elde ettiğin toplam sonucunu ekrana yazdır .
import sys
sanlar=[1,2,3,4,5,6,5,-5,3]
cift_toplam=0
tek_toplam=0
for s in sanlar:
    if s<0:
        print("Negatif ",s)
        break
    if s % 2==0:
        cift_toplam+=(s*2)
    else:
        tek_toplam+=s

        print("jüft sanlar işlangan toparlangany:",cift_toplam)
        print("tek sayıların toplamı:",tek_toplam)





































