import random
kurban_listesi=[]
kurtulanlar=[]
infaz_edilen=""
for i in range(6):
    sec=input('seçilecek kurbanın ismini oku :>')
    print("{} sahneye ".format(sec))
    kurban_listesi.append(sec)    

    silah_patladı=0
    sayac=1     
    r=random.randint(1,6)
    print("ss subayi silahini çıkardı ve rus ruleti için hazırladı.")
while silah_patladı==False:
    
    if sayac==r:
       print("boom ........  Kişi öldü".format(sayac))
       silah_patladı=True
       infaz_edilen=kurban_listesi[sayac]
    else:
        print("tıkk .... {}  kişi kurtuldu sıra 2-nji kişide".format(sayac))
        sayac=sayac+1
        kurtulanlar.append(kurban_listesi[sayac])

