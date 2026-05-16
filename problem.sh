#Kullanıcıdan klasör yolu alınacak.
#Eğer klasör yoksa hata mesajı verilecek.
#.txt dosya sayısı ekrana yazdırılacak.
sayac=0
echo "dosya ismini giriniz"
read dosya

   
for sayac in $(find ~ -name "$dosya" 2>/dev/null)
do
    echo $sayac
    ((sayac++))

done
if [ $sayac -gt 0 ] ;then
    echo "toplam $sayac adet dosya bulundu" 
else
    echo "papka tapylmady"
fi


sayac=0
echo "kelime gir:>"
read Ddos
for sonuc in $(find ~ -name "$Ddos" 2>/dev/null)
do
    echo "bulundu:"
    echo $sonuc
    ((sayac++))
done
echo "toplam $sayac adet dosya bulundu"

grep -r "$Ddos" ~ 2>/dev/null

grep -rho "$Ddos.*" ~ 2>/dev/null