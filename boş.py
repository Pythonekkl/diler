# balagan hatarını görmek üçün 
import pandas as pd 
dizi={1,2,3,4,5,67,2324}
data=pd.DataFrame(dizi)
print(data.head(5))

#data hakynda umumuy informasiya 
print(data.info())


print(data.describe())


#bali bir üstün saylamak
data=pd.DataFrame({
    "add":["azizbek","yasmina","sabina"],
    "yaş":[21,4,1]
})
print(data[["add",'yaş']])
# tablo içinda üstünlani görkazadi
#print(data.columns)

#satyr saylamak
print("satır",data.iloc[0])

#первая линия
print("ilk satır",data.iloc[0:5])

print(data[data["yaş"] > 20])

"""  head() → baş
tail() → son
info() → yapı
describe() → istatistik
iloc[] → satır seçme
filtre → koşullu seçim"""